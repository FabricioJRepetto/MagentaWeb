import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../configuration/constants";
import MagentaLogo from "../../assets/images/magenta-logo.png";

const NavBar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div className="navbar-container">
            <img src={MagentaLogo} className="magenta-logo" onClick={() => navigate(ROUTES.ROOT)} alt="logoMagenta" />
            <div>
                <p
                    onClick={() => navigate(ROUTES.PROCESS)}
                    className={pathname === ROUTES.PROCESS ? "navOptSelected" : "navOptNotSelected"}
                >
                    Our process
                </p>
                <p
                    onClick={() => navigate(ROUTES.ABOUT)}
                    className={pathname === ROUTES.ABOUT ? "navOptSelected" : "navOptNotSelected"}
                >
                    About Us
                </p>
                <p
                    onClick={() => navigate(ROUTES.COMPANIES)}
                    className={pathname === ROUTES.COMPANIES ? "navOptSelected" : "navOptNotSelected"}
                >
                    Magenta for Companies
                </p>
            </div>
            <button onClick={() => navigate(ROUTES.CONTACT)}>Let's Talk</button>
        </div>
    );
};

export default NavBar;
