import { IMG_URL } from '../utils/helper'
const RestaurantCard = (restaurant) => {
    const restro = restaurant?.restaurant?.info;

    console.log(restro);
    return (<>
        <div className='h-72 w-[23.5%] mx-2 my-2 cursor-pointer ' >

            <img className='h-48 w-full rounded-2xl' src={`${IMG_URL}${restro?.cloudinaryImageId}`} alt="restaurant" />

            <div className='px-2'>
                <h1 className='line-clamp-1 font-bold text-xl'>{restro?.name} </h1>

                <span className='flex flex-row text-lg font-semibold'>
                    <img className='h-6 mr-1' src={require('../assets/green-star.png')} alt="star-icon" />
                    {restro?.avgRating}
                </span>

                <p className='text-gray-600'>{restro?.cuisines?.join(" ")}</p>

            </div>


        </div>
    </>)
}

export default RestaurantCard;