import * as React from "react";
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import menus from '../router/menus';
import renderRoutes from "../router/renderRoutes";
import router from "../router/router";
import "./PageLayout.less"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface Props {
  readonly history: any;
}

interface State {
}

export default class PageLayout extends React.PureComponent<Props, State> {

  handleChooseItem = (val: any) => {
    const { history } = this.props;
    history.push({ pathname: val.key })
  }

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo" >logo</div>
          <Menu onClick={this.handleChooseItem} theme="dark" mode="inline" defaultOpenKeys={['user']} defaultSelectedKeys={['/home/userList']}>
            {
              menus.map(menu => (
                menu.routes ?
                  <SubMenu key={menu.key} icon={<UserOutlined />} title={menu.title}>
                    {
                      menu.routes.map(val => <Menu.Item key={val.path}>{val.title}</Menu.Item>)
                    }
                  </SubMenu> :
                  <Menu.Item key={menu.path} icon={<UserOutlined />}>{menu.title}</Menu.Item>
              ))
            }
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {renderRoutes(router)}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>console ©2020 Created by daiyu</Footer>
        </Layout>
      </Layout>
    )
  }
}