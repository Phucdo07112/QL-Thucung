import HomePage from "../page/HomePage";
import Login from "../page/auth/Login";
import Register from "../page/auth/Register";



export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/login',
        page: Login,
        isShowHeader: false
    },
    {
        path: '/register',
        page: Register,
        isShowHeader: false
    },
    // {
    //     path: '/system/admin',
    //     page: AdminPage,
    //     isShowHeader: false,
    //     isPrivated: true
    // },
    // {
    //     path: '*',
    //     page: NotFoundPage
    // }
]