// redux
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";

// emotion / react-icons
import { Button, Name, Number } from "./Contacts.styled";
import { AiFillEdit,AiOutlineDelete } from "react-icons/ai";

export const ContactItem = ({props, setEditContactId}) => {

  const {name,number,id} = props

  const dispatch = useDispatch()

  return (
    <>
      <Name>{name} :</Name>
      <Number>{number}</Number>

      <Button
        type="button"
        style={{backgroundColor: '#89c908'}}
        onClick={() =>  { setEditContactId(id)}}>
          <AiFillEdit style={{width: 18, height: 18}}/>
      </Button>
      
      <Button
        type="button"
        style={{backgroundColor: '#c71111'}}
        onClick={() => dispatch(deleteContact(id))}>
        <AiOutlineDelete style={{ width: 18, height: 18 }} />
      </Button>
    </>
  )
}