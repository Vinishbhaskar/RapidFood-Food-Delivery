import React from "react"
import ReactDOM  from "react-dom/client"
import HeaderComponent from "./Header"
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

const MainBody = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.data.id} {...restaurant.data.data} />;
        })}
      </div>
    );
  };

const Footer =()=> {
    return (
     <h2>Footer </h2>
    )
}



const AppLayout =() =>  {
    return (
        <>
            <HeaderComponent/>
            <MainBody />
            <Footer />
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)