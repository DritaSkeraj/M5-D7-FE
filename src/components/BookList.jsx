import React from "react";
import SingleBook from "./SingleBook.jsx";
import { Container, Row, Col } from "react-bootstrap";

export default function BookList(props) {
  return (
    <Container>
      <Row>
        {props.books.map((book) => {
          return (
            <Col>
              <SingleBook book={book} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
