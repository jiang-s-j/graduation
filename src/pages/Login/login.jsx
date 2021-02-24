import React,{Component} from 'react'
import './login.scss'
import login from '../../asset/imgs/login.png'

import { Input,Button } from 'antd';
import { UserOutlined,SafetyCertificateOutlined } from '@ant-design/icons';

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className='loginWarp' style={{backgroundImage:`url(${login})`}}>
          <div className="login">
            <div className='title'>
              登录
            </div>
            <Input className='userName' size="large" placeholder="用户名" prefix={<UserOutlined />} />
            <Input className='passWorld' size="large" placeholder="密码" prefix={<SafetyCertificateOutlined />} />
            
            <Button className='button' type="primary">登录</Button>
          </div>
        </div>
      </>
    )
  }
}

export default Login