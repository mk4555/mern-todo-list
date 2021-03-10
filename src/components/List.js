import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
export const List = (props) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <h1>{props.data.title}</h1>
        {props.data.items.map((item) => {
          return <div key={item._id}>{item.body}</div>;
        })}
      </CardContent>
    </Card>
  );
};
