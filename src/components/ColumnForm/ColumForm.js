import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

import styles from './ColumnForm.module.scss';

const ColumnForm = props => {
    let [ title, setTitle ] = useState('');
    let [ icon, setIcon ] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_COLUMN', payload: {title: title, icon: icon }});
        setTitle('');
        setIcon('');
    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <label>Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} /> </label>
            <label>Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} /> </label>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;