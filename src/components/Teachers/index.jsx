import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTeachersAsync } from '../../store/actions/teachers';

import Teacher from './Teacher/index.tsx'
import Loader from '../Loader'
import './index.scss'

const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(state => state.teachers.teachers)
  const isLoading = useSelector(state => state.loading.isLoading)
  useEffect(()=> {
    !teachers.length && dispatch(getTeachersAsync())
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return(
    <div className='teachers'>
      {isLoading ?
        <Loader/>:
        teachers.map(teacher =>
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
