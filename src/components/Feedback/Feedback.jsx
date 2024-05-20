import { useEffect } from "react";

export default function Feedback({
  feedbackCounts,
  totalFeedback,
  positiveFeedback,
}) {
  useEffect(() => {
    localStorage.setItem("positive-feedback", positiveFeedback);
  }, [positiveFeedback]);

  return (
    <>
      <p>good: {feedbackCounts.good}</p>
      <p>neutral: {feedbackCounts.neutral}</p>
      <p>bad: {feedbackCounts.bad}</p>
      <p>total: {totalFeedback}</p>
      <p>positive:{positiveFeedback}</p>
    </>
  );
}
