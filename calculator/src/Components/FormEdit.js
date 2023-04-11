import React, { Fragment, useState } from "react";

const FormEdit = (props) => {
  const [title, setTitle] = useState(props.editDish.Title);
  const [category, setCategory] = useState(props.editDish.Category);
  const [price, setPrice] = useState(props.editDish.Price);
  const [date, setDate] = useState(props.editDish.Date);

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
      Sn: props.editDish.Sn,
      Title:title ,
      Category: category,
      Price:price,
      Date: date,
    };
    console.log(object);
    props.update(object);

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

export default FormEdit;
