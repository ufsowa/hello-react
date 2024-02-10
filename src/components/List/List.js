import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom'

import styles from './List.module.scss';

import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumForm';
import SearchForm from '../SearchForm/SearchForm.js'

import { getListColumns, getListById } from '../../redux/store';

const List = () => {
    const { listId } = useParams();
    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getListColumns(state, listId));

    useEffect(() => {
    }, []);

    if(!listData) return <Navigate to="/" />
    return (
        <div>
        <header className={styles.header}>
            <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>
        <SearchForm />
        <section className={styles.columns}>
            {columns.map(column => <Column  key={column.id}
                                            {...column}
                                            /> )}
        </section>
        <ColumnForm {...{listId}}/>
        </div>
    );
};

export default List;