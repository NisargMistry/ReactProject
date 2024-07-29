
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from "./components"
import { HashRouter } from "react-router-dom";

function App() {
  

  return (
    <>
      <BrowserRouter>
      
        <Box sx={{backgroundColor:"black"}}>
          <Navbar/>
            <Routes>
              <Route path="/" exact element={<Feed/>}></Route>
              <Route path="/video/:id" exact element={<VideoDetail/>}></Route>
              <Route path="/channel/:id" exact element={<ChannelDetail/>}></Route>
              <Route path="/search/:searchTerm" exact element={<SearchFeed/>}></Route>
            </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
