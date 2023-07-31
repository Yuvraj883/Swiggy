import { useContext, useState } from "react";
import restaurantContext from "../context/restaurantContext";
import RestaurantCard from "./RestaurantCard";

const OnlineRestaurants = ()=>{
    const restaurants = useContext(restaurantContext);
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(listOfRestaurants);


    return (
        <>
        <div >
            <h1 className="font-bold text-2xl mt-2 mb-4">Restaurants with online food delivery in Delhi</h1>
            <div className="flex flex-row flex-wrap">
            {
                listOfRestaurants?.map((restaurant)=>{
                   return <RestaurantCard restaurant={restaurant}/>
                
                })
            }

            </div>
            
            
        
            
        </div>
        
        </>
    )
}
export default OnlineRestaurants;