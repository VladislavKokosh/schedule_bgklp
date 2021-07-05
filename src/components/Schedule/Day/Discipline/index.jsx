import React from 'react'
import { Link } from 'react-router-dom'

const Discipline = ({ discipline }) => {
  return(
    <div className='day__discipline'>
        <div className='day__discipline_time'>
          {discipline.time}
        </div>
        <div className='day__discipline_name'>
          {discipline.name}
        </div>
        <Link to={`/teachers/${discipline.link}`} className='day__discipline_teacher'>
          {discipline.teacher}
        </Link>
        <div className='day__discipline_cabinet'>
          {discipline.cabinet}
        </div>
    </div>
  )
}

export default Discipline
