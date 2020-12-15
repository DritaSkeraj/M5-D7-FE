import React from "react";
import { Alert } from "react-bootstrap";

export default function WarningSign(props) {
  return (
    <>
      <Alert variant="danger">
        <p>WARNING (put PROPS.TITLE here)</p>
      </Alert>
    </>
  );
}
