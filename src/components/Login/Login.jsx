import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {login} from '../../features/Auth/authSlice'
import authService from '../../appwrite/auth'
import {Input, Button, Container, Logo} from '../index'
import {Link, useNavigate} from 'react-router-dom'

function Login() {

    const {register, handleSubmit} = useForm();
    const [error,setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = async (data) => {
        setError('');
        try {
          const session = await authService.login(data);
          if (session) {
            const user = await authService.getCurrentUser();
            if (user) {
                dispatch(login(user));
                navigate('/')
            }
          }
        } catch (error) {
            setError(error);
        }

    }
  return (
    <Container>
      <div className='mx-auto w-1/2 h-128 rounded-xl shadow-2xl'>
       <div className=' mx-auto mt-20 w-1/2'> <Logo/></div>
      <form onSubmit={handleSubmit(loginHandler)}>
      <div className='mx-auto w-1/2 mt-10'>
        <Input className={'w-full h-10 border-b-2 border-sky-600 focus:outline-none'} 
        type={'email'} label={'E-mail'} placeholder={'enter email here...'} {...register('email', { required: true})}/>
        <Input className={'w-full h-10 border-b-2 border-sky-600 focus:outline-none'} 
        type={'password'} label={'Password'} placeholder={'****************'} {...register('password', { required: true})}/>      
       </div>
       <div className=' flex flex-col items-center justify-center h-full mx-auto w-1/2'>
        <span>want to create new account! 
            <Link className=' text-sky-600 hover:text-sky-800' to='/sign-up'>   sign up</Link> 
            </span>
        <Button text={'Sign In'} className='w-32 h-12 duration-200 hover:shadow-2xl mt-5' />
       </div>
      </form>
      </div>
    </Container>
  )
}

export default Login
