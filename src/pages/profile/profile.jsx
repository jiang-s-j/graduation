import React, { Component } from 'react'
import './profile.scss'
import { Upload, Button, Modal, notification, Form, Input, Card } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { uploadIndex, postVideo } from '@/api/index.js'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: '', // 上传文件的回调

    }
  }

  fileChange = (e) => {
    // 当文件处于上传完成状态时进行赋值
    if (e.file.status === 'done') {
      if (e.file.response.flag) {
        this.setState({
          imgSrc: e.file.response.fileName
        })
      } else {
        notification.error({
          message: '上传失败'
        })
      }

    }
  }

  // 发布视频
  postVideo = (value) => {
    console.log(value);
    postVideo({
      title: value.title,
      descript: value.descript,
      picture: this.state.imgSrc,
    }).then(
      res => {

      }
    )

  }

  render() {
    const { imgSrc } = this.state
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      },
    };
    return (
      <>
        {/* <div className="profile">
          上传图片:
          <Upload
            name='img'
            action='http://127.0.0.1:8000/index/upload'
            onChange={this.fileChange}
          >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>

          <img src={imgSrc}></img>

        </div> */}

        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="创作中心"
        // extra={<a href="#">More</a>}
        >
          让创作改变世界，改变你我
        </Card>

        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="上传视频"
        >
          <Form {...layout} onFinish={this.postVideo} style={{ backgroundColor: 'white', padding: '40px 0px', }}>
            <Form.Item
              name='title'
              label="标题"
              rules={[
                {
                  required: true,
                  message: '请输入标题',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='descript'
              label="简介"
              rules={[
                {
                  required: true,
                  message: '请输入简介'
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name='picture'
              label='视频封面'
              rules={[
                {
                  required: true,
                  message: '请上传视频封面'
                }
              ]}
            >
              <Upload
                name='img'
                action='http://127.0.0.1:8000/index/upload'
                onChange={this.fileChange}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name='video'
              label='视频'
              rules={
                [{
                  required: true,
                  message: '请上传视频'
                }]
              }
            >
              <Upload
                name='videoContent'
                action='http://127.0.0.1:8000/index/videoUpload'
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} >
              <Button type="primary" htmlType="submit">
                提交
            </Button>
            </Form.Item>
          </Form>
        </Card>


      </>
    )
  }
}

export default Profile