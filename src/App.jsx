import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RootLayout from "./pages/layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import PasswordReset from "./pages/PasswordReset";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            // {
            //     path: "signup",
            //     element: <SignUp />,
            // },
        ],
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/passwordreset",
        element: <PasswordReset />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
