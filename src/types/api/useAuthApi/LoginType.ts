export interface LoginPayload {
  name: string,
  password: string
}

export interface LoginResponse {
  user: LoginUser
  token: LoginToken
}

interface LoginUser {
  name: string
  userId: string
  role: string
  emailVerified: boolean
}

interface LoginToken {
  accessTokenJWT: string
  refreshTokenJWT: string
}
