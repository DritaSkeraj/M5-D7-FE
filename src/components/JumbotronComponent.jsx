import React from "react";
import { Jumbotron, Container} from "react-bootstrap";

const JumbotronComponent = (props) => {
  const style = {
    background: '#FF8008',
    background: '-webkit-linear-gradient(to right, #FFC837, #FF8008)',
    background: 'linear-gradient(to right, #FFC837, #FF8008)'
  }
  return (
    <div>
      <Jumbotron fluid style={style} className='mb-0'>
        <Container>
        <h1>Welcome to Strive bookstore</h1>
        <p>
            Find the best book recomandations for any category...
        </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;