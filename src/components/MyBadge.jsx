import React from "react";
import { Badge } from "react-bootstrap";

const MyBadge = (props) => {
  let style = {
    marginLeft: '20px'
  }
  return (
    <Badge variant={props.color} style={style}>{props.category}</Badge>
  );
  
}

export default MyBadge;