import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContactsAsync } from '../../store/actions/contacts';
import { getContactsSelector } from '../../store/selectors/contacts';
import { getLoaderSelector } from '../../store/selectors/loader';

import Loader from '../Loader';
import Contact from './Contact';

import './index.scss'

const Contacts:FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);
  const isLoading = useSelector(getLoaderSelector)
  useEffect(()=> {
    dispatch(getContactsAsync())
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return(
    <div className='contacts'>
      { isLoading ?
        <Loader/> :
        contacts.map((contact) =>
        <Contact
          name={contact.name}
          position={contact.position}
          phone={contact.phone}
          key={contact.id}
        />
      )
      }
    </div>
  )
}

export default Contacts
