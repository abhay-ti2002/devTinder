import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addConneciton } from "../utils/appSlice/connectionSlice";

const Connections = () => {
  const connection = useSelector((state) => state.Connections);
  const dispatch = useDispatch();

  const showConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });

      // console.log(res.data.data);
      dispatch(addConneciton(res?.data?.data));
    } catch (error) {
      console.log("Connection", error); //eslint-disable-line
    }
  };

  useEffect(() => {
    showConnection();
  }, []);

  if (!connection) {
    return;
  }

  if (connection.length === 0) {
    return (
      <h1 className="text-center pt-72 text-3xl font-bold">
        No 💔 Connection 😟 Found
      </h1>
    );
  }

  return (
    <div className="pt-24">
      <div className="">
        <h1 className="text-center text-3xl font-bold mb-5 mt-9">
          Connections
        </h1>
        <div className="">
          {connection.map((con) => {
            const { name, age, gender, about, photourl, _id } = con;

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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Connections;
