import Image from "next/image";
import NavLinks from "./NavLinks";

const Headers = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  console.log(date);
  return (
    <>
      <div className="container mx-auto flex relative my-5 items-center">
        <div className="flex gap-2 items-center justify-center w-full">
          <Image
            className="w-10 h-10"
            src={"/logo.webp"}
            alt="Logo"
            width={100}
            height={100}
          />

          <div>
            <h2>Bangla news 24</h2>
            <p>{date}</p>
          </div>
        </div>
        <div className="absolute right-4 top-0">
          <button className="btn ">sign in </button>
          <button className="btn  bg-red-600 text-white">sign in </button>
        </div>
      </div>{" "}
      <NavLinks />
    </>
  );
};

export default Headers;
