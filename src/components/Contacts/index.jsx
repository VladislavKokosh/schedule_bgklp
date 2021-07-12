import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContactsAsync } from '../../store/actions/contacts';

import Loader from '../Loader';
import Contact from './Contact';

import './index.scss'

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts)
  const isLoading = useSelector(state => state.loading.isLoading)
  useEffect(()=> {
    dispatch(getContactsAsync())
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return(
    <div className='contacts'>
      {isLoading ?
        <Loader/>:
        contacts.map((contact) =>
          <Contact contact={contact} key={contact.id}/>
        )
      }
    </div>
  )
}

export default Contacts
