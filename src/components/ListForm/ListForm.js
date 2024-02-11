import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

import styles from './ListForm.module.scss';
import { addList } from '../../redux/listsRedux.js';

const ListForm = ({listId}) => {
    let [ title, setTitle ] = useState('');
    let [ description, setIcon ] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setIcon('');
    }

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label>Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} /> </label>
            <label>Description: <TextInput value={description} onChange={e => setIcon(e.target.value)} /> </label>
            <Button>Add list</Button>
        </form>
	);
};

export default ListForm;