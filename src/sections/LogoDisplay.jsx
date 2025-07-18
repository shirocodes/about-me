import React from "react";

const MyLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-purple-900 bg-clip-text text-transparent">
        W
      </span>
      <h1 className="text-1xl font-[Pacifico] font-semibold relative">
        <span className="inline-block relative z-10">Muchiri</span>
        {/* Underline that echoes the W */}
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-900 rounded-full"></span>
      </h1>
    </div>
  );
}

export default MyLogo