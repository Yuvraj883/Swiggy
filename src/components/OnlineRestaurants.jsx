import { useContext, useState } from "react";
import restaurantContext from "../context/restaurantContext";

const OnlineRestaurants = ()=>{
    const restaurants = useContext(restaurantContext);
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
    console.log(listOfRestaurants);


    return (
        <>
        <div>
            <h1>Restaurants with online food delivery in Delhi</h1>
            
        
            
        </div>
        
        </>
    )
}
export default OnlineRestaurants;