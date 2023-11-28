import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Competences from './pages/Competences.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/competences",
    element: <Competences />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
