import React, { FC } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import './index.scss'

interface IProps {
  title: string
  link: string
}

const HeaderItem:FC<IProps> = ({ title, link }) => {
  const history = useHistory()
  const { pathname } = useLocation()

  return (
    <span
      className={`header-mobile-item ${pathname === link ? 'header-mobile-item_active' : ''}`}
      onClick={() => {
        history.push(link)
      }}
    >
      {title}
    </span>
  )
}

export default HeaderItem
