import { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useGetRestaurants from "../utils/useGetRestaurants";

const Restaurants = () => {
    const { restaurants, getRestaurants } = useGetRestaurants();

    useEffect(() => {
        getRestaurants();
    }, []);

    if (restaurants === null) {
        return <div><Shimmer /></div>
    }

    return (
        <>
            <h1 className="text-2xl font-extrabold  px-[10%] m-2">Restaurants with online food delivery in Delhi</h1>
            <div className="flex flex-row flex-wrap  px-[10%] m-0">
                {
                    restaurants?.map((restaurant) => (
                        <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant?.info} />

                    )

                    )

                }
            </div>
        </>
    )
}
export default Restaurants;
