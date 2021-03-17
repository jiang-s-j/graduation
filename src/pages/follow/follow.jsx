import React,{Component} from 'react'
import './follow.scss'
import { Skeleton } from 'antd'
import {getRecommend} from '@/api/index'
import {connect} from 'react-redux'

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
class Follow extends Component{
  constructor(props){
    super(props)
    this.state = {
      recommendInitData: [],
      isSkeletonFlag: true, // 骨架屏展示
      imgs:[recom1,recom2,recom3,recom4,recom5,recom6,recom7], // 图片数组

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
            isSkeletonFlag:false,
          })
        }
      }
    )
    
  }

  render() {
    const {
      isSkeletonFlag,
      recommendInitData
    } = this.state
    return(
      <>
        {  isSkeletonFlag && 
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

export default Follow