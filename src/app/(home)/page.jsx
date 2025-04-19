import Link from "next/link";

const HomePage = async () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#1B1D24] text-[#1B1D24]">
        <div className="w-1/2 h-1/2 bg-[#5D9D0B] rounded-2xl shadow-2xl flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">
            Welcome To My Quiz App
          </h1>
          <p className="text-lg mt-5">
            In this quiz app, you can practice your skills in JavaScript, HTML,
            CSS, and React.
          </p>
          <p className="text-lg mt-2">To Start Reading The Docs, Click The Button Below.</p>

          <Link
            href={"/quiz"}
            className="bg-[#1B1D24] text-[#72EB3A] font-bold py-2 px-4 rounded-full mt-7 hover:scale-105 transition-all duration-300"
          >
            Documentation
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
