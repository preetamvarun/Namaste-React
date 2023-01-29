import React from "react";
import ReactDOM from "react-dom/client";
import Navigator from './Components/Navigator';
import Footer from './Components/Footer';
import Body from "./Components/Body";
import About from "./Components/About";
import {Error} from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const Applayout = () => {
    return (
        <React.Fragment>
            <Navigator/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Applayout/>,
        errorElement : <Error/>
    },
    {
        path : "/about",
        element : <About/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);