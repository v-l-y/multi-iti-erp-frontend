<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
const auth = useAuthStore()
const router = useRouter()
async function signOut() { await auth.logout(); await router.replace('/login') }
</script>

<template>
  <main class="center">
    <section class="panel wide">
      <p class="eyebrow">Institute workspace</p>
      <h1>{{ auth.currentInstitute?.institute_name }}</h1>
      <p>Welcome, {{ auth.user?.display_name }}.</p>
      <p role="status">Academic and administrative modules will appear here after their verified API contracts and permissions are implemented.</p>
      <div class="actions">
        <button class="secondary" @click="auth.currentInstitute = null; router.replace('/institute-select')">Change institute</button>
        <button @click="signOut">Sign out</button>
      </div>
    </section>
  </main>
</template>
