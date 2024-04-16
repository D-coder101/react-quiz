import { useQuiz } from "../context/QuizContext";

function Progress() {
const { index, numQuestion, points, maxPossiblePoints , answer} = useQuiz()

  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />

      <p>
        Question {index + 1} <strong> / {numQuestion} </strong>
      </p>

      <p>
        <strong> {points} </strong> / {maxPossiblePoints}{" "}
      </p>
    </header>
  );
}

export default Progress;
