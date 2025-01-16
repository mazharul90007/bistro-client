import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
        localStorage.removeItem('access-token');
    }

    const navOptions = <>
        <NavLink to={'/'}><li>HOME</li></NavLink>
        <NavLink to={'/'}><li>CONTACT US</li></NavLink>
        <NavLink to={'/dashboard/cart'}><li>DASHBOARD</li></NavLink>
        <NavLink to={'/menu'}><li>OUR MENU</li></NavLink>
        <NavLink to={'/order/salad'}><li>ORDER FOOD</li></NavLink>
        {
            //user ? 'true' : 'false'
            // user ? condition ? 'double true' : 'one true' : 'false'
        }
        {
            user && isAdmin && <NavLink to={'/dashboard/adminHome'}><li>ADMIN HOME</li></NavLink>
        }
        {
            user && !isAdmin && <NavLink to={'/dashboard/userHome'}><li>USER HOME</li></NavLink>
        }

        <NavLink to={'/dashboard/cart'}>
            <li>
                <button className="btn btn-sm">
                    <FaShoppingCart />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </li>
        </NavLink>

        {
            user ? <>
                {/* <span className="border border-amber-600 py-1 px-2 rounded-tl-xl bg-amber-50 rounded-br-xl">{user?.displayName}</span> */}
                <button onClick={handleLogOut} className="btn btn-ghost uppercase">LogOut</button>
            </>
                :
                <>
                    <NavLink to={'/login'}><li>LOGIN</li></NavLink>
                </>
        }
    </>
    return (
        <>
            <div className="navbar fixed z-50 bg-opacity-30 text-black bg-base-100 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center gap-3 uppercase">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;