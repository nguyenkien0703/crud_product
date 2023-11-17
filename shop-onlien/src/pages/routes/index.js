import LayoutDefault from "../../layout/LayoutDefault";
import Home from "../Home";
import Cart from "../Cart";


export const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "cart",
                element: <Cart/>

            }
        ]
    }
]