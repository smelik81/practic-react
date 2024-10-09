const Option = ({ updateFeedBack, resetTotal, total }) => {
  return (
    <div>
      <button onClick={() => updateFeedBack("good")}>Good</button>
      <button onClick={() => updateFeedBack("neutral")}>Netural</button>
      <button onClick={() => updateFeedBack("bad")}>Bad</button>
      <button onClick={resetTotal}>Reset</button>
    </div>
  );
};

export default Option;
