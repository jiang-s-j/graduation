import React from 'react'
import './index.scss'


import { MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import {Avatar} from 'antd'

import avator from './img/03.jpg'
import {connect} from 'react-redux'

const HeaderBar = (props) => {
  return (
    <>
      <div className="headerbar">
        <div className='headerBarLeft'>
           {props.collapsed ? 
             <MenuUnfoldOutlined  onClick={props.change}/> :
             <MenuFoldOutlined onClick={props.change}/>
            }

        </div>
        <div className='headerBarRight'>
          <Avatar size='large' src={avator} />
        </div>
      </div>
    </>
  )
}

export default HeaderBar