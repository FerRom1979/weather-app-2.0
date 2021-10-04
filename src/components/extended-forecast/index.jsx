import React from 'react';
import { getFormatDate } from '../../utils/get-format-date';
import { getIcons } from '../../utils/get-icons';
import Loader from '../loader';
import { useTranslation } from 'react-i18next';

import { CardBox, Date, Content, Card, Container, Description } from './ExtendedForecast.styles';

const ExtendedForecast = ({ stateForecast, loadingForecast, lang }) => {
    const [t] = useTranslation('global');
    console.log(stateForecast);
    return (
        <>
            <Container>
                {loadingForecast ? (
                    <Loader />
                ) : (
                    stateForecast.map((data, index) => (
                        <Card key={index}>
                            <CardBox>
                                <Content>
                                    <Date>{getFormatDate(data?.dt_txt, lang)}</Date>
                                    <Description>
                                        <span>{getIcons(data?.weather[0]?.main)}</span>
                                        <span>{data?.weather[0]?.description}</span>
                                    </Description>

                                    <p>
                                        {t('extended-forecast.temp-max')}:{' '}
                                        {parseInt(data?.main.temp_max)}
                                    </p>
                                    <p>
                                        {t('extended-forecast.temp-min')}:
                                        {parseInt(data?.main.temp_min)}
                                    </p>
                                    <p>
                                        {t('extended-forecast.humidity')}: {data?.main.humidity}%
                                    </p>
                                </Content>
                            </CardBox>
                        </Card>
                    ))
                )}
            </Container>
        </>
    );
};

export default ExtendedForecast;
