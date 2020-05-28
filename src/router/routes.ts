import * as React from "react";

const routes = [
  {
    path: "/home/userList",
    component: React.lazy(() => import('@pages/UserList')),
  },
  {
    path: "/home/userInfo",
    component: React.lazy(() => import('@pages/UserInfo')),
  },
  {
    path: "/",
    exact: true,
    redirect: '/home/userList',
  },
]

export default routes