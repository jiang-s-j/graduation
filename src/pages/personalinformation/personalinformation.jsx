import React, { useEffect, useState } from 'react'
import { Card, Descriptions, Button, Avatar, Input, Form, Upload,notification } from 'antd'
import avatar from '@/components/HeaderBar/img/03.jpg'
import { UploadOutlined } from '@ant-design/icons';
import {userInformtionMdify,queryUserInfo} from '@/api/index.js'


const PersonalInformation = (props) => {

  const [userInfo,setUserInfo] = useState({
      avatar:'',
      likes:'',
      phone:'',
      remark:'',
      username:'',
  })

  const [cardShow,setCardShow] = useState(false)

  useEffect(() => {
    queryUserInfo().then(
      res => {
        if(res.flag){
          setUserInfo({
            avatar:res.data.avatar,
            likes:res.data.likes,
            phone:res.data.phone,
            remark:res.data.remark,
            username:res.data.username,
          })
        }
      }
    )
  },[])

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const modify = (value) =>{
    console.log(value);
    let avatar
    if(value.picture.fileList[0].response.flag){
       avatar = value.picture.fileList[0].response.fileName
    }else{
      avatar = ''
    }
    userInformtionMdify(
      {
        avatar:avatar,
        phone:value.phone,
        likes:value.likes,
        remark:value.remark,
      }
    )
    .then(
      res => {
        if(res.flag){
          setCardShow(false)
          notification.success({
            message:'修改成功'
          })
        }
      }
    )

  }

  const showModify = () => {
    setCardShow(res => !res)
  }

  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title="个人信息"

      >
        展现更好的自己，遇见更美的未来
        </Card>

      <Card
        style={{ marginTop: 16 }}
        type='inner'
        title="基础信息"
        extra={<Button type='primary' onClick={showModify}>编辑个性资料</Button>}
      >
        <Descriptions title="User Info" layout="vertical">
          <Descriptions.Item label='avatar'><Avatar size='large' src={userInfo.avatar} /></Descriptions.Item>
          <Descriptions.Item label="UserName">{userInfo.username}</Descriptions.Item>
          <Descriptions.Item label="Telephone">{userInfo.phone}</Descriptions.Item>
          <Descriptions.Item label="Live">{userInfo.likes}</Descriptions.Item>
          <Descriptions.Item label="Remark">{userInfo.remark}</Descriptions.Item>
        </Descriptions>
      </Card>

      {cardShow && <Card
        style={{ marginTop: 16 }}
        type='inner'
        title="编辑信息"
        >
        <Form {...layout}
         style={{ backgroundColor: 'white', padding: '40px 0px', }} 
         onFinish={modify}
         >
          <Form.Item
            name='picture'
            label='头像1'
          >
            <Upload
              name='img'
              action='http://127.0.0.1:8000/index/upload'
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="phone"
            label="电话号码"
          >
            <Input
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item
            name='likes'
            label='爱好'
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name='remark'
            label="动态"
          >
            <Input/>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>}
    </>
  )
}

export default PersonalInformation