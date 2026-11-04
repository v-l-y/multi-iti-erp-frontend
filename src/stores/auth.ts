import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, type InstituteContext, type Session } from '../services/api'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<Session['user'] | null>(null)
  const institutes = ref<InstituteContext[]>([])
  const currentInstitute = ref<InstituteContext | null>(null)
  const initialized = ref(false)
  const authenticated = computed(() => user.value !== null)

  function clear() {
    user.value = null
    institutes.value = []
    currentInstitute.value = null
    api.setCsrf(null)
  }
  function accept(session: Session) {
    user.value = session.user
    institutes.value = session.institutes ?? []
    api.setCsrf(session.csrf_token)
    if (!institutes.value.some(i => i.id === currentInstitute.value?.id)) currentInstitute.value = null
  }
  function hasRole(role: string) { return user.value?.platform_roles.includes(role) ?? false }
  function selectInstitute(id: number) {
    // IDs must come from server-asserted session membership.
    const match = institutes.value.find(i => i.id === id)
    if (!match) throw new Error('Institute is not available in the current session')
    currentInstitute.value = match
  }
  async function initialize() {
    if (initialized.value) return
    clear()
    try { accept(await api.session()) }
    catch { clear() }
    finally { initialized.value = true }
  }
  async function login(email: string, password: string) {
    clear()
    accept(await api.login(email, password))
    initialized.value = true
  }
  async function logout() {
    try { await api.logout() }
    finally { clear(); initialized.value = true }
  }
  api.onUnauthorized = clear
  return { user, institutes, currentInstitute, initialized, authenticated, hasRole, selectInstitute, initialize, login, logout }
})
