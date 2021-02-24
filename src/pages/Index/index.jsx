import React,{Component} from 'react'
import './index.scss'
import {Button} from 'antd'

class Index extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    return (
      <>
        <div>
          首页
          <Button type='primary'>an</Button>
        </div>
      </>
    )
  }

}

export default Index