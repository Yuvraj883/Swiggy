import { ImSearch } from 'react-icons/im'
import { useEffect, useState } from 'react';
// import useGetRestaurants from "../utils/useGetRestaurants";


const Search = (props) => {
    const {searchText, setSearchText} = props;
    // const { filterSearchResult } = useGetRestaurants();
    // const [searchResult, setSearchResult] = useState(null);
   

    // useEffect(() => {
    //     filterSearchResult(searchText)
    // }, [searchText])


   

    return (

        <>
            <div className='my-8'>
                <div className="flex flex-row justify-start bg-slate-100 w-[70%] mx-auto p-0 rounded-3xl">
                    <input className="w-[95%] p-2  rounded-l-3xl font-semibold text-md bg-slate-100  "
                        type="text" placeholder="search restaurant..."
                        value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button onClick={() => {filterSearchResult(searchText)}} className=' text-[#3D4152] hover:text-orange-500 cursor-pointer'> <ImSearch size={30} /> </button>
                </div>
                {/* {list?.map((result) => {
                            <RestaurantCard restaurant={result?.info} key={result?.info.id} />
                        })} */}
            </div>
            <div>
            {/* {searchResult?.map((result) => {
                            <RestaurantCard restaurant={result?.info} key={result?.info.id} />
                        })}
                {
                    searchResult ? (<div>
                        {list?.map((result) => {
                            <RestaurantCard restaurant={result?.info} key={result?.info.id} />
                        })}

                    </div>) : <div>Restaurants</div>
                } */}
            </div>


        </>
    )
}
export default Search;