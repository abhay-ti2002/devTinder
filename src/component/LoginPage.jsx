import React, {useState } from "react";
import axios from "axios";
import { appName } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/appSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(password);

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
      // console.log(res.status);
      navigate("/feed");
    } catch (error) {
      // navigate("/login");
      console.log("LoginPage", error); //eslint-disable-line
    }
  };
  // console.log(password.length);

  const handleShowPassword = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen gap-16 ">
      <div className="mobile:visible invisible">
        <img src="images/landing-2x.png" alt="" />
      </div>
      <div>
        <div>
          <h1 className="text-center pr-16 font-semibold text-3xl mobile:text-5xl">
            {appName}
          </h1>
        </div>

        <div className="flex flex-col  mt-10 pr-14  gap-6 mobile:mt-28 box-content">
          <input
            className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md"
            type="text"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <div className="flex flex-row">
            <input
              className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md box-border"
              type={type}
              value={password}
              name=""
              id=""
              maxLength={20}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <span>
              {password && (
                <img
                  onClick={() => handleShowPassword(type)}
                  className="w-5 h-5 left-8 -translate-x-7 translate-y-3"
                  src={
                    type === "password"
                      ? "/images/hide.png"
                      : "/images/show.png"
                  }
                  alt="eye"
                />
              )}
            </span>
          </div>

          <button className="btn btn-primary rounded-md" onClick={handleLogin}>
            Log in
          </button>
        </div>
        <div>
          <div className="inline-flex items-center justify-center w-full box-border -ml-6">
            <hr className="w-36 -h-1 my-8 border-2 border-slate-600 rounded-sm mr-2" />
            <span>OR</span>
            <hr className="w-36 -h-1 my-8 border-2 border-slate-600 rounded-sm ml-2" />
          </div>
          <div className="flex justify-center -ml-14">
            <p className="">
              Don't have an account?{" "}
              <Link className="text-blue-600 font-medium" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
