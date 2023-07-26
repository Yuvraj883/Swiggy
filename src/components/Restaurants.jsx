import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
import useGetRestaurants from "../utils/useGetRestaurants";

const Restaurants= ()=>{
  const [restaurants, setRestaurants] = useState(null);
//   setRestaurants(()=>{useGetRestaurants()});

const {getRestaurants} = useGetRestaurants();

useEffect(()=>{
    console.log("Use effect called ")
    getRestaurants().then((data)=>{
        console.log(data); 
        setRestaurants(data);
    }).catch((error)=>{
        console.log("Error: ", error);
    });
    
    // setRestaurants(r);

},[]);
   
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
