import Container from './components/Container/Container.js';
import Hero from './components/Hero/Hero.js'
import ListToDo from './components/List/List.js'
import SearchForm from './components/SearchForm/SearchForm.js'

function App() {
  return (
    <Container>
        <Hero />
        <SearchForm />
        <ListToDo />
    </Container>
  );
}

export default App;
