import React from 'react'

const Tag = ({ color, text }) => {
  return (
    <div
      style={{
        display: 'inline-block',
        color: 'white',
        background: color,
        borderRadius: '0.4rem',
        padding: '0 0.6rem'
      }}
    >
      {text}
    </div>
  )
}

export default Tag
