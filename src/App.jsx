import { useEffect, useState } from "react";

function App() {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [flag]);

  return (
    <>
      {flag ? (
        <div className="flex justify-center items-center min-h-screen">
          <img
            className="w-16 h-16 animate-pulse"
            src="../images/flame-gradient-rgb-rball.png"
            alt=""
          />
        </div>
      ) : (
        <div className="navbar bg-base-200 shadow-sm flex justify-between pl-10 pr-10">
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-10 h-10 animate-pulse"
              src="../images/flame-gradient-rgb-rball.png"
              alt=""
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
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
