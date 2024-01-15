import styles from './Card.module.scss';

const Card = props => {
    return (
        <li className={styles.card} id={props.id}> {props.children} </li>
    );
};

export default Card;