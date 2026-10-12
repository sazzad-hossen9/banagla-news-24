import Image from "next/image";
import React from "react";

const NewsCard = ({ news }) => {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <Image src={news.imageUrl} width={600} height={600} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-red-500 mx-3-">{news.category}</h2>
            <h2 className="card-title">{news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
