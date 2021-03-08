import React, { Component } from 'react'
import './header.scss'
import { Menu,AutoComplete } from 'antd'
import { MailOutlined, UserOutlined } from '@ant-design/icons';

import Complete from '@/components/search/search.jsx'

const { SubMenu } = Menu

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'mail',
    }
  }

  // 菜单选择
  selectMenu = (e) => {
    this.setState({
      current: e.key
    })
  }


  render() {

    const { current } = this.state

    return (
      <>
        <div className='header'>
          <div className='header-main'>
            <Menu style={{ width: '50%', height: '100%', }} onClick={this.selectMenu} selectedKeys={[current]} mode="horizontal">
              <Menu.Item key="mail" icon={<MailOutlined />}>
                首页
              </Menu.Item>
              <Menu.Item key="profile" icon={<UserOutlined />} >
                我的
              </Menu.Item>
            </Menu>
            <Complete></Complete>
          </div>
        </div>
      </>
    )
  }
}

export default Header
