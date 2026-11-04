<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
const auth = useAuthStore()
const router = useRouter()
function choose(id: number) {
  auth.selectInstitute(id)
  void router.replace({ name: 'dashboard' })
}
</script>

<template>
  <main class="center">
    <section class="panel">
      <h1>Select institute</h1>
      <p>Select one of the institute workspaces assigned to your account.</p>
      <p v-if="!auth.institutes.length" role="status">No institute workspace is assigned to this account yet.</p>
      <ul v-else class="choices">
        <li v-for="institute in auth.institutes" :key="institute.id">
          <button type="button" @click="choose(institute.id)">
            {{ institute.institute_name }} <small>({{ institute.workspace_state }})</small>
          </button>
        </li>
      </ul>
      <button type="button" class="secondary" @click="auth.logout().then(() => router.replace('/login'))">Sign out</button>
    </section>
  </main>
</template>
