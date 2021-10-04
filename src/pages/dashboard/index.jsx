import React from 'react';
import ExtendedForecast from '../../components/extended-forecast';
import Loader from '../../components/loader';
import WeatherCard from '../../components/weatherCard';

const Dashboard = ({ state, loading, degrees = 0, stateForecast, loadingForecast, lang }) => {
    return (
        <>
            <div>
                <WeatherCard state={state} loading={loading} degrees={degrees} />
            </div>
            <div>
                {loadingForecast ? (
                    <ExtendedForecast stateForecast={stateForecast} lang={lang} />
                ) : (
                    <Loader />
                )}
            </div>
        </>
    );
};

export default Dashboard;
