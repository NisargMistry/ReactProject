import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard,ChannelCard} from "./"
const Videos = ({videos,direction,channelVideo}) => {
  if(!videos?.length) return "Loading..."
  return (
    
    <div  >
      
      <Stack direction={direction || "row"} flexWrap="wrap"  gap={2} >
        {videos.map((item,index)=>{
          return <Box key={index}>
            {item.id.videoId && <VideoCard video={item} channelVideo={channelVideo}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        })}
      </Stack>
    </div>
  )
}

export default Videos
