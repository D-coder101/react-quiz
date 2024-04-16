

import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FInishedScreen from "./FInishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../context/QuizContext";




export default function App() {
 const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen />
        )}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
            </Footer>
            <NextButton />
          </>
        )}
        {status === "finished" && (
          <FInishedScreen />
        )}
      </Main>
    </div>
  );
}
