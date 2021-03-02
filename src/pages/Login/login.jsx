import React, { Component } from 'react'
import './login.scss'
import login from '../../asset/imgs/login.png'

import { Input, Button, Form, Checkbox } from 'antd';
import { UserOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  onFinish = () => {

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
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item  name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
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