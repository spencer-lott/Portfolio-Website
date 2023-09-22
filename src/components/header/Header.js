import React from 'react'

export default function Header({onToggleMenu}) {

  return (
    <div className='ui top inverted attached menu fixed' style={{height: "75px", top: 0, left: 0, width: "100%", zIndex: 1}}>
        <span className='item link grey fixed-item' onClick={onToggleMenu}>Menu</span>
    </div>
  )
}
