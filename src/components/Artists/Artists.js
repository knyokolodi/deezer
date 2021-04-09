import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import Search from '../Search/Search';
import ArtistItem from './ArtistItem';
import { Route } from 'react-router-dom';

const Artists = () => {
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);

  const { artistName } = useParams();

  useEffect(() => {
    searchArtist(artistName);
  }, [artistName]);

  const searchArtist = async (artistName) => {
    try {
      const response = await (await axios.get(`/search?q=${artistName}`)).data;

      const { data } = response;

      const newArtists = data
        .map((a) => a.artist)
        .filter((artist, index, self) => index === self.findIndex((a) => a.name === artist.name));
      console.log(`Halllo ${JSON.stringify(newArtists)}`);

      setArtist(newArtists);
      setAlbums(data.length);
      setLoading(false);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };

  return (
    <>
      <Search />

      <Row>
        {loading ? (
          <Col>
            <h3 style={{ textAlign: 'center', paddingTop: '30px' }}>Loading...</h3>
          </Col>
        ) : artist?.length > 0 ? (
          artist.map((a) => {
            return <ArtistItem key={a.id} artist={a} albums={albums} />;
          })
        ) : (
          <Col>
            <h3 style={{ textAlign: 'center', paddingTop: '30px' }}>No results found</h3>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Artists;
