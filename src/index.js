import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav/nav';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import CartProductsLoader from './components/CartProductsLoader/CartProductsLoader';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav></Nav>,
    children:
    [{
        path: '/',
        element: <App />
      },
    {
      path: '/orders',
      element: <Orders></Orders>,
      // loader: ()=> fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
      loader: CartProductsLoader
    },
    {
      path: '/inventory',
      element: <Inventory></Inventory>
    }
    
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
