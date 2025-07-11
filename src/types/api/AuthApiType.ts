import { User, Token } from '@/types'

/*
  * Register
*/
export interface RegisterPayload {
  name: string
  password: string
}

export interface RegisterResponse {
  user: User
  token: Token
}

/*
  * Send OTP
*/
export interface SendOTPPayload {
  email: string
}

/*
  * Bind OTP
*/
export interface BindOTPPayload {
  otp: string
}

/*
  * Forget Password Email OTP
*/
export interface ForgetPasswordEmailOTPPayload {
  email: string
}

/*
  * Change Password With OTP
*/
export interface ChangePasswordWithOTPPayload {
  email: string
  OTP: string
  newPassword: string
}

