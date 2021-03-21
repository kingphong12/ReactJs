import Home from './homework/unit-24/component/page/Home'
import Login from './homework/unit-24/component/page/Login'
import PostDetail from './homework/unit-24/component/page/PostDetail'
import BasicAuth from './auth/BasicAuth'

export const routers = [
  {
    path:'/login',
    Component: <Login />,
    exact: false,
  },
  {
    path:'/',
    Component: <BasicAuth BasicAuth={Home} routeName="Home"/>,
    exact: true,
  },
  {
    path:'/posts/:id',
    Component: <PostDetail routeName="PostDetail"/>,
    exact: true,
  },
]
