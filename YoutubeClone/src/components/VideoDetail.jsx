import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack,useMediaQuery } from "@mui/material";
// import useMediaQuery from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


import { Videos ,Comments} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const [commentDetails, setCommentDetails] = useState([])
  const [showComments, setShowComments] = useState(true)
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const { id } = useParams();
  useEffect(() => {
    setShowComments(!isSmallScreen);
    const fetchDetails = async () => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
        setVideoDetail(data.items[0])
      );

      fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setVideos(data.items));

      fetchFromAPI(
        `commentThreads?part=snippet&videoId=${id}&maxResults=100`
      ).then((data) => setCommentDetails(data.items));
     
    
    };
    fetchDetails();
  }, [id]);

  if (!videoDetail?.snippet) return "Loading....";
  

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;


  return (
    <Box minHeight="90vh" >
      <Stack direction={{ xs: "column", md: "row" }} >
        <Box  sx={{width:{md:"70%",sm:"100%", height: {sm:"60vh",md:"calc(100vh - 64px)"},overflowY:"auto",position: {md:"sticky"},top:{md:"100px"}}} }>
          <Box sx={{ width: "100%" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls height="100px  " />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            
          </Box>
          <Box>
          <Stack className="commentSection" style={{
              padding: {md:"20px"},
              paddingTop:"0px",
              maxWidth: "auto",
              margin: "0 auto",
              backgroundColor: "black",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
              color: "#fff",
            }}>
               <Comments commentDetails={commentDetails} setShowComments={setShowComments} showComments={showComments}/>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 0 }} justifyContent="center" alignItems="center" style={{overflowY:"auto"}}>
          <Videos videos={videos} direction="column" channelVideo={false}/>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
