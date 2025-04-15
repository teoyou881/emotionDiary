import React from 'react'
import './Header.css'

const Header = ({title, leftChild, rightChild}) => {
  // const now = new Date().toLocaleString('en-CA', {
  //   year: 'numeric',
  //   month: 'long'
  // });
  return (
      <header className='Header'>
        <div className="header_left">{leftChild}</div>
        <div className="header_center">{title}</div>
        <div className="header_right">{rightChild}</div>
      </header>
  )
}
export default Header
