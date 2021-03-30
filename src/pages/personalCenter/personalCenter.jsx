import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Route, Switch,withRouter} from 'react-router-dom'
import HeaderBar from '@/components/HeaderBar/index.jsx'
import Profile from '@/pages/profile/profile.jsx'


const { Header, Sider, Content } = Layout;
@withRouter
class PersonalCenter extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              个人信息
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              创作中心
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0, backgroundColor : '#FFF' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header> */}
          <HeaderBar collapsed={this.state.collapsed} change={this.toggle} ></HeaderBar>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '90vh',
            }}
          >
            <Switch>
              <Route path={'/personal/profile'} component={Profile}></Route>
            </Switch>
            
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PersonalCenter