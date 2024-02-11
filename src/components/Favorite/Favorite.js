import styles from './Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux.js';

import PageTitle from '../PageTitle/PageTitle.js';
import Card from '../Card/Card.js';

const Favorite = () => {
    const cards = useSelector(getFavoriteCards);

    if(cards.length === 0) return (
        <PageTitle>NO Favorite cards</PageTitle>
    );
    return (
        <>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.favorite}>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} {...card} />)}
            </ul>
            </article>
        </>
    );
}

export default Favorite;