import React, { Component } from 'react'
import './login.scss'
import login from '../../asset/imgs/login.png'

import { Input, Button, Form, Checkbox,Alert,notification } from 'antd';
import { UserOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

import { loginIndex,logoutIndex,registerIndex } from '@/api/index'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloginState:true, // true 处于登录状态 false 处于注册状态 
      ispasswordsmall: false, // 密码相同提示
    }
  }
  onFinish = (value) => {
    this.featchLogin(value)
    this.featchLogout()

  }
  // 注册onfish
  onRegisterFinish = (value) => {
    if(value.password === value.confirmPassword){
      this.setState({
        ispasswordsmall:false,
      })
        registerIndex({
        username:value.username,
        password:value.password,
      }).then(
        res => {
          if(res.flag){
            this.setState({
              isloginState:true,
            })
          }else{
            notification.error({
              message:res.msg
            })
          }
        }
      )
    }else{
      this.setState({
        ispasswordsmall: true
      })
    }
   
  }

  // 发送login 请求
  featchLogin = (value) => {
    loginIndex({
      username:value.username,
      password:value.password,
      remember:value.remember}
      ).then((res) => {
        if (res.flag) {
          localStorage.setItem('token',res.token)
          // 登录成功后跳转
          this.props.history.push('/index/recommend')
        }
      }).catch( )
  }

  // 发送logout 请求
  featchLogout = () => {
    logoutIndex().then(
      res => {
        if(res.flag){
          console.log('退出成功');
        }
      }
    )
  } 
  // 改变登录状态
  changloginState = () => {
    this.setState({
      isloginState:false
    })
  }



  render() {
    let url = `https://api.sunweihu.com/api/bing1/api.php`
    // 请求必应背景图片
    const {isloginState,ispasswordsmall} = this.state
    return (
      <>
        <div className='loginWarp' style={{ backgroundImage: `url(${url})` }}>
         {isloginState && <div className="login">
            <div className='title'>
              登录
            </div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                // label="用户名"
                name="username"
                className='userName'
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input prefix={<UserOutlined/>} />
              </Form.Item>

              <Form.Item
                // label="密码"
                name="password"
                className='passWorld'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password prefix={<SafetyCertificateOutlined/>} />
              </Form.Item>

              <Form.Item  name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
              >
                <Button className='button' type="primary" htmlType="submit" >
                  submit
                </Button>
              </Form.Item>
            </Form>
            <div className='loginORregister' onClick={this.changloginState}>还没有注册账号，立即注册</div>
          </div>}

          {!isloginState && <div className="login">
            <div className='title'>
              注册
            </div>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onRegisterFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                label="用户名"
                name="username"
                className='userName'
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input prefix={<UserOutlined/>} />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                className='passWorld'
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password prefix={<SafetyCertificateOutlined/>} />
              </Form.Item>

              <Form.Item
                label="确认密码"
                name="confirmPassword"
                className='passWorld'
                rules={[
                  { required: true, message: 'Please input your confirm password!' },
                ]}
              >
                <Input.Password prefix={<SafetyCertificateOutlined/>} />
              </Form.Item>
              {ispasswordsmall && <Alert type="error" message="密码不相同，请输入相同的密码!" banner />}

              <Form.Item  name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
              >
                <Button className='button' type="primary" htmlType="submit" >
                  注册
                </Button>
              </Form.Item>
            </Form>
            <div className='loginORregister' onClick={() => {
              this.setState({
                isloginState:true
              })
            }}>以注册立即登录</div>
          </div>}



        </div>
      </>
    )
  }
}

export default Login