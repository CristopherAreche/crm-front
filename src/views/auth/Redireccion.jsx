import React from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { login } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { RiLoader4Fill } from "react-icons/ri";


const Redireccion = () => {
  const cookies = new Cookies();
  const myToken = cookies.get('myToken');
  const { user, isAuthenticated } = useAuth0();
  const User = useSelector((state) => state.auth.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = () => {
    const formLogin = {
      email: user.email,
      name: user.name,
      nickname: user.nickname,
      password: "12345",
    };
    dispatch(login(formLogin));
  };
    if(isAuthenticated){
      register()
      if(myToken){
        navigate("/dashboard/perfil")
      }
    }
  
  return <div className="h-screen bg-base flex justify-center items-center"> <RiLoader4Fill className="animate-spin text-8xl text-secondary mt-8" /></div>;
};

export default Redireccion;
