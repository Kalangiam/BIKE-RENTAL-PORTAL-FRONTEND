// import Home from '../components/Home'
import Login from '../components/Login'
import Status from '../components/Status'
import BikeList from '../components/BikeList'
import { Navigate } from 'react-router-dom'
import RRCreate from '../components/RRCreate'
import Dashboard from '../components/admin/Dashboard'
import Service from '../components/admin/Service'
import Create from '../components/Create'
import AdminRoutes from './AdminRoutes'
import ForgotPassword from '../components/GeneratePassword'
import ResetPassword from '../components/ResetPassword'


const AppRouter = [
    {
        path: "/bike",
        element: <BikeList />
    },
    {
        path: '/users/login',
        element: <Login />
    },
    {
        path: '/admin/dashboard',
        element: <AdminRoutes><Dashboard /></AdminRoutes>
    },
    {
        path: "/status",
        element: <Status />
    },
    {
        path: '/rr/create',
        element: <RRCreate />
    },
    {
        path: '/admin/service/:no',
        element: <AdminRoutes><Service /></AdminRoutes>
    },
    {
        path: '/users/create',
        element: <Create />
    },
    {
        path: '/users/forgot-password',
        element: <ForgotPassword />
    },
    {
        path: '/users/reset-password',
        element: <ResetPassword />
    },
    {
        path: "*",
        element: <Navigate to='/users/login' />
    },

]

export default AppRouter