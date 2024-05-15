export default function Feedback({ feedbackCounts }) {
  return (
    <>
      <p>good: {feedbackCounts.good}</p>
      <p>neutral: {feedbackCounts.neutral}</p>
      <p>bad: {feedbackCounts.bad}</p>
    </>
  );
}
