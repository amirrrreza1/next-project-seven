import SingleQuestions from "@/Components/SingleQuestions/SingleQuestions";

const QuizSinglePage = async ({ params }) => {
  const { id } = await params; // id of the question

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questions/${id}`
  );

  const data = await res.json();

  const allRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/questions`
  );

  const allData = await allRes.json();
  const totalQuestions = allData.QUESTIONS.length; // total number of questions

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#1B1D24] text-[#1B1D24]">
      <div className="w-1/2 h-2/3 bg-[#5D9D0B] rounded-2xl shadow-2xl">
        <SingleQuestions
          id={+id}
          question={data.selected.question}
          options={data.selected.options}
          correctOption={data.selected.correctAnswer}
          totalQuestions={totalQuestions}
          score={data.selected.score}
          difficulty={data.selected.level}
        />
      </div>
    </div>
  );
};

export default QuizSinglePage;
