import React, { useState } from 'react'
import { Link, withPrefix } from 'gatsby'

export const Navbar = React.memo(() => {
  const [isBurgerActive, setBurgerActive] = useState(false)

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://www.rickyzhang.me' title='Ricky ZHang'>
            <img
              src={withPrefix('/img/favicon/favicon.png')}
              width='28'
              height='28'
            />
          </a>

          <a
            role='button'
            className={`navbar-burger burger${
              isBurgerActive ? ' is-active' : ''
            }`}
            aria-label='menu'
            aria-expanded='false'
            onClick={() => setBurgerActive(prevIsActive => !prevIsActive)}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div className={`navbar-menu${isBurgerActive ? ' is-active' : ''}`}>
          <div className='navbar-start has-text-centered'>
            <Link className='navbar-item' to='/'>
              Home
            </Link>
            <Link className='navbar-item' to='/archives'>
              Projects
            </Link>
            <Link className='navbar-item' to='/about'>
              About
            </Link>
          </div>
          <div className='navbar-end'>
            <div className='is-flex is-justified-center'>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})

export default Navbar
