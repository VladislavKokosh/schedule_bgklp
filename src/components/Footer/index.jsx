import React from 'react'

import './index.scss'
import { LOGO } from '../../image/index'


const Footer = () => {
  let date = new Date()
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__wrapper'>
            <div className='footer__top'>
              <img src={LOGO} alt='' className='footer__top_logo'/>
              <div className='footer__top_copy'>© {date.getFullYear()} УО БГКЛП. Все права защищены.</div>
              <div  className='footer__top_text'>УО "Барановичский государственный колледж лёгкой промышленности" УНН: 100383945</div>
            </div>
            <div className='footer__bottom'>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
