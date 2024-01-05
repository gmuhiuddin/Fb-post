import React, { useState } from 'react';

const ShowMoreLessText = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const displayText = showFullText ? text : text.slice(0, maxLength);

  return (
    <div>
      <p>{displayText}</p>
      {text.length > maxLength && (
        <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? 'Show less' : 'Show more'}
        </span>
      )}
    </div>
  );
  
};

export default ShowMoreLessText;