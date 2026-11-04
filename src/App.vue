<script setup lang="ts">
const productName = "Bihar Private Multi-Institute ITI ERP";
</script>

<template>
  <main class="shell">
    <section class="intro" aria-labelledby="page-title">
      <p class="eyebrow">Institute-purpose · CTS</p>
      <h1 id="page-title">{{ productName }}</h1>
      <p>
        Frontend foundation is ready for implementation. This application is for
        institute-owned administrative and academic records; it does not issue
        government approvals or credentials.
      </p>
      <p class="note" role="status">
        No backend connection or authentication is configured in this initial scaffold.
      </p>
    </section>
  </main>
</template>

<style scoped>
:global(*) { box-sizing: border-box; }
:global(body) { margin: 0; font-family: system-ui, -apple-system, sans-serif; color: #17243b; background: #f4f7fb; }
.shell { min-height: 100vh; display: grid; place-items: center; padding: 2rem; }
.intro { width: min(100%, 48rem); padding: clamp(1.5rem, 4vw, 3rem); background: #fff; border: 1px solid #e0e7f0; border-radius: 1rem; box-shadow: 0 12px 36px #17243b0d; }
.eyebrow { font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: #345d96; }
h1 { font-size: clamp(2rem, 5vw, 3rem); line-height: 1.15; }
p { line-height: 1.7; }
.note { padding: 1rem; border-left: 4px solid #345d96; background: #edf3fc; }
</style>
