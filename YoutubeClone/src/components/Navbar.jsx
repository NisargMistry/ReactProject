import React, { useState } from "react";
import { Stack } from "@mui/material";
import {logo} from '../utils/constants'
import { Link } from "react-router-dom";
import {SearchBar} from "./index"

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    
     <Stack 
     direction="row"
     alignItems="center"
     p={2}
     
     sx={{position:'sticky',top:0,justifyContent:'space-between',zIndex:100,backgroundColor:"black"}}
     >
      <Link to="/">
      <img src={logo} alt="" height={45}/>
      </Link>
      <SearchBar/>

     </Stack>
     
  
  );
};

export default Navbar;
