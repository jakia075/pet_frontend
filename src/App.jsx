import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
