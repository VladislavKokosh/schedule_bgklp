import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import HeaderItem from './HeaderItem'
import { items } from './items'
import { LOGO } from '../../image/index.js'

import './index.scss'

const Header: FC = () => {
  const history = useHistory()

  return(
    <div className='header'>
    <div className='header__container'>
      <div className='header__wrapper'>
        <img
          src={LOGO}
          alt='logo'
          className='header__logo'
          onClick={() => history.push('/')}
        />
        {
          items.map(elem => (
            <HeaderItem
              link={elem.link}
              title={elem.title}
              key={elem.title}
            />
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default Header
