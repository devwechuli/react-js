import React,{useContext} from 'react';
import {Redirect} from 'react-router-dom'
import AuthContext from "../context/AuthContext";

const AuthHOC = (WrappedComponent) => {

    const auth = useContext(AuthContext);
    console.log("From the authhoc",auth)


    return(props)=>{
        return (
            
            <WrappedComponent {...props}/>
           
        )
    }
}

export default AuthHOC;