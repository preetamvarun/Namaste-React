import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navigator from './Components/Navigator';
import Footer from './Components/Footer';
import Body from './Components/Body';
import About from './Components/About';
import { Error } from './Components/Error';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Cart from './Components/Cart';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import RestaurantMenu from './Components/RestaurantMenu';
import UserContext from './Utils/UserContext';
import { Provider } from 'react-redux';
import store from './Utils/store';

/* 
Since this Instamart component is huge in size.. we would like to import it dynamically.
Because our parcel bundles all the things into one single file. For example if the user is 
visiting cart in the website there is no need to bundle Instamart code. So, what we do is we 
bundle things logically. Instead of bundling all the files in the one big file we bundle some
piece of chunks together.
*/

/*
    Lazy Loading 
    Code splitting
    Dynamic Bundling 
    Chunking
    On Demand Loading 
    Dynamic Import
*/

// import Instamart from "./Components/Instamart";

// so the way we do this is

/* The import below is a promise. So, when we write <Suspense></Suspense> above some component
react knows that particular component will be lazy loaded. So, the Suspense waits for the promise
to resolve and once that promise resolves It lazy loads that component */

const Instamart = lazy(() => import('./Components/Instamart'));

// On Demand Loading. We usually load the code when the visits that particular component.

/* The import key word we used above is not the import that we do on top of the file */

const Applayout = () => {
  const [user, setUser] = useState({
    name: 'preet',
    email: 'preet@gmail.com',
  });
  return (
    <React.Fragment>
      {/* providing store to the entire app */}
      <Provider store={store}>
        <Navigator />
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </React.Fragment>
  );
};

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
    path: '/',
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          /* Since Instamart takes some time to load this component into the web page
                    Suspense makes sure to load this Instamart Component with out any errors. 
                    There is prop to suspense knows as fallback where you can assign a component
                    to the fallback prop. So, while the main component lazy loads the component 
                    in the fallback prop loads.*/
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
