import React, { Component } from 'react'
import './profile.scss'
import { Upload, Button, Modal, notification } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { uploadIndex } from '@/api/index.js'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className="profile">
          上传图片:  
          <Upload
            name='img'
            action='http://127.0.0.1:8000/index/upload'
          >
             <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
         
        </div>
      </>
    )
  }
}

export default Profile