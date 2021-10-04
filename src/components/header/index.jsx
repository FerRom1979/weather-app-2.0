import React from 'react';
import logoWeather from '../../images/logo.png';
import ButtonLang from '../button-lang';
import { ButtonSwitch } from '../button-switch';
import Search from '../search';

import { Img, Wrapper, WrapperButtons } from './Header.Styles';

const Header = ({ setCity, setDegrees, setLang }) => (
    <Wrapper>
        <Img src={logoWeather} alt="logo weather" />
        <Search setCity={setCity} />

        <WrapperButtons>
            <ButtonSwitch setDegrees={setDegrees} />
            <ButtonLang setLang={setLang} />
        </WrapperButtons>
    </Wrapper>
);

export default Header;
