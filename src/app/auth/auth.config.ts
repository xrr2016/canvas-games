import { ENV } from '../core/env.config'

interface AuthConfig {
  CLIENT_ID: string
  CLIENT_DOMAIN: string
  AUDIENCE: string
  REDIRECT: string
  SCOPE: string
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '[kVVONkf3S79WACY9LdjlUI0B7XYBqbf0]',
  CLIENT_DOMAIN: '[qjkm.auth0.com]',
  AUDIENCE: '[http://localhost:8083/api/]',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: `openid profile`
}
