"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SingleQuestions = ({
  id,
  question,
  options,
  correctOption,
  totalQuestions,
  score, // ✅ امتیاز داینامیک هر سوال
}) => {
  const router = useRouter();
  const [userAnswer, setUserAnswer] = useState(null);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);

    // ذخیره پاسخ در localStorage
    const prevAnswers = JSON.parse(localStorage.getItem("answers") || "[]");
    const newAnswers = [
      ...prevAnswers,
      { questionId: id, answer, correct: correctOption },
    ];
    localStorage.setItem("answers", JSON.stringify(newAnswers));

    // ذخیره امتیاز
    const prevScore = parseInt(localStorage.getItem("score") || "0", 10);
    const newScore = answer === correctOption ? prevScore + score : prevScore;
    localStorage.setItem("score", newScore.toString());
  };

  const getClassName = (index) => {
    if (userAnswer === null) return "";
    return index === correctOption
      ? "bg-green-500"
      : index === userAnswer
      ? "bg-red-500"
      : "";
  };

  const handleNext = () => {
    if (totalQuestions === id) {
      router.push("/quiz/result");
    } else {
      router.push(`/quiz/${id + 1}`);
    }
  };

  return (
    <div className="p-5">
      <h3 className="text-2xl font-bold">{question}</h3>
      <div className="flex flex-col">
        {options.map((option, index) => (
          <button
            className={`m-3 p-2 rounded-sm border border-slate-600 ${getClassName(
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
      <div className="flex justify-between items-center mt-5">
        <span className="text-sm text-slate-400">
          Score for this question: {score}
        </span>
        <button
          className={`bg-black py-2 px-4 text-white rounded-sm ${
            userAnswer === null ? "opacity-50" : ""
          }`}
          disabled={userAnswer === null}
          onClick={handleNext}
        >
          {totalQuestions === id ? "Show Result" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default SingleQuestions;
