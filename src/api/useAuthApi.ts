import { useApiRequest } from '@/api/http'
import { LoginPayload, LoginResponse } from '@/types'

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
  register: (payload: any): Promise<any> => {
    return useApiRequest.post({
      url: '/auth/register',
      data: payload,
    })
  },
  sendOTP: (payload: any): Promise<any> => {
    return useApiRequest.post({
      url: '/auth/register',
      data: payload,
    })
  },
  bindOTP: (payload: any): Promise<any> => {
    return useApiRequest.post({
      url: '/auth/register',
      data: payload,
    })
  },
  forgetPasswordEmailOTP: (payload: any): Promise<any> => {
    return useApiRequest.post({
      url: '/auth/register',
      data: payload,
    })
  },
  changePasswordWithOTP: (payload: any): Promise<any> => {
    return useApiRequest.post({
      url: '/auth/register',
      data: payload,
    })
  },
}