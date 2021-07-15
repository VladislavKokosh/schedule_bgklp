import React from 'react'

interface IProps {
  name: string
  position: string
  phone: string
}

const Contact: React.FC<IProps> = ({ name, position, phone }) => {
  return(
    <div className='contacts__item'>
      <h1 className='contacts__item_title'>{name}</h1>
      <div className='contacts__item_about'>
        <span className='contacts__item_about-position'>{position} </span>
        <a
          className='contacts__item_about-phone'
          href={`tel:${phone}`}
        >
          {phone}
        </a>
      </div>
    </div>
  )
}

export default Contact
