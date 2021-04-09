import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Album = ({ album: { cover, release_date, title } }) => {
  return (
    <Col xs={12} md={3}>
      <Card style={{ width: '100%', marginTop: '20px' }}>
        <Card.Img variant='top' src={cover} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{release_date}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Album;
