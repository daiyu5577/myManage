import * as React from "react";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import menus from '../router/menus';
import "./PageLayout.less"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default React.memo(props => {
  const { children } = props;
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" >logo</div>
        <Menu theme="dark" mode="inline" defaultOpenKeys={['user']} defaultSelectedKeys={['userList']}>
          {
            menus.map(menu => (
              menu.routes ?
                <SubMenu key={menu.key} icon={<UserOutlined />} title={menu.title}>
                  {
                    menu.routes.map(val => <Menu.Item key={val.key}>{val.title}</Menu.Item>)
                  }
                </SubMenu> :
                <Menu.Item key={menu.key} icon={<UserOutlined />}>{menu.title}</Menu.Item>
            ))
          }
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
})
