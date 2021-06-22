import React from "react";
import "../stylesheets/App.scss";
import Card from "./Card";

const ListCard = (props) => {
  const userItem = props.users.map((user) => {
    return <Card key={user.id} user={user} />;
  });
  return <ul className="list">{userItem}</ul>;
};
export default ListCard;
