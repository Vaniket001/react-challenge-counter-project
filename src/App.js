import { useState } from "react";

function App() {
  return (
    <div className="card">
      <Counter />
    </div>
  );
}

function Counter(props) {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [myDate, setMyDate] = useState(new Date().toDateString());

  function handlePreviousStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  // function handleNextStep() {
  //   setStep((s) => s + 1);
  // }

  function handlePrevious() {
    setCount((c) => c - step);
    const currentDate = new Date(myDate);
    currentDate.setDate(currentDate.getDate() - step);
    setMyDate(currentDate.toDateString());
  }

  function handleNext() {
    setCount((c) => c + step);
    const currentDate = new Date(myDate);
    const nextDate = currentDate.getDate() + step;
    currentDate.setDate(nextDate);
    setMyDate(currentDate.toDateString());
  }

  return (
    <div>
      <div>
        <button onClick={handlePreviousStep}>-</button>
        <span>Steps: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={handlePrevious}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleNext}>+</button>
      </div>
      <div>{count === 0 && `Today is  ${myDate}`}</div>
      <div>{count > 0 && `${count} days from today is ${myDate}`}</div>
      <div>{count < 0 && `${count * -1} days ago was ${myDate}`}</div>
    </div>
  );
}

export default App;
