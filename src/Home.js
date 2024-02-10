import Hero from './components/Hero/Hero.js'
import List from './components/List/List.js'
import SearchForm from './components/SearchForm/SearchForm.js'

const Home = () => {
    return (
        <>
            <Hero />
            <SearchForm />
            <List />
        </>
    );
}

export default Home;