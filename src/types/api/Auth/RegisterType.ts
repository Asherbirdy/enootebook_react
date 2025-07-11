import { User, Token } from '@/types'

export interface RegisterPayload {
  name: string
  password: string
}

export interface RegisterResponse {
  user: User
  token: Token
}
