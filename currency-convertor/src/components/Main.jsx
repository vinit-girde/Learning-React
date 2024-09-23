import React from "react";
import InputBox from "./common/InputBox";

const Main = () => {
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <InputBox label="From" />
          <button className=" mt-2 mb-2 outline-none bg-slate-600 text-white rounded-lg p-2 cursor-pointer">
            Swap
          </button>
          <InputBox label="To" />
        </div>
      </div>
    </div>
  );
};

export default Main;
