import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="px-[10%] flex justify-between items-center p-2 shadow-md ">
                <Link to="/">
                    <div className="flex flex-row items-center">

                        <img src={require("../assets/swiggy-logo.png")}
                            className="h-16 w-auto"
                            alt="Swiggy logo" />
                        <h1 className="text-orange-400 font-bold text-4xl ">Swiggy</h1>
                    </div>
                </Link>

                <ul className="text-lg font-semibold flex text-[#3D4152]">

                    <Link> <li className="hover:text-orange-400 p-2 cursor-pointer">Search</li></Link>
                    <Link> <li className="hover:text-orange-400 p-2 cursor-pointer">Offers</li></Link>
                    <Link>  <li className="hover:text-orange-400 p-2 cursor-pointer">Help</li></Link>
                    <Link> <li className="hover:text-orange-400 p-2 cursor-pointer">Sign in</li></Link>
                    <Link> <li className="hover:text-orange-400 p-2 cursor-pointer">Cart</li></Link>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;