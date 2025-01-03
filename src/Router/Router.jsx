import { createBrowserRouter } from "react-router";
import App from "../App";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import CheckOut from "../Pages/CheckOut";
import Payment from "../Pages/Payment";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default myRouter;
