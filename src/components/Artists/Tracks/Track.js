import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Track = ({ track: { title, duration } }) => {
  const truncateString = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  };
  return (
    <ListGroup>
      <ListGroup.Item>
        <span>{truncateString(title, 20)}</span>
        <span className='float-right'>{duration}</span>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Track;
