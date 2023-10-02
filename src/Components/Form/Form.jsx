import React from "react";

function Form({ setmax, setmin, setcount }) {
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {};
    const formdata = new FormData(e.target);
    formdata.forEach((value, key) => (data[key] = Number(value)));
    setmax((prev) => (prev = data.max));
    localStorage.setItem("max", `${data.max}`);
    setmin((prev) => (prev = data.min));
    localStorage.setItem("min", `${data.min}`);
    setcount((prev) => (prev = data.min));
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="max">Write max value of Counter</label>
        <input type="number" name="max" />
        <label htmlFor="min">Write min value of Counter</label>
        <input type="number" name="min" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
