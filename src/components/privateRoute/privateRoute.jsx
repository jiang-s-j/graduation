import React,{useEffect, useState} from 'react'
import { Route, Redirect, useHistory,withRouter} from 'react-router-dom'

const PrivateRoute = withRouter( (props) => {

  const [auth,setAuth] = useState(true)

  // let history = useHistory()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if(token){
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
        {!auth &&
          <Redirect to='/login'></Redirect>
        }
    </> 
  )
})

export default PrivateRoute