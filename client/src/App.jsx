import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import DiscoveryPage from "./pages/DiscoveryPage";
import { Register }  from "./components/register";
import { LogIn } from "./components/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  { path: "/discovery", element: <DiscoveryPage /> },
  { path: "/signup", element: <Register /> },
  { path: "/signin", element: <LogIn /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
