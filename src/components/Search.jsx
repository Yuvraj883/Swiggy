import { useState, useContext, useEffect } from 'react';
import {BsSearch} from 'react-icons/bs'
import restaurantContext from '../context/restaurantContext';
import RestaurantCard from './RestaurantCard';
const Search = ()=>{
    const restaurants = useContext(restaurantContext);
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(()=>{
        setListOfRestaurants(restaurants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    },[restaurants])

    const handleSearch = () => {
        console.log("Search Text: ", searchText);
        const showRestaurants = listOfRestaurants?.filter((restaurant) => {
          console.log("Restaurant Name: ", restaurant?.info?.name);
          if (restaurant?.info?.name?.toLowerCase() === searchText?.toLowerCase()) {
            console.log("Match Found!");
            return restaurant;
          }
          return false;
        });
        setFilteredRestaurants(showRestaurants);
      
        console.log("showRestaurants: ", filteredRestaurants);
      };
      
      

    return (<>
    <div className='flex flex-row justify-center'>

    
    <div className="my-8 w-[60%] flex justify-between items-center pr-2 rounded-full border-2 border-black ">
        <input
        value={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value);
        }}
        className=' p-3 mr-2 w-[95%] focus:border-orange-500 rounded-l-full' type="text" placeholder="Search restaurants"/>
        <BsSearch onClick={handleSearch} className='cursor-pointer text-[#3D4152] hover:text-orange-500' size={30}/>
    </div>

    </div>
    <div className='flex justify-start'>
        {
            filteredRestaurants?.map((restaurant)=>{
                return <RestaurantCard restaurant={restaurant}/>
            })

        }
    </div>
    </>)
}
export default Search;