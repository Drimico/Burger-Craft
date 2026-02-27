import Cart from "./pages/Cart";
import Craft from "./pages/Craft";
import Home from "./pages/Home";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/craft",
    element: <Craft />,
  },
];

export default router;
