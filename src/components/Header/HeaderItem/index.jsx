import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearGroup } from '../../../store/actions/groups'

import './index.scss'

const HeaderItem = ({ title, link }) => {
  const history = useHistory()
  const { pathname } = useLocation()
  const dispatch = useDispatch();

  return (
    <span
      className={`header-item ${pathname === link ? 'header-item_active' : ''}`}
      onClick={() => {
        history.push(link)
        dispatch(clearGroup())
      }}
    >
      <span>{title}</span>
    </span>
  )
}

export default HeaderItem
