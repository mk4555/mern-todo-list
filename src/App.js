import React, { useState, useEffect } from "react";
import { List } from "./components/List";
import { TodoForm } from "./components/TodoForm";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

export const App = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/lists/")
      .then((res) => setLists(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <TodoForm />
      {lists.map((list) => (
        <List data={list} key={list._id} />
      ))}
    </div>
  );
};
