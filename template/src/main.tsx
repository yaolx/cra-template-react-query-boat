import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './config/react-query'
import routes from '@/routes'
import './index.less'

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
