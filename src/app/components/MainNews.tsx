import Image from "next/image";
import React from "react";

const MainNews = ({ news }) => {
  const [firstNews, ...otherNews] = news;
  console.log("main new ", firstNews);
  return (
    <div className="flex gap-2 flex-wrap md:flex-nowrap">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            width={600}
            height={600}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-red-500 mx-3-">{firstNews.category}</h2>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>
      <div className="grid gap-3 ">
        {otherNews.slice(0, 4).map((on) => (
          <div key={on.id} className="border-2 card rounded-2xl p-2">
            <h2 className="text-red-500 mx-3-">{on.category}</h2>
            <div className="text-2xl">{on.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
