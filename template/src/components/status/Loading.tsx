import React from 'react'
import { Spin } from 'antd'
import style from './style.module.less'

export default function Loading() {
  return (
    <div className={style.loading}>
      <Spin />
      <span className={style.text}>loading...</span>
    </div>
  )
}
