import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLogo } from "../utils/appSlice/logoSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { addUsers } from "../utils/appSlice/userSlice";

const Body = () => {
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch(addLogo(flag));
  const { users} = useSelector((state) => state.user);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUsers(res.data));
      // dispatch(addStatus(res.status));
    } catch (error) {
      // console.log(error);
      //  when user is unautharized
      if (error.status == 401) {
        navigate("/login");
      }
      // console.log("kk", error);
    }
  };

  useEffect(() => {
    if (users.length === 0) {
      // console.log("bye");
      fetchUser();
    }
  }, []);

  return (
    <div>
      {flag ? (
        <div className="flex justify-center items-center min-h-screen ">
          <img
            className="w-16 h-16 animate-pulse"
            src="../images/flame-gradient-rgb-rball.png"
            alt="logo"
          />
        </div>
      ) : (
        <main>
          <Outlet />
        </main>
      )}
    </div>
  );
};

export default Body;
