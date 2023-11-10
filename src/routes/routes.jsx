import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Principal from "../pages/Principal";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Shopping from "../pages/Shopping";


export const router = createBrowserRouter([
{
    path: '/',
    element: <App />
},
{
    path: '/inicio',
    element: <Principal/>
},
{
    path: '/productos',
    element: <Products/>
},
{
    path: '/contactanos',
    element: <Contact/>
},
{
    path: '/carrito',
    element: <Shopping/>
}
])