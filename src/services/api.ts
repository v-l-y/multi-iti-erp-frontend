import axios, { type AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios'

export interface InstituteContext {
  id: number
  institute_name: string
  workspace_state: 'draft' | 'ready_for_operations' | 'archived'
}

export interface Session {
  csrf_token: string
  expires_at: string
  user: {
    id: number
    email: string
    display_name: string
    platform_roles: string[]
  }
  institutes?: InstituteContext[]
}

export class ApiClient {
  private readonly http: AxiosInstance
  private csrf: string | null = null
  onUnauthorized: (() => void) | null = null

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
      timeout: 30000,
      withCredentials: true,
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
    })
    this.http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (!['get', 'head', 'options'].includes((config.method ?? 'get').toLowerCase())) {
        config.headers['X-ITI-Request'] = '1'
        if (this.csrf) config.headers['X-CSRF-Token'] = this.csrf
      }
      return config
    })
    this.http.interceptors.response.use(response => response, (error: AxiosError) => {
      if (error.response?.status === 401) {
        this.setCsrf(null)
        this.onUnauthorized?.()
      }
      return Promise.reject(error)
    })
  }

  setCsrf(value: string | null) { this.csrf = value }

  async session(): Promise<Session> {
    const { data } = await this.http.get<Session>('/api/me')
    this.setCsrf(data.csrf_token)
    return data
  }

  async login(email: string, password: string): Promise<Session> {
    const { data } = await this.http.post<Session>('/api/auth/login', { email, password })
    this.setCsrf(data.csrf_token)
    return data
  }

  async logout(): Promise<void> {
    try { await this.http.post('/api/auth/logout', {}) }
    finally { this.setCsrf(null) }
  }
}

// Same-origin session cookies; do not persist credentials or CSRF tokens to localStorage.
export const api = new ApiClient(import.meta.env.VITE_API_BASE_URL || '/')
