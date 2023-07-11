import axios from "axios";

const GetWeatherData = async () => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
            }`
        );
        console.log(response);
        const d = await response.data;
        const options = d.data?.map((city: any) => ({
            value: `${city.latitude}   ${city.longitude}`,
            label: `${city.name},${city.countryCode} `,
        }));
        return { options };
    } catch (err) {
        console.log(err);
    }
};

export default GetWeatherData;
