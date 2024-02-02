import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {!loading &&
              searchResults.map((item, index) => {
                if (item.type !== "video") return false;
                return <VideoCard key={index} video={item?.video} />;
              })}
          </div>
        </div>
      </div>
      {loading && (
        <div className="flex items-center justify-center h-full w-full text-xl text-red-500  absolute z-50 backdrop-blur">
          <div className="flex flex-col items-center justify-between gap-10">
            <div className="flex flex-col gap-4 items-center justify-center bg-gray-900 shadow-lg animate-bounce hover:animate-none shadow-orange-300 leading-8 w-96 h-96 p-11 rounded-full">
              <p className="text-center">
                There seems to be a server error. As we utilize the free YouTube
                RapidAPI, it's possible that the API request quota has been
                reached. Please be patient and consider trying again later.
              </p>

              <p className="text-2xl font-medium tracking-widest text-yellow-200">
                or
              </p>
            </div>
            <a href="https://piyush-kumar.vercel.app/" target="_blank">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Explore my Portfolio
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Feed;
