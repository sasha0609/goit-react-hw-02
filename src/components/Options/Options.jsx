export default function Options({
  updateFeedback,
  shouldRenderReset,
  handleReset,
}) {
  const handleUpdate = (type) => {
    updateFeedback(type);
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
