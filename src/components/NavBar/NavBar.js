import styles from './NavBar.module.scss'

const NavBar = props => {
    return (
        <nav className={styles.nav}>
            <a href="/"><i className="fa fa-tasks"></i></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/favorite">Favorite</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;