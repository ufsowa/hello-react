import { useEffect } from 'react';
import { useSelector } from "react-redux";

import styles from './List.module.scss';

import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumForm';

const List = () => {
    const columns = useSelector(state => state.columns);

    useEffect(() => {
    }, []);

    return (
        <div>
        <header className={styles.header}>
            <h2 className={styles.title}>Things to do<span>soon!</span></h2>
        </header>
        <p className={styles.description}>Interesting things I want to check out</p>
        <section className={styles.columns}>
            {columns.map(column => <Column  key={column.id}
                                            {...column}
                                            /> )}
        </section>
        <ColumnForm />
        </div>
    );
};

export default List;