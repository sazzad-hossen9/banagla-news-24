import Link from "next/link";

interface Nav {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}
export default async function NavLinks() {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const nav: Nav[] = await data.data;
  const filteredData = nav.filter((n) => n.scrapable);

  return (
    <div className="flex gap-6 justify-center">
      <Link href={"/"}>হোম</Link>
      {filteredData.map((n, i) => (
        <Link href={`category/${n.slug}`} key={i}>
          {n.title}
        </Link>
      ))}
    </div>
  );
}
