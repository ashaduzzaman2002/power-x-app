import { Route, Routes } from "react-router-dom";
import { ForgotPass, Home, Profile, Signin, Signup } from "./screens";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </>
  );
}

export default App;
