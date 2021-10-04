import { useState, useEffect } from 'react';
import getDataWeather from '../API/get-data-weather';
import getDataForecast from '../API/get-data-weather-forecast';
import { initialState } from '../constant/initial-state';

export const useFetch = () => {
    const [state, setState] = useState(initialState);
    const [stateForecast, setStateForecast] = useState([initialState]);
    const [error, setError] = useState(false);
    const [errorForecast, setErrorForecast] = useState(false);
    const [city, setCity] = useState('');
    const [degrees, setDegrees] = useState('metric');
    const [lang, setLang] = useState('ES');
    const [loading, setLoading] = useState(false);
    const [loadingForecast, setLoadingForecast] = useState(false);

    const fetchWeather = async (city, degrees, lang) => {
        try {
            setError(false);
            setLoading(true);
            const dataWeather = await getDataWeather(city, degrees, lang);
            setState(dataWeather);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };
    const fetchForecast = async (city, degrees, lang) => {
        try {
            setErrorForecast(false);
            setLoadingForecast(true);
            const dataForecast = await getDataForecast(city, degrees, lang);

            setStateForecast(
                dataForecast.list.filter((data) => data.dt_txt.slice(11) === '00:00:00'),
            );
        } catch (err) {
            setErrorForecast(err);
        }
    };
    useEffect(() => {
        setState(initialState);
        fetchWeather(city, degrees, lang);
        fetchForecast(city, degrees, lang);
    }, [city, degrees, lang]);
    return {
        state,
        error,
        setCity,
        loading,
        setDegrees,
        degrees,
        setLang,
        errorForecast,
        loadingForecast,
        stateForecast,
        lang,
    };
};
