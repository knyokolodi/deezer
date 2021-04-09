import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Artists from './components/Artists/Artists';
import About from './components/About/About';
import Artist from './components/Artists/Artist';

const App = () => {
  return (
    <Router>
      <Container>
        <Route path='/' exact component={Artists} />
        <Route path='/about' exact component={About} />
        <Route path='/search/:artistName' component={Artists} />
        <Route path='/artist/:id' component={Artist} />
      </Container>
    </Router>
  );
};

export default App;
