import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, type InstituteContext, type Session } from '../services/api'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<Session['user'] | null>(null)
  const institutes = ref<InstituteContext[]>([])
  const currentInstitute = ref<InstituteContext | null>(null)
  const initialized = ref(false)
  const authenticated = computed(() => user.value !== null)
  let pendingInitialize: Promise<void> | null = null

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
  function clearInstitute() { currentInstitute.value = null }
  function selectInstitute(id: number) {
    const match = institutes.value.find(i => i.id === id)
    if (!match) throw new Error('Institute is not available in the current session')
    currentInstitute.value = match
  }
  function initialize(): Promise<void> {
    if (initialized.value) return Promise.resolve()
    if (pendingInitialize) return pendingInitialize
    pendingInitialize = (async () => {
      clear()
      try { accept(await api.session()) }
      catch { clear() }
      finally { initialized.value = true }
    })().finally(() => { pendingInitialize = null })
    return pendingInitialize
  }
  async function login(email: string, password: string) {
    await initialize()
    clear()
    accept(await api.login(email, password))
    initialized.value = true
  }
  async function logout() {
    try { await api.logout() }
    finally { clear(); initialized.value = true }
  }
  api.onUnauthorized = clear
  return { user, institutes, currentInstitute, initialized, authenticated, hasRole, clearInstitute, selectInstitute, initialize, login, logout }
})
