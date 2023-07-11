import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerFull } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Search } from "./search";

import { useStore } from "../utils/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ChartComp from "./ChartComponent";
import "../App.css"
const Sidebar = () => {
    // const [weatherData, setWeatherData] = useState("");
    const { tempCoordinates, setCoordinates, coordinates } = useStore();
    const {
        data: weatherData,
        isError,
        isLoading,
    } = useQuery({
        queryKey: ["sidebar-data", coordinates],
        queryFn: async () => {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.split(" ")[0]
                }&lon=${coordinates.split(" ")[1]}&appid=${import.meta.env.VITE_WEATHER_API_KEY
                }`
            );
            return await res.data;
        },
    });
    return (
        <div className="w-[20%] h-[100vh]  border-r-none  md:border-r-[2px]  md:border-white ">
            <div className="border-b border-white w-[30vw]   h-[5%] md:w-[77%] font-Helvetica Neue mb-10 text-center ">
                <div className="flex h-full w-[100vw] md:w-full ">
                    <FontAwesomeIcon
                        icon={faThermometerFull}
                        style={{ color: "#ffffff", fontSize: "1.5em" }}
                    />

                    <Search />
                    <button
                        onClick={() => setCoordinates(tempCoordinates)}
                        className="bg"
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            style={{ color: "#ffffff" }}
                        />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2  text-center md:no-center">
                {!isLoading && !isError && (
                    <div className="text-center">
                        <div
                            className="flex align-middle text-white mb-[-13px]"
                            style={{ fontFamily: "Helvetica Neue" }}
                        >
                            {/* <WeatherData weatherData={weatherData} /> */}
                            <p className="text-5xl ">
                                {Math.floor(weatherData.main.temp - 273)}°
                            </p>
                            <p className="text-3xl m-3 text-center">+/-</p>
                            <p className="text-5xl ">3</p>
                        </div>

                        <div
                            className="text-white flex gap-[40px]"
                            style={{
                                color: "rgb(13, 12, 34)",
                                fontFamily: "Helvetica Neue",
                            }}
                        >
                            <div className="text-white text-start text-2xl">
                                9.8%
                            </div>
                            <div className="text-white text-end mt-2xl">
                                wind: {weatherData.wind.speed} mph
                            </div>
                        </div>
                    </div>
                )}
                <div className="text-white flex gap-[40PX] mt-10  ml-4">
                    <div>
                        <img
                            src="images/Group 1.png"
                            alt="figma"
                            className="w-[50px]"
                        />
                        <ul className="list-disc">
                            <li>0.00%-0.9%</li>
                            <li>0.9%-11%</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="list-disc">
                            <li>0.8%</li>
                        </ul>
                        <ul className="list-disc">
                            Dangerous
                            <li>12%-38%</li>
                            <li>39%-90%</li>
                        </ul>
                    </div>
                </div>

                {/* (WeatherData && */}

                <div className="rounded w-[40vw]   h-2mt-10 border-white border-2 flex justify-center  align-middle md:w-[200px] p-  ">
                    <ChartComp />
                </div>

                <div className="font-Helvetica Neue text-white mt-7 flex gap-3 md:flex md:flex-col">
                    <h2 className="text-2xl">Oklahoma City</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum, inventore.
                    </p>
                </div>
            </div>
        </div>
    );
}
                        
    

export default Sidebar;
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThermometerFull } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { Search } from "./search";

// import { useStore } from "../utils/store";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import ChartComp from "./ChartComponent";

// const Sidebar = () => {
//   const { tempCoordinates, setCoordinates, coordinates } = useStore();
//   const {
//     data: weatherData,
//     isError,
//     isLoading,
//   } = useQuery({
//     queryKey: ["sidebar-data", coordinates],
//     queryFn: async () => {
//       const res = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.split(" ")[0]
//         }&lon=${coordinates.split(" ")[1]}&appid=${import.meta.env.VITE_WEATHER_API_KEY
//         }`
//       );
//       return await res.data;
//     },
//   });

//   return (
//     <div className="w-11/12 md:w-1/4 h-screen border-none md:border border-2 md:border-white mx-auto">
//       <div className="border-b border-white h-16 md:h-24 w-3/4 md:w-77% font-Helvetica Neue mb-10 flex items-center">
//         <FontAwesomeIcon
//           icon={faThermometerFull}
//           style={{ color: "#ffffff", fontSize: "1.5em" }}
//         />
//         <Search />
//         <button onClick={() => setCoordinates(tempCoordinates)} className="bg">
//           <FontAwesomeIcon icon={faSearch} style={{ color: "#ffffff" }} />
//         </button>
//       </div>
//       <div className="flex flex-col gap-2">
//         {!isLoading && !isError && (
//           <div>
//             <div className="flex align-middle text-white mb-[-13px]" style={{ fontFamily: "Helvetica Neue" }}>
//               <p className="text-5xl">{Math.floor(weatherData.main.temp - 273)}°</p>
//               <p className="text-3xl m-3 text-center">+/-</p>
//               <p className
