import { Route, Routes } from "react-router-dom";
import { FastParity, FollowUs, ForgotPass, Forward, Home, Profile, Transaction, Signin, Signup, GameHistory, Recharge, Parity, Withdraw, Transfer, Bank, AddBank, RechargeHistory, Refer, Welcome } from "./screens";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/fast-parity" element={<FastParity />} />
        <Route path="/parity" element={<Parity />} />
        <Route path="/forward" element={<Forward />} />
        <Route path="/follow-us" element={<FollowUs />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/game-history" element={<GameHistory />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/recharge-history" element={<RechargeHistory />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/add-bank" element={<AddBank />} />
        <Route path="/refer" element={<Refer />} />
      </Routes>
    </>
  );
}

export default App;
