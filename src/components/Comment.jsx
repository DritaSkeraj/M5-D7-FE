import React from 'react';
import {ListGroup} from 'react-bootstrap';

const Comment = (props) =>{
    return(
        <ListGroup key={props.keyIndex}>
        {console.log('key: ', props.keyIndex)}
            <ListGroup.Item>
                 <p>
                    {props.comment} <br />
                     <span>Rating: {props.rate} out of 5 </span>
                    <button className='btn-danger' 
                      style={{position: "relative", float: "right"}}
                      onClick={props.handleDel}>
                        x
                    </button>
                 </p>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Comment;