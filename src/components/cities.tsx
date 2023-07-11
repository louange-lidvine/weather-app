import React  from "react";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Cities: React.FC<{
    cityName: string;
    coordinates: {
        lon: number;
        lat: number;
    };
}> = ({ cityName, coordinates }) => {
  

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
              <img src="/images/Rectangle 4.png" alt=" hello" className="mt-2"/>
            </div>
        );
    } else {
        return <>Loadin...</>
    }

};
