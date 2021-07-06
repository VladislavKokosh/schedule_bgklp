import React from 'react'

import './index.scss'

const Teacher = ({ teacher }) => {
  return(
    <div className='teacher' style={{backgroundImage: `url(${teacher.img ? teacher.img : 'https://i.ibb.co/rxHYwH0/errorimg.jpg'})`}}>
        <h2>{teacher.name}</h2>
        <h4>{teacher.about}</h4>
    </div>
  )
}

export default Teacher