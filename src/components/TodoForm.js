import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([""]);
  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/list/create", { title: title, items: items })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleItemChange = (e, i) => {
    let arr = [...items];
    arr[i] = e.target.value;
    setItems(arr);
  };

  const itemFields = () => {
    return items.map((item, i) => {
      return (
        <TextField
          id="item"
          label="Item"
          value={item}
          key={`item_${i}`}
          onChange={(event) => handleItemChange(event, i)}
        />
      );
    });
  };

  const addItemInput = (e) => {
    e.preventDefault();
    setItems([...items, ""]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="title"
        label="Title"
        value={title}
        onChange={handleChange}
      />
      {itemFields()}
      <button onClick={(e) => addItemInput(e)}> + </button>
    </form>
  );
};
