import { useState } from "react";
import Form from "./Components/Form";
import FormList from "./Components/FormList";
import FormEdit from "./Components/FormEdit";

const product = [
  { Sn: "1", Title: "Soap", Category: "extra", Price: 30, Date: "26june" },
  { Sn: "2", Title: "Pen", Category: "study", Price: 40, Date: "25june" },
  { Sn: "3", Title: "Tea", Category: "eat", Price: 50, Date: "20june" },
];

function App() {
  const [dish, setDish] = useState(product);
  const [editDish, setEditDish] = useState(null);

  const addItem = (obj) => {
    setDish([...dish, obj]);
    console.log(setDish);
  };
  const deleteItem = (Sn) => {
    console.log(Sn);
    let newDish = [...dish];
    console.log(newDish);
    let finalDish = newDish.filter((item) => item.Sn !== Sn);
    console.log(finalDish);
    setDish(finalDish);
    console.log(finalDish);
  };

  const editItem = (data) => {
    console.log(data);
    setEditDish(data);
  };

  const updatedEditItem = (object) => {
    console.log(object);
    const newDish = [...dish];
    const findIdx = newDish.findIndex((item) => item.Sn === object.Sn);

    newDish[findIdx] = object;
    setDish(newDish);
    setEditDish(null);
  };

  return (
    <div>
      <Form addItem={addItem} />

      <FormList delete={deleteItem} editForm={editItem} dish={dish} />
      {editDish && <FormEdit update={updatedEditItem} editDish={editDish} />}
    </div>
  );
}

export default App;
