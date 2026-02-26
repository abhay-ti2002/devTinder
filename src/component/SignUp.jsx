import React, { useState } from "react";
import { appName, BASE_URL } from "../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addUsers } from "../utils/appSlice/userSlice";
import EmailVerification from "./EmailVerification";

const SignUp = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [otpFlag, setOtpFlag] = useState(true);

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesignUp = async () => {
    try {
      // eslint-disable-next-line
      const res = await axios.post(
        BASE_URL + "/singup",
        {
          name,
          userName,
          email,
          password,
        },
        { withCredentials: true },
      );
      setOtpFlag(false);
      navigate("/emailVerification");
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  };

  const handleShowPassword = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div>
      {otpFlag ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="pr-16 font-semibold text-3xl mobile:text-5xl">
            {appName}
          </h1>
          <div className="flex flex-col  mt-10 pr-14  gap-6 mobile:mt-28 box-content">
            <input
              type="text"
              className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md"
              value={name}
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
            />
            <input
              className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md"
              type="text"
              value={userName}
              placeholder="User Name"
              onChange={(event) => setUserName(event.target.value)}
            />
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

            <button
              className="btn btn-primary rounded-md"
              onClick={handlesignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <EmailVerification otpLength={6} email={email}/>
      )}
    </div>
  );
};

export default SignUp;
