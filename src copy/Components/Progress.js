function Progress({ index, numQuestion, points, maxPossiblePoints , answer}) {
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
