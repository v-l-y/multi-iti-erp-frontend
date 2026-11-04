<script setup lang="ts">
defineProps<{ heading: string; description: string }>()
</script>

<template>
  <section class="feature-placeholder" aria-labelledby="feature-heading">
    <div class="feature-symbol" aria-hidden="true">▤</div>
    <h2 id="feature-heading">{{ heading }}</h2>
    <p>{{ description }}</p>
    <p class="muted" role="status">This module is not connected to a live backend yet.</p>
  </section>
</template>
