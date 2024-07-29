import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import categories from "../utils/constants";

const Sidebar = ({selectedCategory,setSelectedCategory}) => {

  return (
    <div>
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          height: { sx: "auto", md: "85vh" },
          flexDirection: { sx: "row", md: "column" },
          
        }}
      >
        
        {categories.map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.name}
              onClick={()=>{setSelectedCategory(item.name)}}
              className="category-btn"
              style={{
                color: "white",
                background: item.name === selectedCategory ? "red" : "",
              }}
            >
              <span style={{color:item.name===selectedCategory?"white":"red",marginRight:"15px"}}>
                <IconComponent />
              </span>
              <span style={{opacity:item.name===selectedCategory?1:0.8}}>{item.name}</span>
            </button>
          );
        })}
      </Stack>
    </div>
  );
};

export default Sidebar;
