import React from "react";

const FormList = (props) => {
  const deleteHandler = (Sn) => {
    console.log(Sn);
    props.delete(Sn);
  };
  console.log(props.dish);

  const editHandler = (item) => {
    props.editForm(item);
  };

  return (
    <div>
      {props.dish.map((item) => (
        <li key={item.Sn}>
          {item.Sn}&nbsp;
          {item.Title}&nbsp;
          {item.Category}&nbsp;
          {item.Price}&nbsp;
          {item.Date}
          <button onClick={() => deleteHandler(item.Sn)}>Delete</button>
          <button onClick={() => editHandler(item)}>Edit</button>
        </li>
      ))}
    </div>
  );
};

export default FormList;
