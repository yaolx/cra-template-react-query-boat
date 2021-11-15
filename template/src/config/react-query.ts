import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /**
       * 关闭retry
       */
      retry: false,
      //  窗口获得焦点时重新获取数据
      refetchOnWindowFocus: false
    }
  }
})
