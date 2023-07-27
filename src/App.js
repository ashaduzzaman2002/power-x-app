import { Route, Routes } from "react-router-dom";
import { FastParity, FollowUs, ForgotPass, Forward, Home, Profile, Transaction, Signin, Signup, GameHistory, Recharge } from "./screens";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/fast-parity" element={<FastParity />} />
        <Route path="/forward" element={<Forward />} />
        <Route path="/follow-us" element={<FollowUs />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/game-history" element={<GameHistory />} />
        <Route path="/recharge" element={<Recharge />} />

      </Routes>
    </>
  );
}

export default App;
