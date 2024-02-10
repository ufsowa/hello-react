import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

import styles from './Column.module.scss';

import { getFilteredCards } from '../../redux/store';

const Column = props => {

    const cards = useSelector(state => getFilteredCards(state, props.id));

    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon} />
                {props.title}
            </h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul>
            <CardForm columnId={props.id}/>
        </article>
    );
};

Column.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Column;