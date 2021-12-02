import React, { useState } from 'react'
import { Button } from 'antd'
import useUser from '@/hooks/useUser'
import { LazyLoader } from '@/components/LazyLoader'
import styles from './style/index.module.less'
import logo from './logo.svg'
const LoginModal = LazyLoader('page/modal')
function Home(): JSX.Element {
  const { user } = useUser({ userType: 1 })
  const [visible, setVisible] = useState(false)
  console.log('user', user)
  const config = import.meta.env
  const showModal = () => {
    setVisible(!visible)
  }
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>{config.VITE_TITLE}</p>
        <div>
          <Button type="primary">登录</Button>
          <Button type="primary">注销</Button>
          <div>{user?.mobile ? '3已登录' : '2未登录'}</div>
        </div>
        <div>
          <Button type="primary" onClick={showModal}>
            打开modal
          </Button>
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
      {visible ? <LoginModal showModal={showModal} /> : null}
    </div>
  )
}

export default Home
