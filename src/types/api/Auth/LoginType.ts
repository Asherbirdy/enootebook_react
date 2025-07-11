import { User, Token } from '@/types'

export interface LoginPayload {
  name: string,
  password: string
}

export interface LoginResponse {
  user: User
  token: Token
}