import React from "react";
import { useSelector } from "react-redux";

const UserinfoSection = () => {
  const { Registerd_User_info } = useSelector((state) => state.userauthstate);

  return (
    <div className=" p-6 flex justify-center flex-col max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-black text-sm font-semibold mb-1">
          Name:
        </label>
        <p className="text-black">{Registerd_User_info.fullname}</p>
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-semibold mb-1">
          Email:
        </label>
        <p className="text-black">{Registerd_User_info.email}</p>
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-semibold mb-1">
          Contact Number:
        </label>
        <p className="text-black">{Registerd_User_info.contactNumber}</p>
      </div>
    </div>
  );
};

export default UserinfoSection;
