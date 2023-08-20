import {useState ,useEffect} from 'react';
import { restaurantList } from "../constants.js";
import RestaurantCard from "./RestaurantCard.js";
import {Shimmer} from './Shimmer.js';


function filterData(searchText , restaurants) {
  const filter = restaurants.filter((element)=>element?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()  ))
  return filter;
}

const Body = () => {

  const [allRestaurants , setAllRestaurants] = useState([])

  const [ filteredRestaurants , setFilterdRestaurants] = useState([]);

  const [searchText , setSearchText ] = useState("");


  useEffect(()=> {
    //API call
    getRestaurants();
  }, [])

  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.080624890223401&lng=77.54907343536615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterdRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }
  //useState returns an array of 2 elements = [variable name , function to update the variable]
  //we destructure the array to get the variable and the function to update the variable

  if(!allRestaurants) return null;

  if(filteredRestaurants?.length === 0) return <h1>No Restaurants Found</h1>


  return filteredRestaurants.length === 0 ? ( <Shimmer/> ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange = {(e)=> setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={()=>{
          const data = filterData(searchText , allRestaurants)
          setFilterdRestaurants(data)
        } }>Search</button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={ restaurant.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
