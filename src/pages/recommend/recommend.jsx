import React,{Component} from 'react'
import './recommend.scss'
import { connect } from 'react-redux'

import * as ACTCreator  from '@/store/actionCreates.js'

@connect(
  (state) => ({}),
  dispatch => ({
    initRecommend:() =>  {dispatch({type: 'initRecommendSaga',load:''})}
  })
)


class Recommend extends Component{
  constructor(props){
    super(props)
    this.state= {

    }
  }

  componentDidMount () {
    this.props.initRecommend()
  }

  render(){
    return (
      <>
        <div className='recommend'>
          <div className="recommend-item">
                <img src="" alt=""/>
                <p>视频创作者名字</p>
                <p>视频名字</p>
                
            </div>
        </div>
        
      </>
    )
  }
}

export default Recommend 