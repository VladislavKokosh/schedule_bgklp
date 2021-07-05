import React from 'react'

import './index.scss'

const Teacher = ({ teacher }) => {
  return(
    <div className='teacher'>
      <img
        className='teacher__img'
        src={teacher.img ? teacher.img : 'https://i.ibb.co/rxHYwH0/errorimg.jpg'}
        alt=''
      />
      {teacher.name}
    </div>
  )
}

export default Teacher