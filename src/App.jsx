import { useEffect, useState } from "react";
import Description from "./components/Description/Description.jsx";
import FeedBack from "./components/FeedBack/FeedBack.jsx";
import Option from "./components/Option/Option.jsx";

const App = () => {
  const feedBackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [fdb, setFdb] = useState(() => {
    const saveFeedBack = localStorage.getItem("feedback");
    return saveFeedBack ? JSON.parse(saveFeedBack) : feedBackState;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(fdb));
  }, [fdb]);

  const updateFeedBack = (values) => {
    setFdb((currentState) => ({
      ...currentState,
      [values]: currentState[values] + 1,
    }));
  };

  const resetTotal = () => {
    setFdb(feedBackState);
  };

  const totalFeedback = fdb.good + fdb.neutral + fdb.bad;
  const totalPositive = totalFeedback
    ? Math.round((fdb.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description />
      <Option
        updateFeedBack={updateFeedBack}
        resetTotal={resetTotal}
        total={totalFeedback}
      />
      <FeedBack
        good={fdb.good}
        bad={fdb.bad}
        neutral={fdb.neutral}
        total={totalFeedback}
        totalPositive={totalPositive}
      />
    </div>
  );
};

export default App;
