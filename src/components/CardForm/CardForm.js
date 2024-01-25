import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';

import styles from './CardForm.module.scss';
import { addCard } from '../../redux/store.js';

const CardForm = ({columnId}) => {
    let [ title, setTitle ] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({title, columnId}));
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
}

CardForm.propTypes = {
    columnId: PropTypes.string.isRequired,
};

export default CardForm;