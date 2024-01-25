import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';

import styles from './CardForm.module.scss';

const CardForm = props => {
    let [ title, setTitle ] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_CARD', payload: {title: title, columnId: props.columnId}});
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
    columnId: PropTypes.number.isRequired,
};

export default CardForm;