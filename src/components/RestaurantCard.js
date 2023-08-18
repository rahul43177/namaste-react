import { IMG_CDN_URL } from '../constants.js'
const RestaurantCard = ({ name, cuisines, avgRating ,cloudinaryImageId}) => {
    return (
      <div className="card">
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          alt="logo"
        />
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };
  export default RestaurantCard;  