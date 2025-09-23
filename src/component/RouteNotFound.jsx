import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RouteNotFound = () => {
  const { users } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (users.length > 0) {
      navigate("/feed");
    }
  }, []);
  return <div>Not Found !</div>;
};

export default RouteNotFound;
