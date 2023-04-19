import React from "react";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { login } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Redireccion = () => {
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
  console.log(user);
  console.log(isAuthenticated);
  if (isAuthenticated) {
    register();
  }
  console.log("GLOBAL USER ***********", User);

  return <div>{navigate("/dashboard/perfil")}</div>;
};

export default Redireccion;
