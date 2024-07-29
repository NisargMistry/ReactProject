import { React, useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar,Videos} from "./";
import {fetchFromAPI} from "../utils/fetchFromAPI";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} >
      <Box
        sx={{
          height: { sx: "auto", md: "89.4vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          backgroundColor: "black",
          position:"sticky",
          top:{sx:"20%",md:"10.5%"}
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5 ,color:"white"}}>
          copyright not mine
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto"}}>
       <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
          {selectedCategory} 
        <span style={{color:"#F31503",paddingLeft:"10px"}}>videos</span>
       </Typography>
        <Videos videos={videos} channelVideo={true} video={true}/>
      </Box>
    </Stack>
  );
};

export default Feed;
