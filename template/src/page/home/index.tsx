import React from 'react'
import { observer } from 'mobx-react'
import { Button } from 'antd'
import useUser from '@/hooks/useUser'
import homeStore from './model'
import styles from './style/index.module.less'
import logo from './logo.svg'
function Home(): JSX.Element {
  const { user } = useUser({ userType: 1 })
  console.log('user', user)
  const config = import.meta.env
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>{config.VITE_TITLE}</p>
        <p>
          <Button type="primary" onClick={homeStore.add}>
            count is: {homeStore.count}
          </Button>
        </p>
        <div>
          <Button type="primary">登录</Button>
          <Button type="primary">注销</Button>
          <div>{user?.mobile ? '3已登录' : '2未登录'}</div>
        </div>
        <p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a className={styles['App-link']} href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default observer(Home)
