import React from 'react'
import { Result, Button } from 'antd'
import {useHistory} from 'react-router-dom'

const NotFound = function (props) {

  let history = useHistory()

  const goHome = () => {
    history.push('/index/recommend')
  }

  return (
    <>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={<Button type='primary' onClick={goHome}>返回主页</Button>}
      >
      </Result>
    </>
  )
}

export default NotFound