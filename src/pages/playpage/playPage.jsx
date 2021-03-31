import React from 'react'
import ReactPlayer from 'react-player'
import vieo from '@/asset/videos/1.flv'
const PlayPage = (props) => {
  return (
    <>
      <ReactPlayer 
        url={vieo}
        controls={true}  
      ></ReactPlayer>
    </>
  )
}

export default PlayPage