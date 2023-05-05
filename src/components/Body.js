import {restaurantList} from '../config'
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
function filterData(searchText, restaurantList){
    const filterData = restaurantList.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))

    return filterData
}


const Body = () => {

    const [restaurants, setRestaurants] = useState([])
    const [searchText, setSearchText] = useState("") 

    useEffect(()=>{
        getRestaurant()
    },[])

    async function getRestaurant(){
        try{
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.621899&lng=77.08783849999999&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        
        console.log(json)
        setRestaurants(json.data?.cards[2].data?.data?.cards)
        } catch(error){
            console.error(error);
        }
    }

    return (restaurants.length == 0)?<Shimmer/> :(
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
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
            })}
        </div>
    </>
    );
  };

  export default Body
