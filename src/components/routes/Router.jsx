import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../layout/Main';
import Home from '../pages/Home';
import AddCoffee from '../pages/AddCoffee';
import UpdateCoffee from '../pages/UpdateCoffee';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
    {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: '/updateCoffee',
        element: <UpdateCoffee></UpdateCoffee>
    }
  ]);



export default router;