import React from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/appSlice/feedSlice";

const UserCards = (props) => {
  const { _id, name, age, gender, about, photourl } = props.user ?? {};
  const dispatch = useDispatch();
  // console.log(name);
  const handleSendRequests = async (status, userId) => {
    try {
      const res = await axios.post( //eslint-disable-line
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeFeed(userId));
      // console.log(res);
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  };
  return (
    <div className="card bg-base-300 w-80 shadow-md  shadow-gray-700">
      <figure>
        <img src={photourl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3>Age: {age}</h3>
        <h3>Gender: {gender}</h3>
        <p>{about}</p>
        <div className="flex justify-center">
          <button
            className="btn btn-primary mr-5 shadow-md shadow-slate-500"
            onClick={() => handleSendRequests("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary shadow-md shadow-slate-500"
            onClick={() => handleSendRequests("interested", _id)}
          >
            Connection
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
