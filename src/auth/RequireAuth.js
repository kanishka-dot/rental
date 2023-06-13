import { Navigate } from 'react-router-dom'
import auth from './LogingAuth.js'


export const RequireAuth = ({ children }) => {
    if (true) {
        return children
    } else {
        return <Navigate to='/app/signin' />
    }
}