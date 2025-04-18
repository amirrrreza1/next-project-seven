import Link from "next/link";

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-[#1B1D24] text-white p-10 flex flex-col gap-8">
      <h1 className="text-4xl font-bold text-[#5D9D0B]">
        Quiz App Documentation
      </h1>

      <section>
        <h2 className="text-2xl font-semibold text-[#5D9D0B] mb-2">About</h2>
        <p className="text-lg">
          This app helps you assess your front-end development skills through a
          series of multiple-choice questions. The questions are categorized
          into three difficulty levels: Beginner, Intermediate, and Advanced.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#5D9D0B] mb-2">
          Levels & Scoring
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Beginner:</strong> 10 questions, each worth 1 point.
          </li>
          <li>
            <strong>Intermediate:</strong> 10 questions, each worth 2 points.
          </li>
          <li>
            <strong>Advanced:</strong> 10 questions, each worth 3 points.
          </li>
        </ul>
        <p className="mt-4 text-lg">
          Total Score: <strong>60 points</strong>
        </p>
        <p className="mt-2">
          Based on your total score, you'll be assigned a skill level:
        </p>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>
            <strong>0 - 19:</strong> Beginner 🟢
          </li>
          <li>
            <strong>20 - 39:</strong> Intermediate 🟡
          </li>
          <li>
            <strong>40 - 60:</strong> Advanced 🔴
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#5D9D0B] mb-2">
          How It Works
        </h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>You’ll be presented with 30 multiple-choice questions.</li>
          <li>Choose the best answer for each question.</li>
          <li>
            At the end of the quiz, your score and skill level will be shown.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#5D9D0B] mb-2">
          After the Quiz
        </h2>
        <p className="text-lg">
          After completing the quiz, you'll be given a score based on your
          answers. Based on that score, we’ll show your skill level and give you
          an estimated average salary for your level.
        </p>

        <div className="mt-4">
          <table className="table-auto border-collapse border border-gray-600 w-full text-left">
            <thead>
              <tr className="bg-[#5D9D0B] text-black">
                <th className="border border-gray-600 px-4 py-2">Level</th>
                <th className="border border-gray-600 px-4 py-2">
                  Score Range
                </th>
                <th className="border border-gray-600 px-4 py-2">
                  Estimated Salary (USD)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Newbie</td>
                <td className="border border-gray-600 px-4 py-2">0 - 11</td>
                <td className="border border-gray-600 px-4 py-2">
                  $15,000 - $25,000
                </td>
              </tr>
              <tr className="bg-[#2F3D1F]">
                <td className="border border-gray-600 px-4 py-2">Beginner</td>
                <td className="border border-gray-600 px-4 py-2">12 - 23</td>
                <td className="border border-gray-600 px-4 py-2">
                  $25,000 - $40,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">
                  Intermediate
                </td>
                <td className="border border-gray-600 px-4 py-2">24 - 35</td>
                <td className="border border-gray-600 px-4 py-2">
                  $40,000 - $60,000
                </td>
              </tr>
              <tr className="bg-[#2F3D1F]">
                <td className="border border-gray-600 px-4 py-2">Advanced</td>
                <td className="border border-gray-600 px-4 py-2">36 - 47</td>
                <td className="border border-gray-600 px-4 py-2">
                  $60,000 - $80,000
                </td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">Expert</td>
                <td className="border border-gray-600 px-4 py-2">48 - 60</td>
                <td className="border border-gray-600 px-4 py-2">
                  $80,000 - $120,000+
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="w-full flex justify-center mt-10">
        <Link
          href="/quiz/1"
          className="bg-[#5D9D0B] text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300"
        >
          Start the Quiz
        </Link>
      </div>
    </div>
  );
};

export default DocumentationPage;
