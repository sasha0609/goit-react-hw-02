import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";
import { useEffect } from "react";

export default function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts({
      ...feedbackCounts,
      [feedbackType]: feedbackCounts[feedbackType] + 1,
    });
  };
  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const shouldRenderReset =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad > 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        shouldRenderReset={shouldRenderReset}
        setFeedbackCounts={setFeedbackCounts}
      />
      {shouldRenderReset ? (
        <>
          <Feedback feedbackCounts={feedbackCounts} />
        </>
      ) : (
        <Notification />
      )}
    </>
  );
}
