import React from 'react'
import { Navigate } from 'react-router-dom';

// protect routes from unauthorized users

const ProtectRoute = ({children, user, redirect="/login"}) => {
    if(!user) return <Navigate to={redirect}/>
    return children ? children : <outlet />;
}

export default ProtectRoute