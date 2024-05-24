"use client";
import { button } from "@nextui-org/react";
import UserIcon from "../icons/UserIcon";
import { useState } from "react";
export default function ButtonNav() {
  const [userOn, setUserOn] = useState(false);

  const handleUser = () => {
    setUserOn(!userOn);
  };
  return (
    <div className="flex items-center">
      {userOn ? (
        <button className="mr-12" onClick={handleUser}>
          <UserIcon />
        </button>
      ) : (
        <button
          onClick={handleUser}
          className="bg-neoBrandTertiary rounded-sm h-6 text-white px-4 text-sm mr-12"
        >
          GET STARTED
        </button>
      )}
    </div>
  );
}
