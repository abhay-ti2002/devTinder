import React, {useState } from "react";
import axios from "axios";
import { appName } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/appSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(password);
  
  
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUsers(res.data));
      // dispatch(addStatus(res.status));
      console.log(res.status);
      navigate("/feed");
    } catch (error) {
      // navigate("/login");
      console.log("LoginPage", error);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen gap-16">
      <div className="mobile:visible invisible">
        <img src="images/landing-2x.png" alt="" />
      </div>
      <div>
        <div>
          <h1 className="text-center pr-16 font-semibold text-3xl mobile:text-5xl">
            {appName}
          </h1>
        </div>

        <div className="flex flex-col  mt-10 pr-14  gap-6 mobile:mt-28">
          <input
            className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md"
            type="text"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md"
            type="password"
            value={password}
            name=""
            id=""
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="btn btn-primary rounded-md" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
