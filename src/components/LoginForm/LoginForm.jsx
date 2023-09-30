// react hook form
import { useForm } from 'react-hook-form'

// redux
import { useDispatch } from "react-redux"
import { login } from "redux/auth/operations"

// emotion
import { Button, Form, Input, P } from './LoginForm.styled'


export const LoginForm = () => {
  
  // redux
  const dispatch = useDispatch()

  // react hook form
  const { register, handleSubmit, formState: { errors },reset } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // using dispatch in this func.
  const onSubmit = ({ email, password }) => {
    
    dispatch(login({
      email: email,
      password: password
    }))
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      
      <b>Login</b>

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

      <Button type="submit" value="Sign In" />
      
    </Form>
  )
}