import React,{Component} from 'react'
import './index.scss'
import {Button} from 'antd'
import Header from '@/components/header/header.jsx'
import { Route, Switch,withRouter} from 'react-router-dom'

import { connect } from 'react-redux'
import * as ACTCreator from '@/store/actionCreates'

// 推荐、关注、热榜
import Recommend from '@/pages/recommend/recommend.jsx'
import Follow from '@/pages/follow/follow.jsx'
import Hot from '@/pages/hot/hot.jsx'

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
                
              </div>
            </div>
        </div>
      </>
    )
  }

}

export default  withRouter(Index)