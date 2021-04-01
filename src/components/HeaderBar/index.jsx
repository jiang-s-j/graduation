import React, { useEffect, useState } from 'react'
import './index.scss'


import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Avatar,Button,Popover,notification } from 'antd'

import {queryUserInfo,logoutIndex} from '@/api/index.js'

import avator from './img/03.jpg'
import { connect } from 'react-redux'
import {useHistory} from 'react-router-dom'

const HeaderBar = (props) => {
  const history = useHistory()
  const back = () => {
   history.push('/index/recommend')
  }
  const [user,setUser] = useState({
    avator:'',
    username:''
  })

  useEffect(() => {
    queryUserInfo()
    .then(
      res => {
        if(res.flag){
          setUser({
            avator:res.data.avatar,
            username:res.data.username,
          })
        }
      }
    )
  },[]) 

  // 浮动框content内容
  const content = () => {
    // 点击退出登录
    const logout = () => {
      logoutIndex().then(
        res => {
          if(res.flag){
           notification.success({
             message: '退出登录成功'
           })
           history.push('/login')
          }
        }
      )
    }
    return (
    <>
      <p className='hand'>你好:{user.username}</p>
      <p className='hand' onClick={() => {history.push('/index/recommend')}}>回到主页</p>
      <p className='hand' onClick={logout}>退出登录</p>
    </>
    )
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
          <Popover title='个人信息' content={content}>
             <Avatar size='large' src={user.avator} />
          </Popover>
        </div>
      </div>
    </>
  )
}

export default HeaderBar