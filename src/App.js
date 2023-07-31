import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RestaurantContext from './context/restaurantContext';
// import useGetRestaurants from './utils/useGetRestaurants';
import TopRestaurants from './components/TopRestaurants';

function App() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {

    fetchRestaurants();

  }, []);

  useEffect(()=>{
    console.log(restaurants);

  },[restaurants]);


  const fetchRestaurants = async () => {
    const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(url);
    response.json().then((data) => {
      console.log(data);
      setRestaurants(data);
    })

  }

  if(!restaurants){
   return <div>...Loading</div>
  }


  return (
    <>
      <RestaurantContext.Provider value={restaurants}>

        <div className="px-[10%]">
          <Navbar />
          <TopRestaurants />
        </div>
      </RestaurantContext.Provider>

    </>
  );
}

export default App;
