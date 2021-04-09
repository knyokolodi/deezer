import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ArtistItem = ({ artist: { name, picture, id }, albums }) => {
  return (
    <Col xs={12} md={4} className='mb-3 mt-3'>
      <LinkContainer to={`/artist/${id}`}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant='top' src={picture} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>383k Fans</Card.Text>
            <Card.Text>{albums} Albums</Card.Text>
            <LinkContainer to={`/artist/${id}`}>
              <Button variant='primary'>view more</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </LinkContainer>
    </Col>
  );
};

export default ArtistItem;
