import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTeachersAsync } from '../../store/actions/teachers';

import Teacher from './Teacher/index'
import Loader from '../Loader'
import './index.scss'
import { getTeachersSelector } from '../../store/selectors/teachers';
import { getLoaderSelector } from '../../store/selectors/loader';

const Teachers:FC = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(getTeachersSelector)
  const isLoading = useSelector(getLoaderSelector)
  useEffect(()=> {
    !teachers.length && dispatch(getTeachersAsync())
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return(
    <div className='teachers'>
      {isLoading ?
        <Loader/>:
        teachers?.map(teacher =>
        <Teacher
          img={teacher.img}
          name={teacher.name}
          about={teacher.about}
          key={teacher.id}
        />)
      }
    </div>
  )
}

export default Teachers
