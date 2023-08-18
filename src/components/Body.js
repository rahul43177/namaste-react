import {useState} from 'react';
import { restaurantList } from "../constants.js";
import RestaurantCard from "./RestaurantCard.js";

function filterData(searchText , restaurants) {
  const filter = restaurants.filter((element)=>element.info.name.includes(searchText))
  return filter;
}

const Body = () => {


  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText , setSearchText ] = useState("");

  //useState returns an array of 2 elements = [variable name , function to update the variable]
  //we destructure the array to get the variable and the function to update the variable
  return (
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
          const data = filterData(searchText , restaurants)
          setRestaurants(data)
        } }>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((el) => {
          return <RestaurantCard {...el.info} key={el.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
