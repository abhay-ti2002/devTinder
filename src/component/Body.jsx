import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Body = () => {
  const [flag, setFlag] = useState(true);
  console.log(flag);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <nav>
        <Navbar flag={flag} />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer flag={flag} />
      </footer>
    </div>
  );
};

export default Body;
