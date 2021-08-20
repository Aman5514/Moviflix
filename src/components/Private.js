import React from 'react'
import {Route,Redirect} from 'react-router-dom';

 const Private = ({Component:Component,...rest}) => {
  return (
    <Route
    {...rest}
    render ={(props)=>
    (
      localStorage.getItem("name") ? (<Component {...props}/>) : <Redirect to="/login"/>
    )}
    />
  )
}
export default Private;