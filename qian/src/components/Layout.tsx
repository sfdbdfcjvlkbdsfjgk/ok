import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { 
  AppOutline, 
  UnorderedListOutline,
  HeartOutline,
  UserOutline,
  AddOutline,
  EditSOutline,
  VideoOutline,
  PictureOutline
} from 'antd-mobile-icons'

const Layout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { pathname } = location
  const [showFloatingOptions, setShowFloatingOptions] = useState(false)

  const tabs = [
    { 
      key: '/home', 
      title: '首页', 
      icon: <AppOutline />,
      activeIcon: <AppOutline style={{ color: '#1677ff' }} />
    },
    { 
      key: '/category', 
      title: '分类', 
      icon: <UnorderedListOutline />,
      activeIcon: <UnorderedListOutline style={{ color: '#1677ff' }} />
    },
    { 
      key: '/add', 
      title: '', 
      icon: (
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#4285f4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(66, 133, 244, 0.3)',
          transform: 'translateY(-12px)'
        }}>
          <AddOutline fontSize={20} style={{ color: 'white', fontWeight: 'bold' }} />
        </div>
      ),
      activeIcon: (
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#4285f4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(66, 133, 244, 0.4)',
          transform: 'translateY(-12px)'
        }}>
          <AddOutline fontSize={20} style={{ color: 'white', fontWeight: 'bold' }} />
        </div>
      )
    },
    { 
      key: '/collect', 
      title: '收藏', 
      icon: <HeartOutline />,
      activeIcon: <HeartOutline style={{ color: '#1677ff' }} />
    },
    { 
      key: '/profile', 
      title: '我的', 
      icon: <UserOutline />,
      activeIcon: <UserOutline style={{ color: '#1677ff' }} />
    },
  ]

  const handleTabChange = (key: string) => {
    if (key === '/add') {
      // 切换浮动选项显示状态
      setShowFloatingOptions(!showFloatingOptions)
    } else {
      navigate(key)
      // 如果导航到其他页面，隐藏浮动选项
      setShowFloatingOptions(false)
    }
  }

  const floatingOptions = [
    {
      icon: <EditSOutline style={{ fontSize: 20, color: 'white' }} />,
      background: '#52C41A',
      action: () => {
        setShowFloatingOptions(false)
        navigate('/recipe')
      }
    },
    {
      icon: <VideoOutline style={{ fontSize: 20, color: 'white' }} />,
      background: '#FF7A00',
      action: () => {
        setShowFloatingOptions(false)
        navigate('/video')
      }
    },
    {
      icon: <PictureOutline style={{ fontSize: 20, color: 'white' }} />,
      background: '#1890FF',
      action: () => {
        setShowFloatingOptions(false)
        navigate('/work')
      }
    }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Outlet />
      </div>

      {/* 底部导航栏 */}
      <TabBar 
        activeKey={pathname} 
        safeArea 
        onChange={handleTabChange}
        style={{
          backgroundColor: '#fff',
          borderTop: '1px solid #f0f0f0'
        }}
      >
        {tabs.map(tab => (
          <TabBar.Item
            key={tab.key}
            icon={(active) => active ? tab.activeIcon : tab.icon}
            title={tab.title}
          />
        ))}
      </TabBar>

      {/* 浮动选项圆圈 */}
      {showFloatingOptions && (
        <div style={{
          position: 'fixed',
          bottom: '120px', // 更靠近tabbar
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px', // 增加间距
          zIndex: 10000,
          padding: '10px'
        }}>
          {floatingOptions.map((option, index) => (
            <div
              key={index}
              onClick={option.action}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: option.background,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.9)'
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {option.icon}
            </div>
          ))}
        </div>
      )}

      {/* 背景遮罩 */}
      {showFloatingOptions && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 999
          }}
          onClick={() => setShowFloatingOptions(false)}
        />
      )}
    </div>
  )
}

export default Layout


