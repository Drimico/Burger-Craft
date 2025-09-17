import Cart from "./pages/Cart";
import Craft from "./pages/Craft";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

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
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;
