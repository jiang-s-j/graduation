import React, { useEffect, useState } from 'react'
import './playPage.scss'
import ReactPlayer from 'react-player'
import vieo from '@/asset/imgs/1.flv'
import { Card, Avatar } from 'antd';
import { HeartTwoTone, EllipsisOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import {useLocation} from 'react-router-dom'
import {queryContentInfo, contentLikes, cancelLikes, isLikequery} from '@/api/index.js'

const { Meta } = Card;
const PlayPage = (props) => {

  const [iconColor,setIconColor] = useState('#A9A9A9')
  const [concerniconColor,setConcerniconColor] = useState('#A9A9A9')

  const [contentId,setContentId] = useState('')

  const [contentInfo,setContentInfo] = useState({}) // 存储请求视频信息

  const [isLike,setIsLike] = useState(false) // 是否点赞

  const location = useLocation()
  // 首次加载
  useEffect(() => {
    console.log(location);
    let content_id = location.state?.contentId
    console.log(content_id);
    setContentId(content_id)

    queryContentInfo({
      content_id : content_id
    })
    .then(res => {
      if(res.flag){
        setContentInfo(res.data)
      }
    })

    isLikequery({
      content_id : content_id
    })
    .then(res => {
      if(res.flag){
        if(res.data){
          setIconColor('#1890FF')
        }else{
          setIconColor('#A9A9A9')
        }
        setIsLike(res.data)
      }
    })
  },[])

  // 点赞
  const like = () => {
    if(!isLike){
      contentLikes({
        content_id: contentId
      })
      .then(res => {
        if (res.flag) {
          setIsLike(true)
          setIconColor('#1890FF')
        }
      })
    }else{
      cancelLikes({
        content_id : contentId
      }).then(res => {
        if(res.flag){
          setIsLike(false)
          setIconColor('#A9A9A9')
        }
      })
    }
    let color = iconColor === '#A9A9A9' ? '#1890FF' : '#A9A9A9'
    
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
              url={contentInfo.video}
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
            avatar={<Avatar src={contentInfo.avatar ?? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'} />}
            title={contentInfo.title}
            description={contentInfo.descript}
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