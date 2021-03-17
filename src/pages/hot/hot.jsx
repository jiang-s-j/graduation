import React,{Component} from 'react'
import './hot.scss'
import { connect } from 'react-redux'

import * as ACTCreator  from '@/store/actionCreates.js'

import {getRecommend} from '@/api/index'
import { Skeleton } from 'antd'

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
    recommendData : state.recommend
  }),
  dispatch => ({
    initRecommend:() =>  dispatch({type: 'initRecommendSaga',load:''})
  })
)


class Hot extends Component{
  constructor(props){
    super(props)
    this.state= {
      recommendInitData:[], // 推荐初始化数据
      imgs:[recom1,recom2,recom3,recom4,recom5,recom6,recom7], // 图片数组
      isSkeletonFlag: true, // 骨架屏展示标志
    }
  }

  componentDidMount () {
    console.log('加载');
    // this.props.initRecommend()
    getRecommend().then(
      res => {
        console.log(res);
        if (res.flag) {
          this.setState({
            recommendInitData:res.data,
            isSkeletonFlag:false
          })
        }
      }
    )
    
  }

  componentWillUnmount() {
    console.log('卸载');
  }

  render(){
    const {
      recommendInitData,
      isSkeletonFlag
    } = this.state
    return (
      <>
        { 
          isSkeletonFlag &&
          <div>
            <Skeleton active paragraph={{rows: 5}}></Skeleton>
            <Skeleton active paragraph={{rows: 5}}></Skeleton>
            <Skeleton active paragraph={{rows: 5}}></Skeleton>
            <Skeleton active paragraph={{rows: 5}}></Skeleton>
          </div>
        }
        { 
          !isSkeletonFlag && 
         <div className='recommend'>
          { recommendInitData.map( (item,index) => (
                <div key={index} className="recommend-item">
                  <img src={this.state.imgs[item.img]} alt=""/>
                  <p>{item.name}</p>
                  <p>{item.descript}</p>
                </div>
          ))  
          }
        </div>
        }
        
      </>
    )
  }
}

export default Hot