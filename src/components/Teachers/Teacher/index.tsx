import React from 'react'

import './index.scss'

interface IProps {
  img: string
  name: string
  about: string
}

const Teacher: React.FC<IProps>= ({ img, name, about }) => {
  return(
    <div className='teacher' style={{backgroundImage: `url(${img ? img : 'https://i.ibb.co/rxHYwH0/errorimg.jpg'})`}}>
        <h2>{name}</h2>
        <h4>{about}</h4>
    </div>
  )
}

export default Teacher