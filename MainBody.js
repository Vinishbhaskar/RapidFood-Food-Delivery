import restaurantList from "./restaurantList";


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
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <p><i>{cuisines.join(", ")}</i></p>
        <p><b>{area}</b></p>
        <span>
            <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
            <h4>{lastMileTravelString}</h4>
            <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
  };
  
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

export const MainBody = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.data.id} {...restaurant.data.data} />;
        })}
      </div>
    );
  };
