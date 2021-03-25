import React,{useEffect, useState} from 'react'
import { Route, Redirect, useHistory,withRouter} from 'react-router-dom'

const PrivateRoute = withRouter( (props) => {

  const [auth,setAuth] = useState('')

  // let history = useHistory()

  useEffect(() => {
    let auth = localStorage.getItem('token')
    console.log(auth);
    if(auth){
      setAuth(true)
    }else{
      setAuth(false)
    }
  },[])

  return (
    <>
       {auth &&
        <Route path={props.path}>
          {props.children}
        </Route> 
        }
    </> 
  )
})

export default PrivateRoute