import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import Groups from '../components/Groups'
import Schedule from '../components/Schedule'
import { getGroupSelector } from '../store/selectors/groups'

const SсhedulePage: FC = () => {
  const group = useSelector(getGroupSelector)
  return (
    <>
      <Groups/>
      {group === 'Выберите группу...' || !group
      ? null
      : <Schedule/>}
    </>
  )
}

export default SсhedulePage
