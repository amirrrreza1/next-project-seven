"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const getLevel = (score) => {
  if (score == 0)
    return { level: "Idiot", salary: "You Really Want Salary ???" };
  if (score <= 12) return { level: "Beginner", salary: "22.6M - 27.2M" };
  if (score <= 24) return { level: "Junior", salary: "31.8M - 43.9M" };
  if (score <= 36) return { level: "Mid", salary: "51.7M - 70.2M" };
  if (score <= 48) return { level: "Senior", salary: "81.4M - 108.8M" };
  return { level: "Expert", salary: "124.5M - 166.6M" };
};

const ResultPage = () => {
  const [score, setScore] = useState(0);
  const [levelInfo, setLevelInfo] = useState({ level: "", salary: "" });

  useEffect(() => {
    const storedScore = parseInt(localStorage.getItem("score") || "0", 10);
    setScore(storedScore);
    setLevelInfo(getLevel(storedScore));
  }, []);

  const handleReset = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("answers");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#202020] text-white p-5">
      <div className="bg-[#333] p-10 rounded-2xl shadow-xl text-center space-y-5">
        <h1 className="text-3xl font-bold">Quiz Result</h1>
        <p className="text-xl">
          Your Score: <span className="font-bold">{score}</span>
        </p>
        <p className="text-xl">
          Level:{" "}
          <span className="text-green-400 font-bold">{levelInfo.level}</span>
        </p>
        <p className="text-xl">
          Estimated Salary:{" "}
          <span className="text-yellow-400 font-bold">{levelInfo.salary}</span>
        </p>

        <Link
          href="/quiz/1"
          onClick={handleReset}
          className="mt-5 inline-block bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-semibold transition"
        >
          Retake Quiz
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
