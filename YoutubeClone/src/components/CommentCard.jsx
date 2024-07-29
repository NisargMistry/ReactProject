import React from 'react'
import "./CommentCard.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const extractTextFromLink = (text) => {
    const withoutLinkAndBreaks = text.replace(/<a[^>]*>.*?<\/a>|<br\s*\/?>/g, '');
    return withoutLinkAndBreaks;
  }

const CommentCard = ({comment}) => {
    const {
        authorDisplayName,
        authorProfileImageUrl,
        textDisplay,
        likeCount,
      } = comment?.snippet?.topLevelComment?.snippet;
      const displayText = extractTextFromLink(textDisplay);
    
  return (
    <div className="comment-card" >
      <img src={authorProfileImageUrl} alt={authorDisplayName} />
      <div className="comment-content">
        <h4>{authorDisplayName}</h4>
        <p>{displayText} </p>
        <div className="comment-footer">
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                gap:"10px"
            }}>

          <div><ThumbUpIcon/></div>
          <div>Likes: {likeCount}</div>
          <button>Reply</button>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default CommentCard
