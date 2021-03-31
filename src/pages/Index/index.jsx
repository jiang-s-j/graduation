import React,{Component} from 'react'
import './index.scss'
import {Button, Card} from 'antd'
import Header from '@/components/header/header.jsx'
import { Route, Switch,withRouter} from 'react-router-dom'

import { connect } from 'react-redux'
import * as ACTCreator from '@/store/actionCreates'

// 推荐、关注、热榜
import Recommend from '@/pages/recommend/recommend.jsx'
import Follow from '@/pages/follow/follow.jsx'
import Hot from '@/pages/hot/hot.jsx'

// 引入图片
import arrow from '@/asset/imgs/arrow.png'

@connect(
  state =>({
    index: state.index
  }),
 dispatch => ({
   testDispatch: () => {dispatch(ACTCreator.testActionCreate())}
 })
)
class Index extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  componentDidMount() {
    console.log(this.props.index);
    this.props.testDispatch()
  }
  // 跳转创作中心
  creativeCenter = () => {
    this.props.history.push('/personal/profile')
  }

  render(){
    return (
      <>
        <div className='index' >
            <Header></Header>
            <div className='contain'>
              <div className="contain-left">
                <div className="contain-left-header">
                  <div onClick={() => {this.props.history.push('/index/recommend')}}>推荐</div>
                  <div onClick={() => {this.props.history.push('/index/follow')}}>关注</div>
                  <div onClick={() => {this.props.history.push('/index/hot')}}>热榜</div>
                </div>
                <div className='contain-left-contain'>
                  <Switch>
                  <Route path={'/index/recommend'} component={Recommend}></Route>
                  <Route path={'/index/follow'} component={Follow}></Route>
                  <Route path={'/index/hot'} component={Hot}></Route>
                </Switch>
                </div>
                
              </div>
              <div className="contain-right">
                <Card
                  title='创作中心'
                  type='inner'
                  extra={<img style={{width:'25px',height:'25px'}} src={arrow} ></img>}
                  style={{width: '18vw'}}
                  onClick={this.creativeCenter}
                >
                  让创作改变世界，改变你我
                </Card>
              </div>
            </div>
        </div>
      </>
    )
  }

}

export default  withRouter(Index)