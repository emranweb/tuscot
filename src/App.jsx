import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/signin",
                element: <SignIn />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
