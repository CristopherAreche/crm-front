import { jwtVerify } from 'jose';
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {Outlet} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie';
import { persistenceLogin } from '../app/features/authSlice';

const ProtectedRoutes = () => {
  const cookies = new Cookies();
  const myToken = cookies.get('myToken');
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const persitenceAuth = async (token) => {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode("secret")
    );
    return payload
  }

  useEffect(() => {
    if (myToken === undefined) {
      navigate('/authentication')
    } else {
      persitenceAuth(myToken).then(res => dispatch(persistenceLogin(res)))
    }
  }, [dispatch, myToken, navigate]);


  return (
    <div>{Outlet}</div>
  )
}

export default ProtectedRoutes