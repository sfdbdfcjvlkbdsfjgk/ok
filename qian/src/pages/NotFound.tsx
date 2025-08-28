import React from 'react'
import { Button, Result } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Result
      status='warning'
      title='页面不存在'
      description='抱歉，您访问的页面不存在'
      extra={<Button color='primary' onClick={() => navigate('/home')}>返回首页</Button>}
    />
  )
}

export default NotFound


