import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shares/Footer/Footer";
import Navbar from "../Pages/Shares/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="bottom-left"></Toaster>
        </div>
    );
};

export default MainLayout;