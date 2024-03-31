import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/signup/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
