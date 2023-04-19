import { Outlet, Navigate } from 'react-router-dom';
import { jwtVerify } from 'jose';
import { useEffect } from 'react'
import React from 'react';
import { useDispatch } from 'react-redux';
import { persistenceLogin } from '../app/features/authSlice';
import Cookies from 'universal-cookie';

const ProtectedRoutes = () => {
  const cookies = new Cookies();
  const myToken = cookies.get('myToken');

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
      // Si no hay token, redirige a la página de autenticación
      window.location.href = '/authentication';
    } else {
      persitenceAuth(myToken).then(res => dispatch(persistenceLogin(res)));
    }
  }, [dispatch, myToken]);

  return (
    <>
      
      <Outlet />
    
    </>
  );
};

export default ProtectedRoutes;
