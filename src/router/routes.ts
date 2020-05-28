import * as React from "react";

const routes = [
  {
    path: "/home/userList",
    component: React.lazy(() => import('@pages/UserList/UserList')),
  },
  {
    path: "/home/userInfo",
    component: React.lazy(() => import('@pages/UserInfo/UserInfo')),
  },
  {
    path: "/",
    exact: true,
    redirect: '/home/userList',
  },
]

export default routes