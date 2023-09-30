// react hook form
import { useForm } from 'react-hook-form'

// redux
import { useDispatch } from "react-redux"
import { registerUser } from "redux/auth/operations"

// emotion
import { Button, Form, Input, P } from './RegisterForm.styled'

export const RegisterForm = () => {
  
  // redux
  const dispatch = useDispatch()

  // react hook form
  const { register, handleSubmit, formState: { errors },reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  // using dispatch in this func.
  const onSubmit = ({ name, password, email }) => {

    dispatch(registerUser({
      name: name,
      email: email,
      password: password
    }))
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      
      <b>Sign Up</b>

      <Input
        autoComplete="off"
        {...register("name", {required: `Required field`, minLength: {value: 5, message: 'Min 5 letters'}})}
        style={{ borderColor: errors.email ? 'red' : 'initial' }}
        placeholder="name"
      />
      {errors.name && <P>{errors.name.message}</P>}

      <Input
        autoComplete="off"
        {...register("email", {required: `Required field`})}
        style={{ borderColor: errors.email ? 'red' : 'initial' }}
        placeholder="email"
      />
      {errors.email && <P>{errors.email.message}</P>}

      <Input
        autoComplete="off"
        {...register("password", {required: `Required field`})}
        style={{ borderColor: errors.password ? 'red' : 'initial' }}
        placeholder="password"
        type='password'
      />
      {errors.password && <P>{errors.password.message}</P>}

      <Button type="submit" value="Sign Up" />
      
    </Form>
  )
}