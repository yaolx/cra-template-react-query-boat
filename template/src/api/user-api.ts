import request from '@/config/request'

export interface User {
  name: string
  age: number
  mobile: string
}

/**
 * 获取用户信息
 */
export async function getUser(): Promise<User> {
  const result = await request(
    {
      url: '/api/user',
      method: 'get'
    },
    {
      loading: true
    }
  )
  return result.data
}
