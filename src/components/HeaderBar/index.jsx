import React from 'react'
import './index.scss'


import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Avatar,Button } from 'antd'

import avator from './img/03.jpg'
import { connect } from 'react-redux'
import {useHistory} from 'react-router-dom'

const HeaderBar = (props) => {
  const history = useHistory()
  const back = () => {
   history.push('/index/recommend')
  }

  return (
    <>
      <div className="headerbar">
        <div className='headerBarLeft'>
          {props.collapsed ?
            <MenuUnfoldOutlined onClick={props.change} /> :
            <MenuFoldOutlined onClick={props.change} />
          }

        </div>
        <div className='headerBarRight'>
          <Button type="link" onClick={back}>
            返回首页
          </Button>
          <Avatar size='large' src={avator} />
        </div>
      </div>
    </>
  )
}

export default HeaderBar