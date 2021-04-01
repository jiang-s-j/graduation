import React, { useEffect, useState } from 'react'
import './playPage.scss'
import ReactPlayer from 'react-player'
import vieo from '@/asset/imgs/1.flv'
import { Card, Avatar } from 'antd';
import { HeartTwoTone, EllipsisOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import {useLocation} from 'react-router-dom'

const { Meta } = Card;
const PlayPage = (props) => {

  const [iconColor,setIconColor] = useState('#A9A9A9')
  const [concerniconColor,setConcerniconColor] = useState('#A9A9A9')

  const location = useLocation()
  // 首次加载
  useEffect(() => {
    console.log(location);
    let content_id = location.state?.contentId
    console.log(content_id);
  },[])

  // 点赞
  const like = () => {
    let color = iconColor === '#A9A9A9' ? '#1890FF' : '#A9A9A9'
    setIconColor(color)
  }

  // 关注
  const concern = () => {
    let color = iconColor === '#A9A9A9' ? '#1890FF' : '#A9A9A9'
    setConcerniconColor(color)
  }

  return (
    <>
      <div className='player'>
        <Card
          style={{ width: '100%' }}
          cover={
            <ReactPlayer
              url={vieo}
              controls={true}
              width='100%'
              style={{ margin: '20px 0px' }}
            ></ReactPlayer>
          }
          actions={[
            // 双色图标 #A9A9A9 #52c41a
            <HeartTwoTone twoToneColor={iconColor} key="setting"  onClick={like} />,
            <CheckCircleTwoTone twoToneColor={concerniconColor} key="edit" onClick={concern} />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          title='aa'
          activeTabKey='setting'
          hoverable
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
        {/* <ReactPlayer
          url={vieo}
          controls={true}
          width='100%'
          style={{ margin: '20px 0px' }}
        ></ReactPlayer> */}
      </div>

    </>
  )
}

export default PlayPage