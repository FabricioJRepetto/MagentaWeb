import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/pages/AboutUs";
import Manifesto from "./components/pages/Process";
import Landing from "./components/pages/Landing";
import Contact from "./components/pages/Contact";
import Companies from "./components/pages/Companies";
import { ROUTES } from "./configuration/constants";
import NavBarWrapper from "./components/shared/NavBarWrapper";

const routing = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <NavBarWrapper />,
        children: [
            {
                path: ROUTES.ROOT,
                element: <Landing />,
            },
            {
                path: ROUTES.COMPANIES,
                element: <Companies />,
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutUs />,
            },
            {
                path: ROUTES.PROCESS,
                element: <Manifesto />,
            },
            {
                path: ROUTES.CONTACT,
                element: <Contact />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={routing} />;
}

export default App;
