import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }) => {
  return (
    <>
      <Link href={`/news/${news.id}`}>
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
      </Link>
    </>
  );
};

export default NewsCard;
