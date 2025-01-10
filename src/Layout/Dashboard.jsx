import { FaCalendarAlt, FaHome, FaListAlt, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { GoCodeReview } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* Dashboard SideBar */}
            <div className="w-64 min-h-screen bg-orange-200">
                <ul className="menu p-4 space-y-4">
                    <li>   
                        <NavLink to={'/dashboard/userHome'}><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>   
                        <NavLink to={'/dashboard/reservation'}><FaCalendarAlt /> Reservation</NavLink>
                    </li>
                    <li>   
                        <NavLink to={'/dashboard/paymentHistory'}><FaWallet /> Payment History</NavLink>
                    </li>
                    <li>   
                        <NavLink to={'/dashboard/cart'}><FaShoppingCart />  My Cart</NavLink>
                    </li>
                    <li>   
                        <NavLink to={'/dashboard/review'}><GoCodeReview />  Add Review</NavLink>
                    </li>
                    <li>   
                        <NavLink to={'/dashboard/mybookings'}><FaListAlt />  My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>   
                        <NavLink to={'/'}><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>   
                        <NavLink to={'/menu'}><GiHamburgerMenu />Menu</NavLink>
                    </li>
                    <li>   
                        <NavLink to={'/shop'}><FaShoppingBag />Shop</NavLink>
                    </li>
                    <li>   
                        <NavLink to={'/contact'}><IoMdMail />
                        Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;