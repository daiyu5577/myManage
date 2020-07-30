interface menus {
  readonly [index: number]: any;
  map: (item: any) => any[];
}

interface breadcrumbNameMap {
  readonly [index: string]: any;
}

const menus: menus = [
  {
    title: '用户管理',
    key: 'user',
    path: '/user/userList',
    icon: '',
    role: '',
    routes: [
      {
        title: '用户列表',
        key: 'userList',
        path: '/user/userList',
        icon: '',
        role: '',
      },
      {
        title: '用户信息',
        key: 'userInfo',
        path: '/user/userInfo',
        icon: '',
        role: '',
      },
    ],
  },
  {
    title: '在线聊天',
    key: 'tim',
    path: '/tim/index',
    icon: '',
    role: '',
  },
];

const breadcrumbNameMap: breadcrumbNameMap = {};

export default menus;
