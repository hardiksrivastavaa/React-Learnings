import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Main from "./components/Main";
import Restaurant from "./components/Restaurant";
const Order = lazy(() => import("./components/Order"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/restaurants/lucknow" />,
            },
            {
                path: "/restaurants/:city",
                element: <Main />,
            },
            {
                path: "/restaurants/:city/:restaurant",
                element: <Restaurant />,
            },
            {
                path: "/order",
                element: (
                    <Suspense fallback={<h1>Loading........</h1>}>
                        <Order />
                    </Suspense>
                ),
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
