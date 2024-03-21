import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const NavBarWrapper = () => {
    return (
        <div className="wrapper">
            <NavBar />
            <div className="content-wrapper">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default NavBarWrapper;
