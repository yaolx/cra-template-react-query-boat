import React from 'react'
import loadable from '@loadable/component'

export function LazyLoader(modulePath) {
  /* @vite-ignore */
  const LoadableComponent = loadable(() => import(`../../${modulePath}`))
  return function LoadableDashboard(props) {
    return <LoadableComponent {...props} />
  }
}
