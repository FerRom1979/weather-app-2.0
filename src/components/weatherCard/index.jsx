import React from 'react';
import { getIcons } from '../../utils/get-icons';
import Loader from '../loader';
import { useTranslation } from 'react-i18next';

import {
    Wrapper,
    Container,
    Temperature,
    WrapperTemp,
    Degrees,
    Description,
    WrapperDescription,
    WrapperWind,
    Wind,
    SpeedWind,
    TempMaxMin,
    Title,
    WrapperLoader,
} from './WeatherCard.styles';

const WeatherCard = ({ state, loading, degrees }) => {
    const [t] = useTranslation('global');
    const { name, main, weather, wind } = state;
    const { temp, temp_max, temp_min } = main;

    return (
        <Container>
            {!loading ? (
                <>
                    <Title>
                        {t('weather-card.title')} {name}
                    </Title>
                    <Wrapper>
                        <WrapperTemp>
                            <Temperature>{parseInt(temp)}</Temperature>
                            <Degrees>{getIcons(degrees, 80)}</Degrees>
                            <span>{getIcons(weather[0]?.main, 80)}</span>
                        </WrapperTemp>
                        <WrapperDescription>
                            <Description>{weather[0]?.description}</Description>
                        </WrapperDescription>

                        <WrapperWind>
                            <div>
                                <span>{getIcons('Wind', 30)}</span>
                                <Wind>{t('weather-card.wind')}</Wind>
                            </div>
                            <SpeedWind>{parseInt(wind.speed)}Km/h</SpeedWind>
                        </WrapperWind>
                        <div>
                            <TempMaxMin>
                                {t('weather-card.maximum')}:{parseInt(temp_max)}°
                            </TempMaxMin>
                            <TempMaxMin>
                                {t('weather-card.minimum')}:{parseInt(temp_min)}°
                            </TempMaxMin>
                        </div>
                    </Wrapper>
                </>
            ) : (
                <WrapperLoader>
                    <Loader />
                </WrapperLoader>
            )}
        </Container>
    );
};

export default WeatherCard;
