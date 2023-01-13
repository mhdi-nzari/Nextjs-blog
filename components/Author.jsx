import React from "react";
import Image from 'next/image'

const Author = ({ author }) => {
  return (
    <div className=" text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className=" flex justify-center gap-10">
        <img
          src="https://static.roocket.ir/images/avatar/2022/12/11/NBpnWP7XeYwbCONVbHhv5Bp8oqtzxnVazf3aUZb2.png"
          className="align-middle rounded-full w-[100px] h-[100px]"
          alt={author.name}
      
        />
       <div className="flex flex-col">
       <h3 className="text-white mt-4 my-4 text-xl font-bold">
          {author.name}
        </h3>
        <p className="text-white text-lg">{author.bio}</p>
       </div>
      </div>
    </div>
  );
};

export default Author;
