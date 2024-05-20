import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

export default function App() {
  const initialFeedbackCounts = JSON.parse(
    localStorage.getItem("feedbackCounts")
  ) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCounts, setFeedbackCounts] = useState(initialFeedbackCounts);

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const shouldRenderReset =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad > 0;

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positiveFeedback =
    totalFeedback > 0
      ? Math.round((feedbackCounts.good / totalFeedback) * 100)
      : 0;

  const handleReset = () => {
    setFeedbackCounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        shouldRenderReset={shouldRenderReset}
      />
      {shouldRenderReset ? (
        <Feedback
          feedbackCounts={feedbackCounts}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
