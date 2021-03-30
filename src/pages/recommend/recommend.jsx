import React, { Component, createRef } from 'react'
import './recommend.scss'
import { connect } from 'react-redux'

import * as ACTCreator from '@/store/actionCreates.js'

import { getRecommend } from '@/api/index'
import { Skeleton, Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined, HeartOutlined } from '@ant-design/icons';


// 引入图片
import recom1 from '@/asset/imgs/recom1.jpg'
import recom2 from '@/asset/imgs/recom2.jpg'
import recom3 from '@/asset/imgs/recom3.jpg'
import recom4 from '@/asset/imgs/recom4.jpg'
import recom5 from '@/asset/imgs/recom5.jpg'
import recom6 from '@/asset/imgs/recom6.jpg'
import recom7 from '@/asset/imgs/recom7.jpg'

@connect(
  (state) => ({
    recommendData: state.recommend
  }),
  dispatch => ({
    initRecommend: () => dispatch({ type: 'initRecommendSaga', load: '' })
  })
)



class Recommend extends Component {
  constructor(props) {
    super(props)

    this.scrollDom = createRef() // 为scroll 设置ref

    this.state = {
      recommendInitData: [], // 推荐初始化数据
      imgs: [recom1, recom2, recom3, recom4, recom5, recom6, recom7], // 图片数组
      isSkeletonFlag: true, // 骨架屏展示标志
      arry1: [],
      arry2: [],
      arry3: [],
    }
  }

  componentDidMount() {
    console.log('加载');
    // this.props.initRecommend()
    this.fetchRecommendData()

  }

  // 请求推荐数据
  fetchRecommendData = () => {
    getRecommend().then(
      res => {
        console.log(res);
        if (res.flag) {
          this.setState((pre) => ({
            recommendInitData: pre.recommendInitData.concat(res.data),
            isSkeletonFlag: false
          }))

          this.getMultArry()

          console.log(this.state.arry2);
        }
      }
    )
  }

  componentWillUnmount() {
    console.log('卸载');
  }
  // 将初始化的数组分成三份
  getMultArry = () => {
    const { recommendInitData } = this.state

    let arry1 = recommendInitData.filter((item, index) => {
      return index % 3 === 0
    })

    let arry2 = recommendInitData.filter((item, index) => {
      return index % 3 === 1
    })

    let arry3 = recommendInitData.filter((item, index) => {
      return index % 3 === 2
    })

    this.setState({
      arry1: arry1,
      arry2: arry2,
      arry3: arry3,
    })

  }

  handleScoll = (e) => {
    if (this.scrollDom.current.scrollTop + this.scrollDom.current.clientHeight >= this.scrollDom.current.scrollHeight) {
      console.log('到底了');
      //  到scroll 滑到底部时 进行请求数据
      this.fetchRecommendData()

    }
  }

  render() {
    const {
      recommendInitData,
      isSkeletonFlag
    } = this.state
    return (
      <>
        {
          isSkeletonFlag &&
          <div>
            {/* <Card
              style={{ width: 300,height:, marginTop: 16 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            > 300
              <Skeleton  avatar active>
                <Card.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card> */}
            <Skeleton active paragraph={{ rows: 5 }}></Skeleton>
            <Skeleton active paragraph={{ rows: 5 }}></Skeleton>
            <Skeleton active paragraph={{ rows: 5 }}></Skeleton>
          </div>

        }
        {
          !isSkeletonFlag &&
          <div
            className='recommend'
            onScroll={this.handleScoll}
            ref={this.scrollDom}
          >
            <div className="arryList">
              {this.state.arry1.map((item, index) => (
                <Card
                  hoverable
                  key={index}
                  style={{ width: 300, marginBottom: '2vh', }}
                  cover={
                    <img
                      alt="example"
                      src={this.state.imgs[item.img]}
                    />
                  }
                
                >
                  <Card.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.name}
                    description="This is the description"
                  />
                </Card>

              ))
              }

            </div>
            <div className="arryList">
              {this.state.arry2.map((item, index) => (
                <Card
                  hoverable
                  key={index}
                  style={{ width: 300, marginBottom: '2vh', }}
                  cover={
                    <img
                      alt="example"
                      src={this.state.imgs[item.img]}
                    />
                  }
        
                >
                  <Card.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>

              ))
              }

            </div>
            <div className="arryList">
              {this.state.arry3.map((item, index) => (

                <Card
                  hoverable
                  key={index}
                  style={{ width: 300, marginBottom: '2vh', }}
                  cover={
                    <img
                      alt="example"
                      src={this.state.imgs[item.img]}
                    />
                  }
                
                >
                  <Card.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                  />
                </Card>

              ))
              }

            </div>



          </div>

        }
      </>
    )
  }
}

export default Recommend