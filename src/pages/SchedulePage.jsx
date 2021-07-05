import React from 'react'
import { useSelector } from 'react-redux'
import Groups from '../components/Groups'
import Schedule from '../components/Schedule'

const SсhedulePage = () => {
  const group = useSelector(state => state.groups.group)
  return (
    <>
      <Groups/>
      {group === 'Выберите группу...' ? null :
      group === null ? null :
      <Schedule/>}
    </>
  )
}

export default SсhedulePage
