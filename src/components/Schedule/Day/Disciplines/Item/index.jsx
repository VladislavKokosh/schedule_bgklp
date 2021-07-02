import React from 'react'

const Item = ({ discipline }) => {
  return(
    <div>
      {discipline.time ? <div className='day__discipline_time'>
        {discipline.time}
      </div>:null}
      {discipline.name ? <div className='day__discipline_name'>
        {discipline.name}
      </div>:null}
      {discipline.teacher ? <a href='/'className='day__discipline_teacher'>
        {discipline.teacher}
      </a>:null}
      {discipline.cabinet ? <div className='day__discipline_cabinet'>
        {discipline.cabinet}
      </div>:null}
    </div>
  )
}

export default Item
