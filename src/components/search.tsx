import { useEffect, useState } from "react";
import "react-datalist-input/dist/styles.css";
import "../datalist.css"
import { useDebounce } from "usehooks-ts";
import axios from "axios";
import DatalistInput from "react-datalist-input";
import { useStore } from "../utils/store";
export const Search = () => {
    const { setTempCoordinates } = useStore();
    const [inputValue , setInputValue] = useState("");
    const [datalist, setdatalist] = useState<
        { name: string; coordinate: string }[]
    >([]);
    
    const debInput = useDebounce(inputValue, 300);
    // const fetchWeatherData = async () => {
    //     if (inputValue) {
    //         const data: any = await GetWeatherData(inputValue);
    //         props.setWeatherData(data);
    //     } else {
    //         console.log(props);
    //     }
    // };
    const getSuggestion = async () => {
        if (debInput.length > 0) {
            const res = await axios.get(
                `http://api.openweathermap.org/geo/1.0/direct?q=${debInput}&limit=10&appid=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }`
            );
            const data = await res.data;
            setdatalist(
                data.map((d: { name: string; state: string; lat: string; lon: string; }) => ({
                    name: d.name+", "+d.state,
                    coordinate: d.lat + " " + d.lon,
                }))
            );
        }
    };
    useEffect(() => {
        getSuggestion();
        console.log("calling api with", debInput);
    }, [debInput]);

 
    return (
        <div className="">
            <DatalistInput
                placeholder="Enter city name..."
                label="Select ice cream flavor"
                showLabel={false}
                value={inputValue}
                setValue={(value) => setInputValue(value.split(", ")[0])}
                onSelect={(item) => {
                    setTempCoordinates(item.id);
                    console.log(item.id);
                }}
                items={datalist.map((d) => ({
                    value: d.name,
                    id: d.coordinate,
                }))}
                
            />
            
        </div>
    );
};
