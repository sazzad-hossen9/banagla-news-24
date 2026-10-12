import Image from "next/image";
import Marquee from "./components/marquee";
import MainNews from "./components/MainNews";
import NewsCard from "./components/newsCard";
import MostRead from "./components/MostRead";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSection = sections.slice(1);
  console.log("section ", otherSection);
  return (
    <div>
      <Marquee />
      <div className="grid grid-cols-3 gap-5 mt-5 container mx-auto">
        <div className="col-span-2">
          <MainNews news={mainNews} />
          <div className="grid gap-5 mt-5">
            {otherSection.map((os) => (
              <div
                className="border-b-2 border-red-400 pb-2"
                key={os.curationId}
              >
                <h2 className="font-bold my-3 text-xl">{os.title}</h2>
                <div className="grid grid-cols-2 gap-3">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 ">
          <MostRead />
        </div>
      </div>
    </div>
  );
}
