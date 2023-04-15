import React from 'react'
import { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {redirect} from 'react-router-dom'

const ProtectedRoutes = () => {
    const user = useSelector((state) => state.auth.User)
    const status = useSelector((state) => state.auth.status)
    if(!user && status !== "loading"){
      return redirect('/authentication')
    }
  return (
    <div>{Outlet}</div>
  )
}

export default ProtectedRoutes