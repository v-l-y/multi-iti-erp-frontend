import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue'), meta: { public: true } },
    { path: '/institute-select', name: 'institute-select', component: () => import('../views/InstituteSelectView.vue') },
    { path: '/regulatory', name: 'regulatory', component: () => import('../views/RegulatoryView.vue'), meta: { role: 'regulatory_admin' } },
    { path: '/', name: 'dashboard', component: () => import('../views/DashboardView.vue'), meta: { institute: true } },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach(async to => {
  const auth = useAuthStore()
  await auth.initialize()
  if (!auth.authenticated) {
    if (to.meta.public) return true
    return { name: 'login', query: { redirect: to.fullPath } }
  }
  if (to.name === 'login') return { name: auth.hasRole('regulatory_admin') ? 'regulatory' : 'dashboard' }
  if (auth.hasRole('regulatory_admin')) {
    // Platform admins have no institute-private workspace.
    if (to.name !== 'regulatory') return { name: 'regulatory' }
    return true
  }
  if (to.meta.role && !auth.hasRole(String(to.meta.role))) return { name: 'dashboard' }
  if (to.meta.institute && !auth.currentInstitute) return { name: 'institute-select' }
  if (to.name === 'institute-select' && auth.currentInstitute) return { name: 'dashboard' }
  return true
})

export default router
