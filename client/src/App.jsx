import MyCarousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import { Register } from "./components/register";
import { LogIn } from "./components/login";

function App() {
  return (
    <>
      <Navbar />
      <MyCarousel />
      <LogIn />
      <Register />
    </>
  );
}

export default App;
