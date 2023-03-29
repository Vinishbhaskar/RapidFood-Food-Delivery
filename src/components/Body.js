import {restaurantList} from '../config'
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
function filterData(searchText, restaurantList){
    const filterData = restaurantList.filter((restaurant) => restaurant.data.data.name.includes(searchText))

    return filterData
}


const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantList)
    const [searchText, setSearchText] = useState("") 

    return (
    <>
        <div className='Search-box'>
            <input type="text" className='search-box' placeholder='Search' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button 
            onClick={() =>{
                // need to filter the data
                const data = filterData(searchText, restaurantList)
                setRestaurants(data)
                }}
            >Search</button>
        </div>

        <div className="restaurant-list">
            {restaurants.map((restaurant) => {
            return <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>;
            })}
        </div>
    </>
    );
  };

  export default Body
