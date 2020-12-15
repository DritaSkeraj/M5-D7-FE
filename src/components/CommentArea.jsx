import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap'

import AddComment from './AddComment';
import CommentsList from './CommentsList'

const CommentArea = (props) => {

        return (
            <>
            <AddComment img={props.img}/>
            <CommentsList asin={props.asin}/>
            </>
        );
}

export default CommentArea;