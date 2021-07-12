import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getGroupsAsync, setGroupsAsync } from '../../store/actions/groups';
import './index.scss'

const Groups = () => {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.groups.groups)
  useEffect(()=> {
    dispatch(getGroupsAsync())
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  let date = new Date();

  const selectGroup = (e) => {
    dispatch(setGroupsAsync(e.target.value))
  }

  return(
    <div className='group'>
      <h2>Расписание занятий для студентов БГКЛП</h2>
      <h4>{date.getMonth() > 6 ? 'первый семестр, '+(date.getFullYear()-1)+'-'+date.getFullYear()+' учебный год': 'второй семестр, '+(date.getFullYear()-1)+'-'+date.getFullYear()+' учебный год'}</h4>
      <div className='select'>
        <select onChange={(e) => selectGroup(e)} disabled={groups ? false  : true}>
          <option autoFocus>Выберите группу...</option>
          {groups?.map((group) => <option key={group.id} value={group.title}>{group.title}</option>)}
        </select>
      </div>
    </div>
  )
}

export default Groups
