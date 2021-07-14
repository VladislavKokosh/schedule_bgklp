import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getScheduleAsyns } from '../../store/actions/schedule';
import Loader from '../Loader';
import Day from './Day';

import './index.scss'

const Schedule = () => {
  const dispatch = useDispatch();
  const group = useSelector(state => state.groups.group)
  const schedule = useSelector(state => state.schedule.schedule)
  const isLoading = useSelector(state => state.loading.isLoading)
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
