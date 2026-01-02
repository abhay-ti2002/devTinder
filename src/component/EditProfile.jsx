import React from "react";
import axios from "axios";
import { useState } from "react";
import UserCards from "./UserCards";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/appSlice/userSlice";
import Toast from "./Toast";

const EditProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [about, setAbout] = useState(user.about);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photourl, setPhoto] = useState(user?.photourl);
  const [toast, setTosted] = useState(false);
  const dispatch = useDispatch();
  // console.log(photourl);
  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          name,
          age,
          gender,
          about,
          photourl,
        },
        { withCredentials: true }
      );
      // console.log("ff", res);
      dispatch(addUsers(res?.data));

      setTosted(true);
      setTimeout(() => {
        setTosted(false);
      }, 2000);
    } catch (error) {
      
      console.log(error); //eslint-disable-line
    }
  };

  return (
    <div>
      {toast && <Toast />}
      <div className="flex flex-row justify-center items-center min-h-screen gap-16 pt-24 pb-12">
        <div className=" p-7 box-border bg-black rounded-md shadow-md shadow-slate-700">
          <div className="flex flex-col gap-5">
            <div>
              <p>Name</p>
              <input
                className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md mt-2"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div>
              <p>Age</p>
              <input
                className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md mt-2"
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
              />
            </div>

            <div>
              <p>Gender</p>
              <input
                className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md mt-2"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value.toLowerCase())}
                placeholder="Gender"
              />
            </div>

            <div>
              <p>Photo URL</p>
              <input
                className="h-11 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md mt-2"
                type="text"
                value={photourl}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="photo Url"
              />
            </div>

            <div>
              <p>About</p>
              <textarea
                className="h-20 w-72 p-3 bg-transparent outline outline-slate-700 rounded-md mt-2"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                autoFocus
                placeholder="Write Something about you...."
              ></textarea>
            </div>

            <button
              onClick={saveProfile}
              className="btn btn-primary rounded-md"
            >
              Save
            </button>
          </div>
        </div>

        <div className="card bg-base-300 w-80 shadow-md  shadow-gray-700">
          <figure>
            <img src={photourl} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <h3>Age: {age}</h3>
            <h3>Gender: {gender}</h3>
            <p>{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
