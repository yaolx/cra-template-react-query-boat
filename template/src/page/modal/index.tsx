import React, { useCallback } from 'react'
import { Modal } from 'antd'
interface IProps {
  showModal: () => void
}
export default function LoginModal(props: IProps) {
  const onClick = useCallback(() => {
    props.showModal()
  }, [])
  return (
    <Modal visible width={300} onOk={onClick}>
      show me
    </Modal>
  )
}
