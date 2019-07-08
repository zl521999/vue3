
import Msite from "../pages/Msite/Msite.vue"
import Search from "../pages/Search/Search.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Login from "../pages/Login/Login.vue"
export default [
  {
    path:"/msite",
    component:Msite,
    meta: {
      //路由的元信息
      isShowFooter:true

     }

  },
  {
    path:"/search",
    component:Search,
    meta: {
      //路由的元信息
      isShowFooter:true

     }

  },
  {
    path:"/order",
    component:Order,
    meta: {
      //路由的元信息
      isShowFooter:true

     }

  },
  {
    path:"/profile",
    component:Profile,
    meta: {
      //路由的元信息
      isShowFooter:true

     }


  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/",//项目根路径
    redirect: "/msite",
    meta: {
      //路由的元信息
      isShowFooter:true

     }
  },
]
