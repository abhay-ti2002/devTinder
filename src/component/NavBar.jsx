import axios from "axios";
import {} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BASE_URL } from "../utils/constant";
import { addStatus, removeUser } from "../utils/appSlice/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { flag } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const image = useSelector((state) => state.user.users[0]);
  // console.log(image.photourl);

  const handleLogOut = async () => {
    try {
      const res = await axios.post(BASE_URL + "/logout");
      dispatch(removeUser());

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {flag ? (
        <div className="flex justify-center items-center min-h-screen">
          <img
            className="w-16 h-16 animate-pulse"
            src="../images/flame-gradient-rgb-rball.png"
            alt="logo"
          />
        </div>
      ) : (
        <div className="navbar bg-base-200 shadow-sm flex justify-between pl-10 pr-10">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-10 h-10 animate-pulse"
              src="../images/flame-gradient-rgb-rball.png"
              alt="logo"
            />

            <a className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text ">
              DevDating
            </a>
          </div>
          <div className="flex gap-2 hover:border-2 hover:p-0.5 hover: hover:rounded-full">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={image?.photourl}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogOut}>LogOut</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
