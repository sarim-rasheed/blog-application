import React from 'react'
import authService from '../../appwrite/auth'
import {logout} from '../../features/Auth/authSlice'
import {useDispatch} from 'react-redux'

function LogoutBtn() {

    const dispatch = useDispatch();

const logoutHandler = () => {

authService.logout().then(() => {
    dispatch(logout())
})

}

  return (
<button className=' bg-sky-600 text-white rounded-lg w-16 h-12' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
