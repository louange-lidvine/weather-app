import weather from "/pexels-photo-209831.webp";
import "./App.css";
import { Dashboard } from "./pages/dashboard";
import { useStore } from "./utils/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function App() {
    const { coordinates } = useStore();
     const {
         data: weatherData,
         isError,
         isLoading,
     } = useQuery({
         queryKey: ["dash-data", coordinates],
         queryFn: async () => {
             const res = await axios.get(
                 `https://api.openweathermap.org/data/2.5/weather?lat=${
                     coordinates.split(" ")[0]
                 }&lon=${coordinates.split(" ")[1]}&appid=${
                     import.meta.env.VITE_WEATHER_API_KEY
                 }`
             );
             return await res.data;
         },
     });
    return (
        <div className="bg-black p-20 ">
            <p className="text-white">Weather Dashboard</p>
            <div
                className="bg-cover bg-center h-screen pl-2 pt-3 rounded-3xl sm:h-full"
                style={{ backgroundImage: `url(${weather})` }}
            >
                <Dashboard />
            </div>

            {!isLoading && !isError && (
                <div className="flex justify-between">
                    <div className="text-white">
                        {Math.floor(weatherData.main.temp - 273)}°
                    </div>
                    <div className="text-white.">Oklahoma City</div>
                </div>
            )}
        </div>
    );
}

export default App;
