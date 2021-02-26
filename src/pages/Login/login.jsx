import React,{Component} from 'react'
import './login.scss'
import login from '../../asset/imgs/login.png'

import { Input,Button,Form,Checkbox } from 'antd';
import { UserOutlined,SafetyCertificateOutlined } from '@ant-design/icons';

class Login extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    
  }

  render() {
    let url = `https://api.sunweihu.com/api/bing1/api.php`
    // 请求必应背景图片
    return (
      <>
        <div className='loginWarp' style={{backgroundImage:`url(${url})`}}>
          <div className="login">
            <div className='title'>
              登录
            </div>
            <Form
             initialValues={{ remember: false }}
            >
              <Form.Item>
                <Input className='userName' size="large" placeholder="用户名" name="username" prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item>
                <Input className='passWorld' size="large" placeholder="密码" name='password' prefix={<SafetyCertificateOutlined />} />
              </Form.Item>
              <Form.Item>
                <Checkbox name='remember' valuePropName="checked">Remember me</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button className='button' type="primary" htmlType='submit'>登录</Button>
              </Form.Item>
            </Form>
            
            
          </div>
        </div>
      </>
    )
  }
}

export default Login