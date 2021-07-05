import React from 'react'

import Discipline from './Discipline'
import './index.scss'

const Day = ({ day }) => {
  return(
    <div className='day'>
      <div className='day__name'>{day.day}</div>
      <div className='day__title'>
        <span>Время:</span>
        <span>Название предмета:</span>
        <span>Преподаватель:</span>
        <span>Кабинет:</span>
      </div>
        {day.disciplines.map((discipline, index) =>(
          <Discipline discipline={discipline} key={index}/>
        ))}
    </div>
  )
}

export default Day
