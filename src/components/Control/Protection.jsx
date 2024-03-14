import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { Container } from '../index';

function Protection({childern, authentication = true}) {

const navigate = useNavigate();
const authStatus = useSelector((state) => state.auth.status); 
const [loader, setLoader] = useState(true);

useEffect(() => {
    if(authentication && authStatus !== authentication)
    {
   
        navigate('/login')
    }else if(!authentication && authStatus !== authentication)
    {
        navigate('/')
    }
    setLoader(false);
},[authentication,authStatus])


  return loader && (<h1 className='text-center text-3xl'>{loading}</h1>)


  return <Container>{childern}</Container>
}

export default Protection
