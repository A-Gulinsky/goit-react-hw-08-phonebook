//  react hook form/toast
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

// redux
import { useDispatch } from "react-redux"
import { editContact } from 'redux/contacts/operations'

// emotion
import { InputText,InputNumber, EditForm, ButtonSave } from './EditContactItem.styled'

export const EditContactItem = ({props,setEditContactId}) => {

  const {id,name,number} = props

  // redux
  const dispatch = useDispatch()

  // react hook form
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: name,
      number: number
    }
  })

  // using dispatch in this func.
  const onSubmit = ({name,number}) => {

    const isNameValid = !!name && name.length >= 2 && number.length <= 15
    const isNumberValid = !!number && number.length >= 6 && number.length <= 10;

    if (!isNameValid || !isNumberValid) {
      if (!isNameValid) {
        return toast.error(`Name must not be less than 2 or more than 15 characters`)
      }
      if (!isNumberValid) {
        return toast.error(`Number must not be less than 6 or more than 10 characters`)
      }
      return
    }

    dispatch(editContact({id,name,number}))
    setEditContactId(null)
  }

  return (
    <EditForm onSubmit={handleSubmit(onSubmit)}>

      <InputText
        autoComplete="off"
        {...register("name")}
        style={{ borderColor: errors.name ? 'red' : 'initial' }}
        type='text'
      />

      <InputNumber
        autoComplete="off"
        {...register("number")}
        type='number'
      />

      <ButtonSave type="submit" value="save" />
      
    </EditForm>
  )
}