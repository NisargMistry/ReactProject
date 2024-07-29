import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  // console.log(videos);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,37,140,1) 25%, rgba(121,114,9,1) 84%, rgba(0,212,255,1) 100%)",
            height: "300px",
            zIndex: "10",
          }}
          ></div>
          <ChannelCard channelDetail={channelDetail} marginTop={"-110px"}/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:"100px"}}}/>
          <Videos videos={videos} channelVideo={true} />
        
      </Box>
    </Box>
  );
};

export default ChannelDetail;
