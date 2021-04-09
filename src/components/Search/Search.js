import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Search = () => {
  const [search, setSearch] = useState('');

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      history.push(`/search/${search}`);
    } else {
      history.push('/');
    }
  };
  return (
    <Navbar bg='dark' variant='dark'>
      <LinkContainer to='/'>
        <Nav.Link>
          <Navbar.Brand>Deezer</Navbar.Brand>
        </Nav.Link>
      </LinkContainer>
      <Form inline className='mr-auto'>
        <FormControl
          type='text'
          placeholder='Search'
          value={search}
          className='mr-sm-2'
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant='outline-success' onClick={onSubmit}>
          Search
        </Button>
      </Form>
      <Nav>
        <LinkContainer to='/about'>
          <Nav.Link>
            <i class='fas fa-info-circle'></i>About app
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Search;
