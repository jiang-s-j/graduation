import React, { Component } from 'react'
import './login.scss'
import login from '../../asset/imgs/login.png'

import { Input, Button, Form, Checkbox } from 'antd';
import { UserOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

import { loginIndex } from '@/api/index'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  onFinish = (value) => {
    loginIndex({
      username:value.username,
      password:value.password,
      remember:value.remember}
      ).then((res) => {
        console.log(res);
      }).catch( )
  }

  onFinishFailed = () => {}

  componentDidMount() {

  }

  render() {
    let url = `https://api.sunweihu.com/api/bing1/api.php`
    // 请求必应背景图片
    return (
      <>
        <div className='loginWarp' style={{ backgroundImage: `url(${url})` }}>
          <div className="login">
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
                // label="Username"
                name="username"
                className='userName'
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input prefix={<UserOutlined/>} />
              </Form.Item>

              <Form.Item
                // label="Password"
                name="password"
                className='passWorld'
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password prefix={<SafetyCertificateOutlined/>} />
              </Form.Item>

              <Form.Item  name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
              >
                <Button className='button' type="primary" htmlType="submit" >
                  Submit
                </Button>
              </Form.Item>
            </Form>

          </div>
        </div>
      </>
    )
  }
}

export default Login