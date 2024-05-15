export default function Options({
  updateFeedback,
  shouldRenderReset,
  setFeedbackCounts,
}) {
  const handleUpdate = (type) => {
    updateFeedback(type);
  };

  const handleReset = () => {
    setFeedbackCounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <div>
        <button onClick={() => handleUpdate("good")}>Good</button>
        <button onClick={() => handleUpdate("neutral")}>Neutral</button>
        <button onClick={() => handleUpdate("bad")}>Bad</button>
      </div>
      {shouldRenderReset && <button onClick={handleReset}>Reset</button>}
    </>
  );
}
