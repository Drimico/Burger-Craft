import Cart from "./Pages/Cart"
import Craft from "./Pages/Craft"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"

const router = [
    {
        path: "/",
        element: <Home/>,
        showNavbar: true
    },
    {
        path: "/Cart",
        element: <Cart/>,
        showNavbar: true
    },
    {
        path: "/craft",
        element: <Craft/>,
        showNavbar: true
    },
    {
        path: "*",
        element: <NotFound/>,
        showNavbar: true
    }
]

export default router