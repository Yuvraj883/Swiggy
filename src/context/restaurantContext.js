import { createContext } from "react";
// import useGetRestaurants from "../utils/useGetRestaurants";
// const {fetchRestaurants} = useGetRestaurants;
const restaurantContext = createContext({
    restaurant: null
}); 

export default restaurantContext; 