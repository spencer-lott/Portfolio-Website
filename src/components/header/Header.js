import React from 'react'

export default function Header({onToggleMenu}) {

  return (
    <div className='ui top inverted attached menu' style={{height: "75px"}}>
        <span className='item link grey' onClick={onToggleMenu}>Menu</span>
    </div>
  )
}
