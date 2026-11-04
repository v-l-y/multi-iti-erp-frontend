<script setup lang="ts">
import WorkspaceLayout from '../layouts/WorkspaceLayout.vue'
import FeaturePlaceholder from '../components/FeaturePlaceholder.vue'
</script>

<template>
  <WorkspaceLayout title="Platform workspace" area="regulatory">
    <div class="page-heading"><p class="eyebrow">Regulatory Admin</p><h1>Platform overview</h1><p>Manage shared academic reference data and principal accounts only.</p></div>
    <div class="status-row"><span class="status-label">Institute-private records</span><strong>Not accessible in this workspace</strong></div>
    <FeaturePlaceholder heading="Regulatory modules" description="CTS Curriculum, DGT Training Calendar and Principal Account Management will be integrated after their approved API contracts are verified." />
  </WorkspaceLayout>
</template>
