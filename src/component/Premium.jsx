import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

const Premium = () => {
  const handleBuy = async (type) => {
    try {
      const order = await axios.post(
        BASE_URL + "/payment/create",
        {
          memberShipType: type,
        },
        { withCredentials: true }
      );

      console.log(order);
      //razorpay dialog page

      const { amount, orderId, notes, currency } = order.data.savePayment;
      const { keyId } = order.data;

      const options = {
        key: keyId, // Replace with your Razorpay key_id
        amount, // Amount is in currency subunits.
        currency,
        name: "Dev Tinder",
        description: "Test Transaction",
        order_id: orderId, // This is the order_id created in the backend
        prefill: {
          name: notes.userName,
          email: notes.email,
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new Razorpay(options); //
      rzp.open();
    } catch (error) {
      console.log("payment", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen pt-28">
      <div className="bg-base-200 w-80 h-96 mr-5 p-5">
        <div className="text-xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
          Dev Tinder
        </div>
        <div className="text-center">
          <span className="text-xl mr-2 font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ">
            Plan
          </span>
          <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ">
            RECOMMENDED
          </span>
        </div>
        <p className="text-sm mt-2">
          Free transactions of ₹30,000 for growing businesses.
        </p>
        <div className="mt-4">
          <ul className="text-sm mb-2 ">
            <li className="mb-2">1.85% Transaction fee over free limit.</li>
            <li className="mb-2">4 Complimentary product benefits.</li>
            <li className="mt-8">Joining Bonus: ₹10K worth of vouchers</li>
          </ul>
        </div>
        <div className="mt-10">
          <div className="text-lg font-bold text- mb-2">₹ 499/month</div>
          <button
            onClick={() => handleBuy("gold")}
            className="text-base w-full h-9 rounded-sm  text-center font-semibold  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400"
          >
            BUY GOLD
          </button>
        </div>
      </div>
      <div className="bg-base-200 w-80 h-96 mr-5 p-5">
        <div className="text-xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
          Dev Tinder
        </div>
        <div className="text-center">
          <span className="text-xl mr-2 font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ">
            Plan
          </span>
          <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ">
            RECOMMENDED
          </span>
        </div>
        <p className="text-sm mt-2">
          Free transactions of ₹30,000 for growing businesses.
        </p>
        <div className="mt-4">
          <ul className="text-sm mb-2 ">
            <li className="mb-2">1.85% Transaction fee over free limit.</li>
            <li className="mb-2">4 Complimentary product benefits.</li>
            <li className="mt-8">Joining Bonus: ₹10K worth of vouchers</li>
          </ul>
        </div>
        <div className="mt-10">
          <div className="text-lg font-bold text- mb-2">₹ 499/month</div>
          <button className="text-base w-full h-9 rounded-sm  text-center font-semibold  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
            BUY SILVER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
