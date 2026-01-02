import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/appSlice/feedSlice";
import UserCards from "./UserCards";

const Feed = () => {
  const users = useSelector((state) => state?.usersFeed?.feed);
  const dispatch = useDispatch();

  const fetchFeed = async () => {
    if (!users) {
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res?.data?.data));

      // console.log(res.data.data);
    } catch (error) {
    
      console.log(error); //eslint-disable-line
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  if (!users) {
    return;
  }

  if (users.length <= 0) {
    return (
      <h1 className="pt-48 text-center font-bold text-3xl">No User Found 😟</h1>
    );
  }
  return (
    users && (
      <div className="flex justify-center items-center min-h-screen">
        <UserCards user={users[0]} />
      </div>
    )
  );
};

export default Feed;
