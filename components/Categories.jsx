import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12 overflow-hidden">
      <h3 className="font-bold text-2xl mb-8 text-slate-800 font-sans pb-4  border-b">
        Categories
      </h3>

      <div className="flex gap-3 flex-wrap">
      {categories.map((category) => (
      
      <Link key={category.slug} href={`/category/${category.slug}`}>
       <span className="cursor-pointer  pb-3 mb-3 bg-slate-100 w-fit  px-5 py-2 flex justify-center items-center text-center  rounded-full text-sm lg:text-md">
         {category.name}
       </span>
     </Link>
   
   ))}
      </div>
    </div>
  );
};

export default Categories;
