import React from 'react'
import { Comment, Avatar } from 'antd';

const WarpComment = (props) => (
  <Comment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>{props.name}</a>}
    avatar={
      <Avatar
        src={props.avatar ? props.avatar : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
        alt="Han Solo"
      />
    }
    content={
      <p>
       {props.content}
      </p>
    }
  >
    {props.children}
  </Comment>
);

export default WarpComment