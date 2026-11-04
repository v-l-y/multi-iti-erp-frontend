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
      <p class="eyebrow">Regulatory Admin</p>
      <h1>Platform workspace</h1>
      <p>Welcome, {{ auth.user?.display_name }}.</p>
      <p role="status">CTS Curriculum, DGT Training Calendar and Principal Account Management will be enabled when their backend contracts are integrated.</p>
      <p>This workspace does not grant access to institute-private records.</p>
      <button @click="signOut">Sign out</button>
    </section>
  </main>
</template>
