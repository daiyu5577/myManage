import * as React from "react";

const routes = [
  {
    path: "/user/userList",
    component: React.lazy(() => import('@pages/UserList')),
    requiresAuth: true,
  },
  {
    path: "/user/userInfo",
    component: React.lazy(() => import('@pages/UserInfo')),
    requiresAuth: true,
  },
  {
    path: "/",
    exact: true,
    redirect: '/user/userList',
  },
]

export default routes