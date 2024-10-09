const FeedBack = ({ good, bad, neutral, total, totalPositive }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {totalPositive}</p>
    </div>
  );
};

export default FeedBack;
