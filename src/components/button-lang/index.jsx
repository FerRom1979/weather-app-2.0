import React, { useState } from 'react';
import { getIcons } from '../../utils/get-icons';
import { useTranslation } from 'react-i18next';

import './ButtonLang.css';

const ButtonLang = ({ setLang }) => {
    const [t, i18n] = useTranslation('global');
    const [hideDrop, setHideDrop] = useState(false);
    return (
        <div className="dropdown">
            <button onClick={() => setHideDrop(!hideDrop)}>
                {getIcons('global-lang', 60, '#ffff')}
            </button>
            <ul className={hideDrop ? 'active' : ''}>
                <li>
                    <label htmlFor="lang">{t('button-lang.spanish')}</label>
                    <input
                        type="radio"
                        name="lang"
                        id="lang"
                        value="Es"
                        hidden
                        onClick={() => {
                            i18n.changeLanguage('es');
                            return setHideDrop(!hideDrop);
                        }}
                        onChange={(e) => setLang(e.target.value)}
                    />
                </li>
                <li>
                    <label htmlFor="spanish">{t('button-lang.english')}</label>
                    <input
                        type="radio"
                        name="lang"
                        id="spanish"
                        value="En"
                        hidden
                        onClick={() => {
                            i18n.changeLanguage('en');
                            return setHideDrop(!hideDrop);
                        }}
                        onChange={(e) => setLang(e.target.value)}
                    />
                </li>
            </ul>
        </div>
    );
};

export default ButtonLang;
