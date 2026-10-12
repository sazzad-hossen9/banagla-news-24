import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
interface headlines {
  id: string;
  title: string;
}
const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headLins: headlines[] = data.data;

  return (
    <div className="bg-red-700 text-white ">
      <div className="flex container mx-auto">
        <div className="py-1 px-5 bg-red-500">সর্বশেষ</div>
        <MarqueeText
          direction="right"
          duration={20}
          pauseOnHover={true}
          className=" py-1"
        >
          {headLins.map((h) => (
            <span key={h.id}>
              <span>{h.title}</span>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
        <div className="py-1 px-5 bg-red-500 w-20"></div>
      </div>
    </div>
  );
};

export default Marquee;
