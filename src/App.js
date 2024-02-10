import { Routes, Route } from 'react-router-dom';

import Home from './Home.js';
import Favorite from './components/Favorite/Favorite.js';
import About from './components/About/About.js';
import List from './components/List/List.js';
import NotFound from './components/NotFound/NotFound.js';
import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';



function App() {
  return (
    <main>
      <NavBar />
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;

//https://www.toptal.com/react/rxjs-react-state-management