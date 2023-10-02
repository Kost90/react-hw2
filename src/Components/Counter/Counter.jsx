import { useEffect, useState } from "react";
// import { useCounter } from "../../hooks/useCounter"
import Form from "../Form/Form";

function Counter() {
  const [max, setMax] = useState(null);
  const [min, setMin] = useState(null);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    setCount((prev) => (prev = Number(localStorage.getItem("count"))));
    setMax((prev) => (prev = Number(localStorage.getItem("max"))));
    setMin((prev) => (prev = Number(localStorage.getItem("min"))));
  }, []);

  useEffect(() => {
    if (count !== 0) {
      localStorage.setItem("count", `${count}`);
    }
  }, [count]);

  return (
    <div>
      <Form setmax={setMax} setmin={setMin} setcount={setCount} />
      <h1>{count}</h1>
      <button type="button" onClick={increment} disabled={max === count}>
        Increment
      </button>
      <button type="button" onClick={decrement} disabled={min === count}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
