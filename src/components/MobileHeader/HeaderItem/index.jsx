import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearGroup } from '../../../store/actions/groups'

import './index.scss'


const HeaderItem = ({ title, link }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  return (
    <span
      className={`header-mobile-item ${pathname === link ? 'header-mobile-item_active' : ''}`}
      onClick={() => {
        history.push(link)
        dispatch(clearGroup())
      }}
    >
      {title}
    </span>
  )
}

export default HeaderItem
