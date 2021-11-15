import { useQuery } from 'react-query'

import { getUser } from '@/api/user-api'

export const queryKey = 'hooks-user'

interface Options {
  userType?: number
}

export default function useUser(options: Options) {
  const { userType } = options

  const { data, isLoading } = useQuery([queryKey, userType], () => {
    return getUser()
  })

  return {
    user: data,
    isLoading: isLoading
  }
}
