import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import DiscoveryPage from "./pages/DiscoveryPage";
import { Register }  from "./components/register";
import { LogIn } from "./components/login";
import CreateEventPage from "./pages/CreateEventPage";
import DetailEventPage from "./pages/DetailEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  { path: "/discovery", element: <DiscoveryPage /> },
  { path: "/create-event", element: <CreateEventPage /> },
  { path: "/signup", element: <Register /> },
  { path: "/signin", element: <LogIn /> },
  { path: "/event/:id", element: <DetailEventPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
