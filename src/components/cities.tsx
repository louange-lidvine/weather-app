import React, { useEffect, useState } from "react";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Cities: React.FC<{
    cityName: string;
    coordinates: {
        lon: number;
        lat: number;
    };
}> = ({ cityName, coordinates }) => {
    // const [coordinate, setCoordinates] = useState([0, 0]);
    // const [temp, setTemp] = useState(0);
    // useEffect(() => {
    //     axios
    //         .get(
    //             `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${
    //                 import.meta.env.VITE_WEATHER_API_KEY
    //             }`
    //         )
    //         .then((res) => {
    //             setCoordinates([res.data[0].lat, res.data[0].lon]);
    //         });
    //     axios
    //         .get(
    //             `https://api.openweathermap.org/data/2.5/weather?lat=${
    //                 coordinate[0]
    //             }&lon=${coordinate[1]}&appid=${
    //                 import.meta.env.VITE_WEATHER_API_KEY
    //             }`
    //         )
    //         .then((res) => {
    //             setTemp(Math.floor(res.data.main.temp - 273));
    //         });
    // }, [cityName, coordinate]);

    const {
        data: weatherData,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["city-data", cityName],
        queryFn: async () => {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${
                    coordinates.lat
                }&lon=${coordinates.lon}&appid=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }&units=metric`
            );
     
        
            return await res.data;
        },
    });
    if (!isLoading && !isError) {
        return (
            <div className=" ">
                <p className="text-4xl font-normal">
                    {weatherData.main.temp} °
                </p>
                <p>{cityName}</p>
                <div className="border-b-[5px] border-orange-500 mt-3 "></div>
              <img src="/public/images/Rectangle 4.png" alt=" hello" className="mt-2"/>
            </div>
        );
    } else {
        return <>Loadin...</>
    }

};
