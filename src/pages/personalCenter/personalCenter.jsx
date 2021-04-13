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
import PersonalInformation from '@/pages/personalinformation/personalinformation.jsx'
import DataShow from '@/pages/dataShow/dataShow.jsx'


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

  menuSelect = (item) => {
    console.log(item);
    switch (item.key){
      case "1":
        this.props.history.push('/personal/informal')
        break
      case "2":
        this.props.history.push('/personal/profile')
        break
      case "3":
        this.props.history.push('/personal/datashow')
        break
    }
  }

  render() {
    return (
      <Layout>
        <Sider  trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onSelect={this.menuSelect}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              个人信息
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              创作中心
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              数据分析
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
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
              <Route path={'/personal/informal'} component={PersonalInformation}></Route>
              <Route path={'/personal/profile'} component={Profile}></Route>
              <Route path={'/personal/datashow'} component={DataShow}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PersonalCenter