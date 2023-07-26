import { ImSearch } from 'react-icons/im'
import { useEffect, useState } from 'react';
import useGetRestaurants from "../utils/useGetRestaurants";
import RestaurantCard from './RestaurantCard';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const { getRestaurants } = useGetRestaurants();
    const [searchResult, setSearchResult] = useState(null);
    const [restaurants, setRestaurants] = useState(null);
    // setSearchResult(restaurants);
    useEffect(() => {
        getRestaurants().then((data) => {
            setSearchResult(data);
        }).catch((error) => {
            console.log("Error: " + error);
        });
    },[])

    const handleSearchRestaurant = ()=>{
        filterSearchResult();
    }
    console.log(searchResult);

    const filterSearchResult = ()=>{
     const temp = searchResult?.filter((restaurant)=>{
            restaurant?.info?.name !== searchText;
            console.log(searchText);

        });
        console.log(temp);
        setRestaurants(temp);
        
    }

    // const find = searchResult.find((restaurant)=>{
    //     searchText === restaurant?.info?.name;
    // })
    // // console.log(find);

    return (

        <>
            <div className='my-8'>
                <div className="flex flex-row justify-start bg-slate-100 w-[70%] mx-auto p-0 rounded-3xl">
                    <input className="w-[95%] p-2  rounded-l-3xl font-semibold text-md bg-slate-100  "
                        type="text" placeholder="search restaurant..."
                        value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button onClick={handleSearchRestaurant} className=' text-[#3D4152] hover:text-orange-500 cursor-pointer'> <ImSearch size={30} /> </button>
                </div>
            </div>

          {
            searchResult? (<div>
{searchResult.map((result)=>{
    <RestaurantCard restaurant={result?.info} key={result?.info.id}/>
})}

            </div>): <div>Restaurants</div>
          }

        </>
    )
}
export default Search;