import NewsCard from "../../components/newsCard";
const CategorySlug = async ({ params }) => {
  const { categorySlug } = await params;
  console.log(categorySlug);
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categorySlug}`,
  );
  const data = await res.json();
  const categoryNews = data.data;
  console.log("categorySlug", data);
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-3xl text-red-600 border-b-2 border-red-700 pb-3 ">
        {data.title}
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategorySlug;
