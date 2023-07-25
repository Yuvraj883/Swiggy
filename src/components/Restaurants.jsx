import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
import useGetRestaurants from "../utils/useGetRestaurants";

const Restaurants= ()=>{
//   const [restaurants, setRestaurants] = useState(null);
//   setRestaurants(()=>{useGetRestaurants()});
const restaurants = useGetRestaurants();
   
    if(restaurants === null){
        return <div>Loading...</div>
    }

    return  (
        <>
        <h1 className="text-2xl font-extrabold  px-[10%] m-2">Restaurants with online food delivery in Delhi</h1>
        <div className="flex flex-row flex-wrap  px-[10%] m-0">
        {
            restaurants?.map((restaurant)=>(
                <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant?.info}/>
                 
            )
            
            )

        }
        </div>
        </>
    )
}
export default Restaurants ;
