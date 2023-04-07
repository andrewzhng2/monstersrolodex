import { useState } from 'react';

import './star-rating.styles.css';

const StarRating = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className='star-rating-container'>
      {
        [...Array(5)].map((_, idx) => {
          const ratingValue = idx + 1;

          return (
            <p 
              className={`star ${ratingValue <= (hoverRating || currentRating) ? 'active' : ''}`}
              key={idx}
              onClick={() => setCurrentRating(ratingValue)}
              onMouseEnter={() => setHoverRating(ratingValue)}
              onMouseLeave={() => setHoverRating(0)}
            >
              {ratingValue}
            </p>
            )
        })
      }
    </div>
  )
}

export default StarRating;