<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const busy = ref(false)
const router = useRouter()
const route = useRoute()
const auth = useAuthStore()
async function submit() {
  if (busy.value) return
  busy.value = true
  error.value = ''
  try {
    await auth.login(email.value.trim(), password.value)
    password.value = ''
    if (auth.hasRole('regulatory_admin')) {
      await router.replace({ name: 'regulatory' })
    } else {
      const redirect = route.query.redirect
      // Redirect only to app-local paths; route guards still enforce access.
      await router.replace(typeof redirect === 'string' && redirect.startsWith('/') && !redirect.startsWith('//') && !redirect.startsWith('/\\')
        ? redirect : { name: 'dashboard' })
    }
  } catch {
    error.value = 'Sign in failed. Check your credentials or contact your administrator.'
  } finally { busy.value = false }
}
</script>

<template>
  <main class="center">
    <form class="panel" @submit.prevent="submit">
      <p class="eyebrow">Bihar Private ITI ERP</p>
      <h1>Sign in</h1>
      <p>Access is limited to authorized ERP accounts.</p>
      <label for="email">Email</label>
      <input id="email" v-model="email" autocomplete="username" type="email" required />
      <label for="password">Password</label>
      <input id="password" v-model="password" autocomplete="current-password" type="password" required />
      <p v-if="error" role="alert" class="error">{{ error }}</p>
      <button type="submit" :disabled="busy">{{ busy ? 'Signing in…' : 'Sign in' }}</button>
    </form>
  </main>
</template>
