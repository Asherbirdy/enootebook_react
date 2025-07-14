import { useApiRequest } from '@/api/http'
import { LoginPayload, LoginResponse, RegisterPayload, SendOTPPayload, BindOTPPayload, ForgetPasswordEmailOTPPayload, ChangePasswordWithOTPPayload, RegisterResponse } from '@/types'

export const useAuthApi = {
  login: (payload: LoginPayload): Promise<LoginResponse> => {
    return useApiRequest.post({
      url: '/auth/login',
      data: payload,
    })
  },
  refreshToken: () => {
    return useApiRequest.get({
      url: '/auth/refreshToken',
    })
  },
  register: (payload: RegisterPayload): Promise<RegisterResponse> => {
    return useApiRequest.post({
      url: '/auth/userRegister',
      data: payload,
    })
  },
  sendOTP: (payload: SendOTPPayload) => {
    return useApiRequest.post({
      url: '/auth/sendOTP',
      data: payload,
    })
  },
  bindOTP: (payload: BindOTPPayload) => {
    return useApiRequest.post({
      url: '/auth/bindOTPEmail',
      data: payload,
    })
  },
  forgetPasswordEmailOTP: (payload: ForgetPasswordEmailOTPPayload) => {
    return useApiRequest.post({
      url: '/auth/forgetPasswordEmailOTP',
      data: payload,
    })
  },
  changePasswordWithOTP: (payload: ChangePasswordWithOTPPayload) => {
    return useApiRequest.post({
      url: '/auth/changePasswordWithOTP',
      data: payload,
    })
  },
}