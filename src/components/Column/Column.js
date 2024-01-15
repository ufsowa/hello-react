import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import styles from './Column.module.scss';

const Column = props => {

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
                {props.cards.map(card => <Card key={card.id}> {card.title} </Card>)}
            </ul>
            <CardForm columnId={props.id} action={addCard}/>
        </article>
    );
};

export default Column;