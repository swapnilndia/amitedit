import React, { Fragment, useState } from "react";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const dateeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, category, price, date);

    const object = {
      Sn: Math.random(),
      Title: title,
      Category: category,
      Price: price,
      Date: date,
    };
    console.log(object);
    props.addItem(object);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input value={title} onChange={titleHandler}></input>
        <label>Category</label>
        <input value={category} onChange={categoryHandler}></input>
        <label>Price</label>
        <input value={price} onChange={priceHandler}></input>
        <label>Date</label>
        <input value={date} onChange={dateeHandler}></input>
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default Form;
