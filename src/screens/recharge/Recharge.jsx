import React from "react";
import { BottomNav, Header } from "../../components";
import { useLocation } from "react-router-dom";

const Recharge = () => {
  const location = useLocation();

  return (
    <div className="container">
      <BottomNav />
      <Header title={"Recharge"} path={location?.state?.from || "/"} />
    </div>
  );
};

export default Recharge;
