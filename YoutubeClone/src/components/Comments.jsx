import React from "react";
import { CommentCard } from "./";
import { Button, Stack, Box, Typography } from "@mui/material";

const Comments = ({ commentDetails, showComments, setShowComments }) => {
  if (!commentDetails?.length) return "Loading...";

  return (
    <Box className="comments" sx={{ p: 2, backgroundColor: "black", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)", color: "#fff" }}>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <Button
          onClick={() => setShowComments(true)}
          sx={{ color: "#fff", borderColor: "#fff", border: '1px solid', "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" } }}
          variant="outlined"
        >
          Comments
        </Button>
        <Button
          onClick={() => setShowComments(false)}
          sx={{ color: "#fff", borderColor: "#fff", border: '1px solid', "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" } }}
          variant="outlined"
        >
          X
        </Button>
      </Stack>

      {showComments && (
        <Box>
          {commentDetails.map((item) => (
            <CommentCard key={item.id} comment={item} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Comments;
