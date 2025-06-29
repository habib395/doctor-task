import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Layout from './Layout.jsx';
import Register from './components/Login/Register.jsx';
import Faq from './components/Faq.jsx';
import Bmi from './components/Bmi.jsx';
import Dashboard from './components/Dashboard.jsx';
import DashboardLayout from './components/DashboardLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // your main layout
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "faq",
        element: <Faq></Faq>
      },
      {
        path: "bmi",
        element: <Bmi></Bmi>
      },
      {
        path: "",
        element: <App /> 
      }
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
