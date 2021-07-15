import React, { useEffect, FC, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getGroupsAsync, setGroupsAsyncSuccess } from '../../store/actions/groups';
import { getGroupsSelector } from '../../store/selectors/groups';
import './index.scss'

const Groups:FC = () => {
  const dispatch = useDispatch();
  const groups = useSelector(getGroupsSelector)
  useEffect(()=> {
    dispatch(getGroupsAsync())
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  let date = new Date();

  const selectGroup = (e:ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGroupsAsyncSuccess(e.target.value))
  }

  return(
    <div className='group'>
      <h2>Расписание занятий для студентов БГКЛП</h2>
      <h4>{date.getMonth() > 6 ? 'первый семестр, '+(date.getFullYear()-1)+'-'+date.getFullYear()+' учебный год': 'второй семестр, '+(date.getFullYear()-1)+'-'+date.getFullYear()+' учебный год'}</h4>
      <div className='select'>
        <select onChange={(e) => selectGroup(e)} disabled={!groups.length} placeholder='Выберите группу...'>
          {groups?.map((group) => <option key={group.id} value={group.title}>{group.title}</option>)}
        </select>
      </div>
    </div>
  )
}

export default Groups
