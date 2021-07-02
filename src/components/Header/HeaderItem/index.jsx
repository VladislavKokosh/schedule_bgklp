import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import './index.scss'

const HeaderItem = ({ title, link }) => {
  const history = useHistory()
  const { pathname } = useLocation()

  return (
    <span
      className={`header-item ${pathname === link ? 'header-item_active' : ''}`}
      onClick={() => history.push(link)}
    >
      <span>{title}</span>
    </span>
  )
}

export default HeaderItem
