export interface User {
  name: string
  userId: string
  role: string
  emailVerified: boolean
}

export interface Token {
  accessTokenJWT: string
  refreshTokenJWT: string
}