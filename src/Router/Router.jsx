import { createBrowserRouter } from "react-router";
import App from "../App";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import CheckOut from "../Pages/CheckOut";
import Payment from "../Pages/Payment";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import RegisterUser from "../Pages/RegisterUser";
import LoginUser from "../Pages/LoginUser";

//Deployment

let myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <CheckOut /> },
      { path: "/payment", element: <Payment /> },
      { path: "/reguser", element: <RegisterUser /> },
      { path: "/loginuser", element: <LoginUser /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default myRouter;
