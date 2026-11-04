<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

defineProps<{ title: string; area: 'institute' | 'regulatory' }>()
const auth = useAuthStore()
const router = useRouter()
const menuOpen = ref(false)
const signingOut = ref(false)
const logoutError = ref('')
async function signOut() {
  if (signingOut.value) return
  signingOut.value = true
  logoutError.value = ''
  try {
    await auth.logout()
    await router.replace({ name: 'login' })
  } catch {
    // Local credentials are cleared by the store even when the server rejects logout.
    await router.replace({ name: 'login' })
  } finally {
    signingOut.value = false
  }
}
function changeInstitute() {
  auth.clearInstitute()
  void router.replace({ name: 'institute-select' })
}
</script>

<template>
  <div class="workspace">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <aside class="sidebar" :class="{ 'sidebar-open': menuOpen }" aria-label="Workspace navigation">
      <div class="brand"><span class="brand-mark">ITI</span><span>Institute ERP<small>Bihar · CTS</small></span></div>
      <p class="nav-heading">{{ area === 'regulatory' ? 'Platform' : 'Institute' }}</p>
      <nav aria-label="Main navigation">
        <RouterLink :to="{ name: area === 'regulatory' ? 'regulatory' : 'dashboard' }" @click="menuOpen = false">
          <span aria-hidden="true">▦</span> Overview
        </RouterLink>
      </nav>
      <p class="sidebar-note">Additional modules will be enabled after their API and permission checks are implemented.</p>
    </aside>
    <div class="workspace-body">
      <header class="topbar">
        <button class="menu-toggle secondary" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">☰</button>
        <div class="top-title"><small>{{ area === 'regulatory' ? 'Regulatory Admin' : 'Institute workspace' }}</small><strong>{{ title }}</strong></div>
        <div class="top-actions">
          <span class="user-name">{{ auth.user?.display_name }}</span>
          <button v-if="area === 'institute' && auth.institutes.length > 1" class="secondary" @click="changeInstitute">Switch institute</button>
          <button class="secondary" :disabled="signingOut" @click="signOut">{{ signingOut ? 'Signing out…' : 'Sign out' }}</button>
        </div>
      </header>
      <main id="main-content" class="workspace-main" tabindex="-1">
        <slot />
      </main>
      <footer class="workspace-footer">Bihar Private Multi-Institute ITI ERP · Institute-purpose records</footer>
    </div>
  </div>
</template>
