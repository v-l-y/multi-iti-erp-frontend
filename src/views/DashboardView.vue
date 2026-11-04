<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import WorkspaceLayout from '../layouts/WorkspaceLayout.vue'
import FeaturePlaceholder from '../components/FeaturePlaceholder.vue'

const auth = useAuthStore()
const instituteName = computed(() => auth.currentInstitute?.institute_name ?? 'Institute')
</script>

<template>
  <WorkspaceLayout :title="instituteName" area="institute">
    <div class="page-heading"><p class="eyebrow">Institute overview</p><h1>{{ instituteName }}</h1><p>Welcome, {{ auth.user?.display_name }}. Your institute workspace is selected.</p></div>
    <div class="status-row"><span class="status-label">Workspace status</span><strong>{{ auth.currentInstitute?.workspace_state?.replaceAll('_', ' ') }}</strong></div>
    <FeaturePlaceholder heading="Academic workspace" description="Trade Units, ITSU, batches, admissions and academic execution will be added here using the approved frontend and API contracts." />
  </WorkspaceLayout>
</template>
