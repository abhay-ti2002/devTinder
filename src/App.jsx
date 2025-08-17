import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import LoginPage from "./component/LoginPage";
import Profile from "./component/profile";
import RouteNotFound from "./component/RouteNotFound";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <NavBar /> */}
    </>
  );
}

export default App;
