import { useEffect, useState } from 'react'

// emotion/prop-types
import PropTypes from 'prop-types'
import { Ul, Li } from './Contacts.styled'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from 'redux/contacts/operations'
import { getContacts } from 'redux/contacts/contactsSlice' 
import { getFilter } from 'redux/contacts/filterSlice'

// component
import { ContactItem } from './ContactItem'
import { EditContactItem } from './EditContactItem'

const Contacts = () => {

  const [editContactId,setEditContactId] = useState(null)

  // Reducers,dispatch
  const contactsReducer = useSelector(getContacts)
  const filterReducer = useSelector(getFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  // get filtered contacts
  const getFilteredContacts = () => {
    const normalizedFilter = filterReducer.toLowerCase()
    
    return contactsReducer.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  return (
    <Ul>
      {getFilteredContacts().map(({ id, name, number }) => (

        <Li key={id}>
          {editContactId === id ? 
          
            <>
              <EditContactItem props={{id,name,number}} setEditContactId={setEditContactId} />
            </>

          : 
            <>
              <ContactItem props={{name,number,id}} setEditContactId={setEditContactId} />
            </>
          }
        </Li>
        
      ))}
    </Ul>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }))
}

export default Contacts