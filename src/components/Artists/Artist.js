import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Search from '../Search/Search';
import axios from 'axios';
import Album from './Albums/Album';
import Track from './Tracks/Track';

const Artist = () => {
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    searchArtist();
  }, []);

  const searchArtist = async () => {
    try {
      const response = await (await axios.get(`/artist/${id}`)).data;
      setArtist(response);
      await getAlbums(id);
      await getTracks(id);
      setLoading(false);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };

  //api.deezer.com/artist/27/albums

  const getAlbums = async (id) => {
    try {
      const response = await (await axios.get(`/artist/${id}/albums`)).data;
      setAlbums(response.data);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };

  const getTracks = async (id) => {
    try {
      const response = await (await axios.get(`/artist/${id}/top`)).data;
      setTracks(response.data);
      console.log(`Tracks ${JSON.stringify(response.data)}`);
      setLoading(false);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };

  return (
    <Col xs={12} md={12}>
      <Search />
      {loading && <h3 style={{ textAlign: 'center', paddingTop: '30px' }}>Loading...</h3>}
      {artist && (
        <>
          <Row style={{ marginTop: '20px' }}>
            <Col xs={12} md={9}>
              <Card style={{ width: '100%', height: 'auto' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '4rem' }}>{artist.name}</Card.Title>
                  <Card.Text>{artist.nb_fan} Fans</Card.Text>
                  <Card.Text>{artist.nb_album} Albums</Card.Text>
                  <LinkContainer to={`/`}>
                    <Button variant='primary'>Go back</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
              {tracks &&
                tracks.map((track) => {
                  return <Track track={track} />;
                })}
            </Col>
          </Row>

          <Row>
            {albums &&
              albums.map((album) => {
                return <Album album={album} />;
              })}
          </Row>
        </>
      )}
    </Col>
  );
};

export default Artist;
