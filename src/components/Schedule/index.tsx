import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getScheduleAsyns } from '../../store/actions/schedule';
import { getGroupSelector } from '../../store/selectors/groups';
import { getLoaderSelector } from '../../store/selectors/loader';
import { getScheduleSelector } from '../../store/selectors/schedule';
import Loader from '../Loader';
import Day from './Day';

import './index.scss'

const Schedule:FC = () => {
  const dispatch = useDispatch();
  const group = useSelector(getGroupSelector)
  const schedule = useSelector(getScheduleSelector)
  const isLoading = useSelector(getLoaderSelector)
  useEffect(()=> {
    dispatch(getScheduleAsyns(group))
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [group])
  return(
    <div className='schedule'>
      {isLoading ?
        <Loader/>:
        schedule?.map((day, index) =>
          <Day key={index} day={day}/>
        )
      }
    </div>
  )
}

export default Schedule
