"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleQuestions = ({
  id,
  question,
  options,
  correctOption,
  totalQuestions,
  score,
  difficulty,
}) => {
  const router = useRouter();
  const [userAnswer, setUserAnswer] = useState(null);

  useEffect(() => {
    const prevAnswers = JSON.parse(localStorage.getItem("answers") || "[]");
    const found = prevAnswers.find((item) => item.questionId === id);
    if (found) {
      setUserAnswer(found.answer);
    }
  }, [id]);

  const handleAnswer = (answer) => {
    if (userAnswer !== null) return;

    setUserAnswer(answer);

    const prevAnswers = JSON.parse(localStorage.getItem("answers") || "[]");
    const newAnswers = [
      ...prevAnswers,
      { questionId: id, answer, correct: correctOption },
    ];
    localStorage.setItem("answers", JSON.stringify(newAnswers));

    const prevScore = parseInt(localStorage.getItem("score") || "0");
    const newScore = answer === correctOption ? prevScore + score : prevScore;
    localStorage.setItem("score", newScore.toString());
  };

  const getClassName = (index) => {
    if (userAnswer === null) return "";
    return index === correctOption
      ? "bg-[#4CAF50] text-white"
      : index === userAnswer
      ? "bg-[#E53935] text-white"
      : "";
  };

  const getDifficulty = () => {
    switch (difficulty) {
      case "Beginner":
        return "bg-[#6BAA0E]";
      case "Intermediate":
        return "bg-[#F4A300]";
      case "Advanced":
        return "bg-[#C0392B]";
      default:
        return "";
    }
  };

  const handleNext = () => {
    if (totalQuestions === id) {
      router.push("/quiz/result");
    } else {
      router.push(`/quiz/${id + 1}`);
    }
  };

  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <div className="bg-[#1B1D24] p-1 rounded-md px-2 text-white">
          Point of this question: {score}
        </div>
        <div className="font-bold ">
          {id} / {totalQuestions}
        </div>
        <div className={`${getDifficulty()} p-1 rounded-md px-2`}>
          Difficulty: {difficulty}
        </div>
      </div>

      <h3 className="text-xl font-bold">
        {id}. {question}
      </h3>
      <div className="flex flex-col">
        {options.map((option, index) => (
          <button
            className={`m-1 p-2 rounded-sm border border-black flex items-center justify-center gap-2 ${getClassName(
              index
            )}`}
            key={`${option}-${index}`}
            onClick={() => handleAnswer(index)}
            disabled={userAnswer !== null}
          >
            {option}
            {userAnswer !== null && userAnswer === index && (
              <p className="text-sm">(your answer)</p>
            )}
          </button>
        ))}
      </div>
      <div className="mt-5 flex justify-between items-center px-5">
        <button
          className={`bg-black py-2 px-4 text-white rounded-sm ${
            id === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={id === 1}
          onClick={() => router.push(`/quiz/${id - 1}`)}
        >
          Previous
        </button>
        <button
          className={`bg-black py-2 px-4 text-white rounded-sm `}
          onClick={handleNext}
        >
          {totalQuestions === id ? "Show Result" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default SingleQuestions;
