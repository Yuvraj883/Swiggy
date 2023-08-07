import { IMG_CDN_URL } from '../utils/helper'
import {Link } from 'react-router-dom'
const RestaurantCard = (restaurant) => {
    const restro = restaurant?.restaurant?.info;

    // console.log(restro);
    return (<>
    <Link className='h-72 w-[23.5%] mx-2 my-2 cursor-pointer ' to={`restaurant/${restro?.id}`}>
        <div  >

            <img className='h-48 w-full rounded-2xl' src={`${IMG_CDN_URL}${restro?.cloudinaryImageId}`} alt="restaurant" />

            <div className='px-2'>
                <h1 className='line-clamp-1 font-bold text-xl'>{restro?.name} </h1>

                <span className='flex flex-row text-lg font-semibold'>
                    <img className='h-6 mr-1' src={require('../assets/green-star.png')} alt="star-icon" />
                    {restro?.avgRating}
                </span>

                <p className='text-gray-600'>{restro?.cuisines?.join(" ")}</p>

            </div>


        </div>
        </Link>
    </>)
}

export default RestaurantCard;