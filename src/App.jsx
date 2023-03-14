import reactLogo from "./assets/react.svg";
import Home, { action as rootAction, loader as rootLoader } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import ContactDetails, {
  loader as contactLoader,
} from "./pages/ContactDetails";
import EditContact, { action as editAction } from "./pages/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/contacts/:contactId",
        element: <ContactDetails />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
