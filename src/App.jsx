import { Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

const App = () => {
  return (
    <div className="w-full ">
      <NavBar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App;
