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
}