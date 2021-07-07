import React from 'react'

const Contact = ({ contact }) => {
  return(
    <div className='contacts__item'>
      <h1 className='contacts__item_title'>{contact.name}</h1>
      <div className='contacts__item_about'>
        <span className='contacts__item_about-position'>{contact.position} </span>
        <a
          className='contacts__item_about-phone'
          href={`tel${contact.phone}`}
        >
          {contact.phone}
        </a>
      </div>
    </div>
  )
}

export default Contact
