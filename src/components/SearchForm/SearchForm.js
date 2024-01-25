import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'SEARCH', payload: searchText});
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