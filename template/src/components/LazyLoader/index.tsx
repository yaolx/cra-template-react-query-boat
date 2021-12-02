import React, { Suspense } from 'react'
import Loading from '@/components/status/Loading'
export function LazyLoader(modulePath) {
  const LoadableComponent = React.lazy(() => import(/* @vite-ignore */ `../../${modulePath}`))
  return function LoadableDashboard(props) {
    return (
      <Suspense fallback={<Loading />}>
        <LoadableComponent {...props} />
      </Suspense>
    )
  }
}
