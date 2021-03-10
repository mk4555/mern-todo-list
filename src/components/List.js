import React from "react";
export const List = (props) => {
  return (
    <div>
      <h1>{props.data.title}</h1>
      {props.data.items.map((item) => {
        return <div key={item._id}>{item.body}</div>;
      })}
    </div>
  );
};
