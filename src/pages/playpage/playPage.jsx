import React, { useEffect, useState } from 'react'
import './playPage.scss'
import ReactPlayer from 'react-player'
import vieo from '@/asset/imgs/1.flv'
import { Card, Avatar,Input, Button } from 'antd';
import { HeartTwoTone, EllipsisOutlined, CheckCircleTwoTone } from '@ant-design/icons';
import {useLocation} from 'react-router-dom'
import {queryContentInfo, contentLikes, cancelLikes, isLikequery, queryComment, addComment} from '@/api/index.js'
import Comment from '@/components/comment/comment.jsx'

const { Meta } = Card;
const PlayPage = (props) => {

  const [iconColor,setIconColor] = useState('#A9A9A9')
  const [concerniconColor,setConcerniconColor] = useState('#A9A9A9')

  const [contentId,setContentId] = useState('') // 帖子ID

  const [contentInfo,setContentInfo] = useState({}) // 存储请求视频信息

  const [isLike,setIsLike] = useState(false) // 是否点赞

  const [commentInfo,setCommentInfo] = useState([]) // 评论信息

  const [userInfo,setUserInfo] = useState([]) // 用户信息

  const [commentValue,setCommentValue] = useState('') // 用户评论信息
 
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

    queryComment({
      comment_id: content_id
    })
    .then(
      res => {
        if(res.flag){
          setCommentInfo(res.data)
          setUserInfo(res.userInfo)
        }
      }
    )


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

  // 改变评论 
  const changeCommentValue = (e) => {
    setCommentValue(e.target.value)
  }

  // 提交评论信息
  const submitCommit = () => {
    console.log('aaa');
    addComment({
      content: commentValue,
      comment_id: contentId,
    }).then(
      res => {
        if(res.flag){

        }
      }
    )
  }

  return (
    <>
      <div className='player'>
        <Card
          style={{ width: '100%' }}
          cover={
            <ReactPlayer
              url={contentInfo.video}
              // url='http://127.0.0.1:8000/storage/topic/20210401/3fb5fec9ef546c888e8b493cb80f3bb6.flv'
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
        <div className='comment'>
         {commentInfo.map((item,index) => (
          <Comment key={index} name={userInfo[index]?.name} avatar={userInfo[index]?.avatar} content={item.comment_content}>
          </Comment>
          ))
        } 
        </div>

        <div className='addComment'>
          <Avatar src={contentInfo.avatar ?? 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}></Avatar>
          <div className='addCommentRight'>
            <Input.TextArea size='large' value={commentValue} onChange={changeCommentValue}></Input.TextArea>
            <Button type='primary' style={{marginTop: '2vh'}} onClick={submitCommit}>ADD COMMIT</Button>
          </div>
        </div>
      </div>   
    </>
  )
}

export default PlayPage