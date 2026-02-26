import { useEffect } from "react";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/appSlice/requestsSlice";

const Requests = () => {
  const connectionRequests = useSelector((state) => state?.requests);

  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    // console.log(_id);
    try {

      //eslint-disable-next-line 
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  };

  const fetchRequets = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
      // console.log(res.data.data);
      dispatch(addRequests(res?.data?.data));
    } catch (error) {
      console.log(error); //eslint-disable-line
    }
  };

  useEffect(() => {
    fetchRequets();
  }, []);

  if (!connectionRequests) {
    return;
  }

  if (connectionRequests.length === 0) {
    return (
      <h1 className="text-center pt-72 text-3xl font-bold">
        No 💔 Request 😟 Found
      </h1>
    );
  }

  return (
    <div className="pt-24">
      <div className="text-3xl font-bold text-center mb-5">
        {" "}
        Connections Requests
      </div>
      {connectionRequests.map((conn) => {
        const { name, age, gender, about, photourl, _id } = conn.fromUserId;

        return (
          <div className="flex justify-center" key={_id}>
            <div className="bg-gray-900 flex mb-3 p-6 box-content rounded-lg shadow-md shadow-gray-700">
              <div className="flex justify-center mr-3">
                <img
                  className="w-28 h-28 rounded-full shadow-md shadow-gray-500"
                  src={photourl}
                  alt="img"
                />
              </div>
              <ul className="text-wrap break-all w-72">
                <li>{name}</li>
                <li>{age}</li>
                <li>{gender}</li>
                <li>{about}</li>
              </ul>
              <div className="flex justify-center min-h-full items-center gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => reviewRequest("rejected", conn._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-accent"
                  onClick={() => reviewRequest("accepted", conn._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
