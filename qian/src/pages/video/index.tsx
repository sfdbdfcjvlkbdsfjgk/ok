import React from 'react'

const Video: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ 
        padding: '20px 0',
        borderBottom: '1px solid #f0f0f0',
        marginBottom: 20
      }}>
        <h2 style={{ 
          margin: 0, 
          fontSize: 18, 
          fontWeight: 600,
          color: '#333'
        }}>
          传视频
        </h2>
      </div>
      
      <div style={{ 
        textAlign: 'center',
        color: '#666',
        marginTop: 50
      }}>
        <div style={{ fontSize: 24, marginBottom: 16 }}>🎥</div>
        <p>在这里分享你的精彩视频</p>
      </div>
    </div>
  )
}

export default Video