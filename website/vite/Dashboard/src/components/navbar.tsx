import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './css/navbar.css';
import { TbMenu, TbX } from 'react-icons/tb';
import { useState } from 'react';
import Links from './object/links/index';
import PhoneButton from './object/buttons/index';

function Navbar() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <div className='Navbar'>
      <div className="logo">
      
      </div>
      <Links />
      <PhoneButton />
    </div>
  )
}

export default Navbar