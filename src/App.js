import React, { useState, useEffect } from "react";
import { List } from "./components/List";
import axios from "axios";
export const App = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const getLists = async () => {
      axios
        .get("http://localhost:8000/lists/")
        .then((res) => setLists(res.data))
        .catch((err) => console.log(err));
    };
    getLists();
  }, []);
  return (
    <div>
      {lists.map((list) => (
        <List data={list} key={list._id} />
      ))}
    </div>
  );
};
