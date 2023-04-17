import React from 'react'
import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { login } from "../../services/authServices";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Redireccion = () => {
    const { user, isAuthenticated } = useAuth0();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const register = () => {
        const formLogin = {
          email: user.email,
          name: user.name,
          nickname: user.nickname,
        };
        dispatch(login(formLogin));
      };
    console.log(user);
    console.log(isAuthenticated);
      if (isAuthenticated) {
        register();
        navigate("/dashboard");
      }

  return (
    <div>Redireccionando...</div>
  )
}

export default Redireccion