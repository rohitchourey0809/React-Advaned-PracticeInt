import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import OtpAuth from "./components/OtpAuth/OtpAuth";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Signupreact from "./components/react-bootstrap-form/Signup";



function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/otpauth" element={<OtpAuth />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupreact" element={<Signupreact />}/>
          
        </Routes>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
