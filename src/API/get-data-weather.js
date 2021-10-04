const getDataWeather = async (city, degrees, lang) => {
    const API_ID = process.env.REACT_APP_API_ID;
    const HTTPS = process.env.REACT_APP_HTTPS;

    const endpoint = city
        ? `${HTTPS}?q=${city}&appid=${API_ID}&lang=${lang}&units=${degrees}`
        : `${HTTPS}?q=buenos aires&appid=${API_ID}&lang=${lang}&units=${degrees}`;

    return await (await fetch(endpoint)).json();
};
export default getDataWeather;
