import React, { useEffect, useState } from "react";
import Link from "next/link";
import  moment from 'moment'



import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidgets = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  console.log(relatedPosts);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="font-bold text-2xl mb-8 text-slate-800 font-sans pb-4  border-b">
        {slug ? "Related Posts " : "Recenet Posts"}
      </h3>
      {relatedPosts.map((post) => ( 
        <div key={post.title} className="flex items-center w-full mb-4 ">
          <div className="w-12 h-12 flex-none">
            <img
              src={post.featuredImage.url}
              className="align-middle rounded-lg w-full h-full"
              
              alt={post.title}
            />
          </div>
          <div className="flex-grow ml-3">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
            <Link key={post.title} href={`/post/${post.slug}`} className="text-md">{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidgets;
