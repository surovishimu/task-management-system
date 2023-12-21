import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/image/tasks.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navOptions = <div className="text-lg font-semibold flex flex-col lg:flex-row gap-3 lg:gap-8">
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-600 font-bold " : ""
        } to={'/'}>Home</NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-600 font-bold " : ""
        } to={'mytask'}>My Task</NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-600 font-bold " : ""
        } to={'features'}>Features</NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-600 font-bold " : ""
        } to={'forTeam'}>For Team</NavLink>
        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-sky-600 font-bold " : ""
        } to={'pricing'}>Pricing</NavLink>




    </div>
    return (
        <div className="navbar bg-base-100 shadow-lg p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="flex items-center gap-1 text-2xl font-bold text-sky-600"><img className="h-12" src={logo} alt="" />TaskCanvas</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
          
            {
                user?.email ? <div className="navbar-end "  >
                    <div className=" dropdown dropdown-end tooltip tooltip-left " data-tip={user.displayName}>
                        <label tabIndex={0} className="btn btn-ghost  btn-circle avatar">
                            <div className=" w-10 rounded-full  " >
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-800 rounded-box w-60">
                            <li className="">
                                <button className="btn btn-sm text-white btn-ghost normal-case hover:text-white hover:bg-purple-500">{user.displayName}</button>
                            </li>
                            <li>
                                <button className="btn btn-sm text-white normal-case hover:bg-purple-500  btn-ghost hover:text-white"
                                    onClick={logOut}
                                >Logout</button>

                            </li>
                        </ul>
                    </div>
                </div> : <div className="navbar-end">

                    <Link to={"/login"}>
                        <button className="btn text-white text-lg hover:bg-blue-500  bg-blue-500 outline-none border-none normal-case text-md">Login</button></Link>



                </div>
            }
        </div>
    );
};

export default Navbar;