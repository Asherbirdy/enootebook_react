export interface ChangePasswordWithOTPPayload {
  email: string
  OTP: string
  newPassword: string
}