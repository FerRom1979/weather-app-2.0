import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

import { Input, Button, Wrapper } from './Search.Styles';

const Search = ({ setCity }) => {
    const [t] = useTranslation('global');
    const [cityName, setCityName] = useState('');
    const handleCity = (e) => {
        e.preventDefault();
        setCity(cityName);
        setCityName('');
    };
    return (
        <Wrapper onSubmit={handleCity}>
            <Input
                type="text"
                placeholder={t('search.search-placeholder')}
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
            />
            <Button>
                <IoIosSearch size={40} color={'#fff'} />
            </Button>
        </Wrapper>
    );
};

export default Search;
