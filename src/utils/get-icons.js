import {
    WiCloudy,
    WiStrongWind,
    WiStormShowers,
    WiDaySunny,
    WiNightRainMix,
    WiCelsius,
    WiFahrenheit,
} from 'react-icons/wi';
import { IoIosGlobe } from 'react-icons/io';

export const getIcons = (icon, size = 40, color) => {
    switch (icon) {
        case 'Clouds':
            return <WiCloudy size={size} color={'#59c6f7'} />;
        case 'Wind':
            return <WiStrongWind size={size} color={'black'} />;
        case 'Clear':
            return <WiDaySunny size={size} color={'#ffd259'} />;
        case 'Rain':
            return <WiNightRainMix size={size} color={'#59c6f7'} />;
        case 'imperial':
            return <WiFahrenheit size={size} color={color} />;
        case 'metric':
            return <WiCelsius size={size} color={color} />;
        case 'global-lang':
            return <IoIosGlobe size={size} color={color} />;
        default:
            return <WiStormShowers size={size} color={'#59c6f7'} />;
    }
};
