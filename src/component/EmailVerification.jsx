import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/appSlice/userSlice";

const EmailVerification = (props) => {
  // console.log(props); //eslint-disable-line
  const [otp, setOtp] = useState(Array(props?.otpLength).fill(""));
  console.log(otp); //eslint-disable-line
  const inputsRef = useRef([]);

  const [second, setSecond] = useState(60);
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input
    if (index < props.otpLength - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      // console.log(newOtp);

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  useEffect(() => {
    if (second == 0) {
      return;
    }
    const timer = setTimeout(() => {
      setSecond((prev) => prev - 1);
    }, 1000);

    // console.log(timer);
    return () => clearTimeout(timer);
  }, [second]);

  const handleVerification = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/verify-otp",
        {
          email: props.email,
          otp: otp.join(""),
        },
        { withCredentials: true },
      );
      console.log(res); //eslint-disable-line
      if (res?.data?.user?.isEmailVerification) {
        dispatch(addUsers(res?.data?.user));
        navigate("/feed");
      }
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0d12] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center text-white">
        <h1 className="text-3xl font-semibold mb-3">
          One-Time Password Verification
        </h1>

        <p className="text-sm text-gray-400 mb-10">
          Enter the OTP sent to your registered email or device to ensure a
          secure and smooth access to your account.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              className="w-14 h-14 text-center rounded-full border border-gray-700
                         bg-gradient-to-b from-[#1d2130] to-[#121520]
                         text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onWheel={(e) => e.target.blur()}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-8 mb-10">
          {second > 0 ? (
            <h1> {second}</h1>
          ) : (
            <button
              onClick={() => setSecond(60)}
              className="text-blue-400 text-sm hover:underline"
            >
              Resend Code
            </button>
          )}
        </div>

        {/* Continue Button */}
        <button
          onClick={handleVerification}
          className="bg-[#6c79d6] hover:bg-[#5f6cd1] transition px-16 py-3 rounded-full text-white text-sm font-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
