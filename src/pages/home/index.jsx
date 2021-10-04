import React from 'react';
import Header from '../../components/header';
import { useFetch } from '../../hooks/useFetch';
import Dashboard from '../dashboard';

const Home = () => {
    const {
        state,
        setCity,
        loading,
        setDegrees,
        degrees,
        setLang,
        stateForecast,
        loadingForecast,
        lang,
    } = useFetch();

    return (
        <div>
            <Header setCity={setCity} setDegrees={setDegrees} setLang={setLang} />
            <Dashboard
                state={state}
                loading={loading}
                degrees={degrees}
                stateForecast={stateForecast}
                loadingForecast={loadingForecast}
                lang={lang}
            />
        </div>
    );
};

export default Home;
