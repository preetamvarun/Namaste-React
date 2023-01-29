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
import RestaurantMenu from "./Components/RestaurantMenu";

const Applayout = () => {
    return (
        <React.Fragment>
            <Navigator/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    )
}


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Applayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/about",
                element : <About/>
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
            }
        ]
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);