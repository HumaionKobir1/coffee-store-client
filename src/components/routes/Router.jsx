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
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/coffee')
        }
      ]
    },
    {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
    }
  ]);



export default router;