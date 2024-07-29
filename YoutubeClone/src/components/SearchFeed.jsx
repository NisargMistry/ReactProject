import { React, useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar,Videos} from "./";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const {searchTerm}=useParams();

  const [videos, setVideos] = useState([])
  
  

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);
  
  return (
    <Box p={2} sx={{overflowY:"auto"}} >
       <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
          Results for 
        <span style={{color:"#F31503",paddingLeft:"10px"}}> {searchTerm+" "}</span>
        are:
       </Typography>
       
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} channelVideo={true} video={false} />}
      </Box>
      </Box>
  );
}

export default SearchFeed
