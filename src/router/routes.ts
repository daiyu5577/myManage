import * as React from "react";

const routes = [
  {
    path: "/home/userList",
    component: React.lazy(() => import('@pages/UserList')),
    requiresAuth: true,
  },
  {
    path: "/home/userInfo",
    component: React.lazy(() => import('@pages/UserInfo')),
    requiresAuth: true,
  },
  {
    path: "/",
    exact: true,
    redirect: '/home/userList',
  },
]

export default routes