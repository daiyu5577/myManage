import * as React from "react";

const routes = [
  {
    path: "/home/userList",
    component: React.lazy(() => import('../pages/home/UserList')),
  },
  {
    path: "/home/userInfo",
    component: React.lazy(() => import('../pages/home/UserInfo')),
  },
  {
    path: "/",
    exact: true,
    redirect: '/home/userList',
  },
]

export default routes