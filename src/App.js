import Container from './components/Container/Container.js';
import Hero from './components/Hero/Hero.js'
import List from './components/List/List.js'
import SearchForm from './components/SearchForm/SearchForm.js'

function App() {
  return (
    <Container>
        <Hero />
        <SearchForm />
        <List />
    </Container>
  );
}

export default App;

//https://www.toptal.com/react/rxjs-react-state-management