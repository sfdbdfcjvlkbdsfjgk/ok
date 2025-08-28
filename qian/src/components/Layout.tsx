import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'

const Layout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location

  const tabs = [
    { key: '/home', title: '首页', path: '/home' },
    { key: '/category', title: '分类', path: '/category' },
    { key: '/cart', title: '购物车', path: '/cart' },
    { key: '/profile', title: '我的', path: '/profile' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Outlet />
      </div>
      <TabBar activeKey={pathname} safeArea onChange={(key) => navigate(String(key))}>
        {tabs.map(tab => (
          <TabBar.Item
            key={tab.key}
            title={tab.title}
          />
        ))}
      </TabBar>
    </div>
  )
}

export default Layout


