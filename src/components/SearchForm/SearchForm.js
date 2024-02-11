import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/searchStringRedux.js';

import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(search(searchText));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(search(searchText));
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchText} onChange={e => setSearchText(e.target.value)}/>
            <Button>
                <span className={'fa fa-search'} />
            </Button>
      </form>
    );
};

export default SearchForm;