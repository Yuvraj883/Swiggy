import { useContext, useState } from "react";
import restaurantContext from "../context/restaurantContext";

const TopRestaurants = ()=>{
    const restaurants = useContext(restaurantContext);
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
    console.log(listOfRestaurants);


    return (
        <>
        <div>
            <h1>Top restaurants in Delhi</h1>
        
            
        </div>
        
        </>
    )
}
export default TopRestaurants;