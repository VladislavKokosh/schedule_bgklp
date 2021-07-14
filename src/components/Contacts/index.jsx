import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContactsAsync } from '../../store/actions/contacts';
import { getContactsSelector } from '../../store/selectors/contacts';

import Loader from '../Loader';
import Contact from './Contact/index.tsx';

import './index.scss'

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);
  // const isLoading = useSelector(state => state.loading.isLoading)
  useEffect(()=> {
    dispatch(getContactsAsync())
     // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return(
    <div className='contacts'>
      {
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
