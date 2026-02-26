import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import LoginPage from "./component/LoginPage";
import Profile from "./component/profile";
import RouteNotFound from "./component/RouteNotFound";
import appStore from "../src/utils/reduxStore/appStore";
import { Provider } from "react-redux";
import Feed from "./component/Feed";
import Connections from "./component/Connection";
import Requests from "./component/Requests";
import Premium from "./component/Premium";
import SignUp from "./component/SignUp";
import EmailVerification from "./component/EmailVerification";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/feed" element={<Feed />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/emailVerification"
                element={<EmailVerification />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/premium" element={<Premium />} />
            </Route>
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* <NavBar /> */}
    </>
  );
}

export default App;
