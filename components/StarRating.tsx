import {Star} from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating = ({rating, maxRating=5}:StarRatingProps) => {
  return(
    <div className='flex items-center'>
      {Array.from({length: maxRating}, (_, index)=> {
        if (index + 1 <= Math.floor(rating)) {
          return (<Star key={index} className='w-6 h-6 fill-yellow-500 stroke-yellow-500'/>);
        } else if (index < rating) {
          return (
            <div key={index} className="relative w-6 h-6">
              <Star className="absolute w-full h-full fill-none stroke-gray-300" />
              <Star
                className="absolute w-full h-full fill-yellow-500 stroke-yellow-500"
                style={{
                  clipPath: `polygon(0 0, ${((rating - index) * 100).toFixed(0)}% 0, ${((rating - index) * 100).toFixed(0)}% 100%, 0 100%)`,
                }}
              />
            </div>
          )
        } else {
          return (
            <Star key={index} className="w-6 h-6 fill-none stroke-gray-300" />
          );
        }
      })}
    </div>
  )
}

export default StarRating;
