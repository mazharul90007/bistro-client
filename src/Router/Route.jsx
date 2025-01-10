import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Error from "../Pages/Error/Error";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <Error></Error>,
          children: [
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path: '/menu',
              element: <Menu></Menu>
            },
            {
              path: '/order/:category',
              element: <Order></Order>
            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/signup',
              element: <SignUp></SignUp>
            },
            {
              path: '/secret',
              element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
          ]
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: 'cart',
              element: <Cart></Cart>
            }
          ]
        }
    ])



export default router;