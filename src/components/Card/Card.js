import styles from './Card.module.scss';
import cslx from 'clsx';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/store.js'

const Card = ({id, title, isFavorite }) => {
    const dispatch = useDispatch();

    const handleFavorite = (event) => {
        event.preventDefault();
        dispatch(toggleFavorite(id));
    }
    const handleRemove = (event) => {
        event.preventDefault();
        dispatch(removeCard(id));
    }
    return (
        <li className={styles.card} {...{id}}>
            {title}
            <ul>
                <a href="/#" onClick={handleFavorite} className={cslx(isFavorite && styles.isFavorite)}>
                    <i className="fa fa-star-o" />
                </a>
                <a href="/#" onClick={handleRemove}>
                    <i className="fa fa-trash" />
                </a>
            </ul>
        </li>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
}

export default Card;