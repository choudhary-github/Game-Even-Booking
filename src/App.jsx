import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import GameContextProvider from "./Context/gameContext";
import Checkout from "./components/Checkout/Checkout";
import { Container } from "@mui/material";
import Congratulation from "./components/Congratulation/congratulations";

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="congratulation" element={<Congratulation />} />
            
          </Routes>
        </Container>
      </GameContextProvider>
    </div>
  );
}

export default App;
