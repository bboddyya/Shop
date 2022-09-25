import Basket from "../pages/Basket"
import Favorite from "../pages/Favorite"
import Home from "../pages/Home"
import Profile from "../pages/Profile"

interface IRoutes {
    path: string
    component:React.FunctionComponent
    private?: boolean
}

export const routesList:IRoutes[] = [
    {
        path:'/',
        component: Home,
        private: true
    },
    {
        path:'/basket',
        component: Basket,
        private: true
    },{
        path:'/favorite',
        component: Favorite,
        private: true
    },
    {
        path:'/profile',
        component: Profile,
        private: true
    },
]