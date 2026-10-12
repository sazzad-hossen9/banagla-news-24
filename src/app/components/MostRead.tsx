import React from "react";

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostRead = data.data;
  console.log(" sdfghjkl;", mostRead);
  return (
    <div>
      <div className="border-2 border-gray-300 bg-base-100 p-4">
        <h1 className=" font-bold text-2xl">সর্বাধিক পঠিত</h1>
        <div className=" py-5">
          {mostRead.map((n, i) => (
            <div key={n.id} className="py-5 text-2xl flex ">
              <h2 className="text-red-500 font-bold text-3xl mr-5">{n.rank}</h2>
              <h2>{n.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostRead;
