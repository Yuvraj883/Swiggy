import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import RestaurantContext from './context/restaurantContext';
import useGetRestaurants from './utils/useGetRestaurants';
import { Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';

function App() {
  const { fetchRestaurants } = useGetRestaurants();
  const [restaurants, setRestaurants] = useState(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurantsData = await fetchRestaurants();
        setRestaurants(restaurantsData);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);


  // if (isLoading) {
  //   return <Shimmer />;
  // }

  return (
    <>
      <Navbar />
      {!isLoading && (
        <RestaurantContext.Provider value={restaurants}>
          <div className="px-[10%]">
            <Outlet />
          </div>
        </RestaurantContext.Provider>
      )}
      {
        isLoading &&(
          <Shimmer/>
        )
      }
    </>
  );
}

export default App;
