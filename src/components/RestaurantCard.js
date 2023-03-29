import { FaStar } from 'react-icons/fa';
import { IMG_CDN_URL } from '../config';

// Restaurant card component: Image, name, cuisine

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <p><i>{cuisines.join(", ")}</i></p>
        <p><b>{area}</b></p>
        <span>
            <h4>{avgRating}&nbsp;<FaStar/></h4>
            <h4>{lastMileTravelString}</h4>
            <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
  };

export default RestaurantCard