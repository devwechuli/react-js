import React,{useContext} from 'react';
import AuthContext from '../authContext'


const Auth = (props) => {
    const auth = useContext(AuthContext)
  return (
   <button onClick={auth.login} className="btn btn-info">Log in</button>
  )
}

export default Auth
