import App from "../App";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import CheckOut from "../Pages/CheckOut";
import Payment from "../Pages/Payment";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import RegisterUser from "../Pages/RegisterUser";
import LoginUser from "../Pages/LoginUser";
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

//Deployment

let myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <CheckOut /> },
      { path: "/payment", element: <Payment /> },
      { path: "/reguser", element: <RegisterUser /> },
      {
        path: "/loginuser",
        element: <LoginUser />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default myRouter;
