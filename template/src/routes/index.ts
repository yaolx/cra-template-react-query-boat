import { LazyLoader } from '@/components/LazyLoader'
import { RouteConfig } from 'react-router-config'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: LazyLoader('page/home')
  },
  { path: '*', component: LazyLoader('components/status/Error') }
]

export default routesConfig
