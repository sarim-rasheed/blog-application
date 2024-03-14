import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {useDispatch} from 'react-redux'
import {login} from '../../features/Auth/authSlice'
import authService from '../../appwrite/auth'
import {Input, Button, Container, Logo} from '../index'
import {Link, useNavigate} from 'react-router-dom'

function Register() {

    const {register, handleSubmit} = useForm();
    const [error,setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const registerHandler = async (data) => {
     setError('');
     try {
        const  user = await authService.signUp(data);
        if (user) {
            const userData = await authService.getCurrentUser();
            if(userData)
            {
                dispatch(login(userData))
                navigate('/')
            
            }
        }

     } catch (error) {
        setError(error);
     }
    }

  return (
    <Container>
      <div className='mx-auto w-1/2 h-144 rounded-xl shadow-2xl'>
       <div className=' mx-auto mt-20 w-1/2'> <Logo/></div>
       {error && (<h1 className=' text-red-700 text-center'>error</h1>)}
      <form onSubmit={handleSubmit(registerHandler)}>
      <div className='mx-auto w-1/2 mt-10'>
        <Input className={'w-full h-10 border-b-2 border-sky-600 focus:outline-none'} 
        type={'text'} label={'Full Name'} placeholder={'your name here...'} {...register('user', { required: true})}/>
        <Input className={'w-full h-10 border-b-2 border-sky-600 focus:outline-none'} 
        type={'email'} label={'E-mail'} placeholder={'enter email here...'} {...register('email', { required: true})}/>
        <Input className={'w-full h-10 border-b-2 border-sky-600 focus:outline-none'} 
        type={'password'} label={'Password'} placeholder={'****************'} {...register('password', { required: true})}/>      
       </div>
       <div className=' flex flex-col items-center justify-center h-full mx-auto w-1/2'>
        <span>already have a account! 
            <Link className=' text-sky-600 hover:text-sky-800' to='/login'>   sign in</Link> 
            </span>
        <Button text={'Sign Up'} className='w-32 h-12 duration-200 hover:shadow-2xl mt-5' />
       </div>
      </form>
      </div>
    </Container>
  )
}

export default Register
