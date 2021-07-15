import React, { FC } from 'react'

import Discipline from './Discipline'
import './index.scss'

interface IProps {
  day: {
    day: string
    disciplines: IDiscipline[]
  }
}

interface IDiscipline {
  time: string
  name: string
  teacher: string
  link?: string
  cabinet: string
}

const Day:FC<IProps> = ({ day }) => {
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
          <Discipline
            discipline={discipline}
            key={index}
          />
        ))}
    </div>
  )
}

export default Day
