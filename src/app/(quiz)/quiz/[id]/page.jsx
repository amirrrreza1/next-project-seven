import SingleQuestions from "@/Components/SingleQuestions/SingleQuestions";

const TotalQuestions = async () => {
  const res = await fetch("http://localhost:3000/server/questions");
  const data = await res.json();
  const quizQuestions = data.QUESTIONS;
  const totalQuestions = quizQuestions.length;
  return totalQuestions;
};

const QuizSinglePage = async ({ params }) => {
  const { id } = await params; // id of the question

  const res = await fetch(`http://localhost:3000/server/questions/${id}`);
  const data = await res.json();

  const total = await TotalQuestions(); // total number of questions

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#1B1D24] text-[#1B1D24]">
        <div className="w-1/2 h-2/3 bg-[#5D9D0B] rounded-2xl shadow-2xl">
          <SingleQuestions
            id={+id}
            question={data.selected.question}
            options={data.selected.options}
            correctOption={data.selected.correctAnswer}
            totalQuestions={total}
            score={data.selected.score}
            dificulty={data.selected.level}
          />
        </div>
      </div>
    </>
  );
};

export default QuizSinglePage;
