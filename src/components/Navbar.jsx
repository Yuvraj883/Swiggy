import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="flex flex-row py-2 px-[10%] m-0 justify-between items-center shadow-md w-screen">
                <div className="flex flex-row items-center">
                <span>
                    <Link to="/">
                    <img src={require('./swiggy-1.svg')} className="h-16 px-2 " alt="logo"/>
                    </Link>
                </span>
                <h1 className="text-3xl font-bold">Swiggy</h1>
                </div>
               <ul className='flex flex-row justify-around text-[#3D4152] font-semibold text-lg'>
                <li className='px-4  hover:text-orange-500 cursor-pointer '><Link to="/search"> Search</Link> </li>
                <li className='px-4  hover:text-orange-500 cursor-pointer '>Offers</li>
                <li className='px-4  hover:text-orange-500 cursor-pointer'>Help</li>
                <li className='px-4  hover:text-orange-500 cursor-pointer'>Sign in</li>
                <li className='px-4  hover:text-orange-500 cursor-pointer'>Cart</li>
               </ul>
            </nav></>
    )
}
export default Navbar;