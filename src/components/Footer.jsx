import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Footer extends Component {
  render() {
    let styles = {
      backgroundColor: '#1b1b1b',
      color: 'white'
    }

    return (
      <div fixed="bottom" style={styles}>
      <br />
        <Container variant='light'>
          <Row>
            <Col>
              Strive School Bookstore, {new Date().getFullYear()}
            </Col>
            <Col>
              All right reserved
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}

export default Footer;
