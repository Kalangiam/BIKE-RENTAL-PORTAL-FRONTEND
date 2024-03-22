const ApiRoutes = {
    USER_LOGIN: {
        path: '/users/login',
        authenticate: false
    },
    RR_CREATE: {
        path: '/rr/create',
        authenticate: false
    },
    RR:{
        path:'/rr',
        authenticate:false
    },
    DASHBOARD_COUNT:{
        path:'/admin/dashboard',
        authenticate:true
    },
    SERVICE:{
        path:'/admin/service',
        authenticate:true
    },
    LIST:{
        path:'/admin/list',
        authenticate:true
    },
    CHANGE_STATUS:{
        path:'/admin/change-status',
        authenticate:true
    },
    CREATE_USER:{
        path:'/users/create',
        authenticate:false
    },
    FORGOT_PASSWORD:{
        path:'/users/forgot-password',
        authenticate:false
    },
    RESET_PASSWORD :{
        path:'/users/reset-password',
        authenticate:false
    }
}

export default ApiRoutes