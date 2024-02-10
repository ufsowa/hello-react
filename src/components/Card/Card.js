import styles from './Card.module.scss';
import cslx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/store.js'

const Card = ({id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(toggleFavorite(id));
    }
    return (
        <li className={styles.card} {...{id}}>
            {title}
            <a href="/#" onClick={handleClick} className={cslx(isFavorite && styles.isFavorite)}>
                <i className="fa fa-star-o" />
            </a>
        </li>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
}

export default Card;