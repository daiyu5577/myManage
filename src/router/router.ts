import * as React from "react";

const routes = [
  {
    path: "/home/userList",
    component: React.lazy(() => import('../pages/Home/UserList')),
  },
  {
    path: "/home/userInfo",
    component: React.lazy(() => import('../pages/Home/UserInfo')),
  },
  {
    path: "/",
    exact: true,
    redirect: '/home/userList',
  },
]

export default routes