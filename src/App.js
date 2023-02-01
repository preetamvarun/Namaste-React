import React from "react";
import ReactDOM from "react-dom/client";
import Navigator from './Components/Navigator';
import Footer from './Components/Footer';
import Body from "./Components/Body";
import About from "./Components/About";
import {Error} from "./Components/Error";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import RestaurantMenu from "./Components/RestaurantMenu";
import Instamart from "./Components/Instamart";

const Applayout = () => {
    return (
        <React.Fragment>
            <Navigator/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}

/*
    Applayout is the parent component for so and so child components. So, the parent component 
    here which is app layout component should have an outlet component which is imported from
    react-router-dom. In the same way, the about component which is the parent component for the
    profile component need to have an outlet so, that the profile component can render accordingly.

    Dont' specity /profile as path because react assumes /profile. But we want /about/profile.
    So, just mention the name i.e., profile
*/

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Applayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/about",
                element : <About/>,
                children : [
                    {
                        path : "profile",
                        element : <Profile/>
                    }
                ]
            },
            {
                path : "contact",
                element : <Contact/>
            },
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/cart",
                element : <Cart/>
            },
            {
                path : "/restaurant/:id",
                element : <RestaurantMenu/>
            },
            {
                path : "/instamart",
                element : <Instamart/>
            }
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);