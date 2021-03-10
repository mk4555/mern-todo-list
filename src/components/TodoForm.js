import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([{ body: "", completed: false }]);
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:8000/lists/create", {
        title: title,
        items: items,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleItemChange = (e, i) => {
    let arr = [...items];
    arr[i] = { ...arr[i], body: e.target.value };
    setItems(arr);
  };

  const itemFields = () => {
    return items.map((item, i) => {
      return (
        <TextField
          id="item"
          label="Item"
          value={item.body}
          key={`item_${i}`}
          onChange={(event) => handleItemChange(event, i)}
        />
      );
    });
  };

  const addItemInput = (e) => {
    e.preventDefault();
    setItems([...items, { body: "", completed: false }]);
  };

  return (
    <form>
      <TextField
        id="title"
        label="Title"
        value={title}
        onChange={handleChange}
      />
      {itemFields()}
      <button onClick={(event) => addItemInput(event)}> + </button>
      <button type="submit" onClick={(event) => handleSubmit(event)}>
        ADD
      </button>
    </form>
  );
};
