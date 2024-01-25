import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import styles from './Column.module.scss';

const Column = props => {

    const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

    const addCard = (newCard, columndId) => {
        props.action(newCard, columndId);
    };

    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon} />
                {props.title}
            </h2>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id}> {card.title} </Card>)}
            </ul>
            <CardForm columnId={props.id} action={addCard}/>
        </article>
    );
};

Column.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Column;