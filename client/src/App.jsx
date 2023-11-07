import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import DiscoveryPage from "./pages/DiscoveryPage";
import { Register } from "./components/register";
import { LogIn } from "./components/login";
import CreateEventPage from "./pages/CreateEventPage";
import DetailEventPage from "./pages/DetailEventPage";
import { ProfileCard } from "./components/profile";
import { useEffect } from "react";
import { setData } from "./redux/userSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import Required from "./components/required";
import { Verification } from "./components/verifikasi";
import Profile from "./pages/ProfilePage";
import PaymentPage from "./pages/payment";
import AddToCart from "./pages/jumlahTiket";

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
  { path: "/profile", element: <Profile /> },

  {
    path: "/payment",
    element: <PaymentPage />,
  },
  { path: "/tiket", element: <AddToCart /> },
]);

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const keepLogin = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/users/keep-login`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("ini rsponese", response);
      dispatch(setData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
