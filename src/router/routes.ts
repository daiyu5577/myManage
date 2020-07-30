import * as React from 'react';

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/user/userList',
  },
  {
    path: '/user/userList',
    component: React.lazy(() => import('@pages/UserList')),
    requiresAuth: true,
  },
  {
    path: '/user/userInfo',
    component: React.lazy(() => import('@pages/UserInfo')),
    requiresAuth: true,
  },
  {
    path: '/tim/index',
    component: React.lazy(() => import('@pages/Tim')),
    requiresAuth: true,
  },
  
  // {
  //   name: 'exception',
  //   // icon: 'warning',
  //   path: '/exception',
  //   hideInMenu: true,
  //   routes: [
  //     // exception
  //     {
  //       path: '/exception/403',
  //       name: 'not-permission',
  //       component: './Exception/403',
  //     },
  //     {
  //       path: '/exception/404',
  //       name: 'not-find',
  //       component: './Exception/404',
  //     },
  //     {
  //       path: '/exception/500',
  //       name: 'server-error',
  //       component: './Exception/500',
  //     },
  //   ],
  // },
];

export default routes;
