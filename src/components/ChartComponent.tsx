import { LineChart, XAxis, YAxis, Line } from "recharts";
import { useStore } from "../utils/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import moment from "moment";
 [
    {
        time: "11 pm",
        temp: 20,
    },
    {
        time: "10 pm",
        temp: 18,
    },
    {
        time: "12 pm",
        temp: 21,
    },
];

const ChartComp: React.FC = () => {
    const {  coordinates } = useStore();
    const [chartData, setChartData] = useState([]);
   useQuery({
        queryKey: ["chart-data", coordinates],
        queryFn: async () => {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${
                    coordinates.split(" ")[0]
                }&lon=${coordinates.split(" ")[1]}&appid=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }&units=metric`
            );
            return await res.data;
        },
        onSuccess: (data) => {
            setChartData(data.list.map((d: { main: { temp: any; }; dt: number; }) => ({
                temp: d.main.temp,
                time: moment.unix(d.dt).format("h a")
            })).slice(0, 8))
        },
    });

    return (
        <>
            <LineChart width={200} height={170} data={chartData}>
                <XAxis
                    dataKey="time"
                    padding={{
                        
                    }}
                />
                <YAxis dataKey="temp" />
                {/* <Tooltip />
                <Legend /> */}
                <Line dataKey="temp" type="monotone" stroke="#82ca9d" />
            </LineChart>
        </>
    );
};

export default ChartComp;
