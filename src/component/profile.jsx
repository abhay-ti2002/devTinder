import React from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Profile = () => {
  const user = useSelector((state) => state?.user?.users);

  return (
    user && (
      <div>
        <EditProfile user={user[0]} />
        <Footer />
      </div>
    )
  );
};

export default Profile;
