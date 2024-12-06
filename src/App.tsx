import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Router>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
