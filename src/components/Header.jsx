import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";

function Header() {
  const [toggle, setToggle] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex  gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderList key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderList key={item.name} name={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderList name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderList
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      
      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            <img
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              alt={user.name}
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <span className="hidden md:block text-white">
              Hello {user.name}!
            </span>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="ml-3 px-3 py-1 bg-red-600 rounded text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <img
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" // your boy img URL here
              alt="My Boy"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <button
              onClick={() => loginWithRedirect()}
              className="px-3 py-1 bg-blue-600 rounded text-white"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
