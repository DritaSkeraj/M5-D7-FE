import React from "react";
import "./SingleBook.css";
import { Card, Button } from "react-bootstrap";

import MyBadge from "./MyBadge.jsx";
import CommentArea from './CommentArea.jsx';

class SingleBook extends React.Component {
  state = {
    selected: false,
    cardStyle: { color: "black" },
  };

  render() {
    let variant;
    if (this.props.book.category === "fantasy") variant = "info";
    else if (this.props.book.category === "history") variant = "warning";
    else if (this.props.book.category === "horror") variant = "dark";
    else variant = "light";

    let handleClick = () => {
      console.log("clicked");

      if (this.state.selected === true) {
        this.setState({ cardStyle: { color: "black" } });
        this.setState({ selected: false });
      } else {
        this.setState({ cardStyle: { color: "#1b1b1b" } });
        this.setState({ selected: true });
      }
    };

    return (
      <div>
        <Card
          style={this.state.cardStyle}
          onClick={handleClick}
          key={this.props.book.id}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            style={{ height: "20rem" }}
          />
          <Card.Body style={{ height: "12rem" }}>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
            <MyBadge color={variant} category={this.props.book.category} />
          </Card.Body>
        </Card>
        { this.state.selected && (<CommentArea img={this.props.book.img} asin={this.props.book.asin} />)}
      </div>
    );
  }
}

export default SingleBook;
