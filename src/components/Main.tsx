import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { Cities } from "./cities";
import axios from "axios";
import { useStore } from "../utils/store";
import { useQuery } from "@tanstack/react-query";

export const Main = () => {
    const { coordinates } = useStore();
    const {
        data: weatherData,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["sidebar-data", coordinates],
        queryFn: async () => {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${
                    coordinates.split(" ")[0]
                }&lon=${coordinates.split(" ")[1]}&appid=${
                    import.meta.env.VITE_WEATHER_API_KEY
                }`
            );
                // console.log(res.data);
            return await res.data;
     
            
        },
           
    });
    return (
        <div className="w-[80%] h-full capitalize md:no flex flex-col text-white p-7 pt-1m-auto md:m-none">
            <div className="hidden md:flex md:flex-col  md:text-[10px] md:mb-[40px] ">
                <p>NATIONAL</p>
                <p>WEATHER</p>
            </div>
            <div className="mb-[4px] text-3xl text-capitalize text-orange-600  underline md:text-[10px] m-auto md:text-white md:m-[0px] md:no-underline ">
                weatherForecast
            </div>
            <div className=" font-Helvetica Neue text-[RGB(13, 12, 34)] text-[35px] m-auto md:m-[0px] ">
                <p className="mb-[-14px] ">Storm</p>
                <p>With Heavy Rain</p>
            </div>
            <div className=" clouds mt-[36px] flex font-Helvetica Neue ml-[50px]">
                <FontAwesomeIcon
                    icon={faCloud}
                    style={{
                        color: "#ffffff",
                        backgroundColor: "transparent",
                        marginTop: "5px",
                    }}
                />

                <div className=" ml-[5px] m-auto md:m-[0px]">
                    USA,Friday,jan3,2023,8:45AM
                </div>
            </div>
            <div
                className="mt-5 md:mt-5 m-auto md:m-[0px]"
                style={{ color: "RGB(240, 130, 172)", fontSize: "14px" }}
            >
                <p className="text-[12px] ">
                    Variable clouds with snow showers .High 11F.Winds{" "}
                </p>
                <div className="flex ">
                    {!isLoading && !isError && (
                        <p className="text-4xl">
                            {Math.floor(weatherData.main.temp - 273)}°
                        </p>
                    )}

                    <div className="text-[12px]">
                        <p>E at 10 to 20 mph.Chance of snow 50%</p>
                        <p>Snow accumulations less than one inch</p>
                    </div>
                </div>
            </div>
            <div
                className="font-Helvetica Neue text-white rounded-[18px] w-40 p-2 border-gray-100 bg-slate-600 text-center mt-7  md:mt-[20px]  mb-[15px] md:mb-[10px] m-auto md:m-[0px] "
                style={{ opacity: "inherit" }}
            >
                <p className="text-[15px] ">SEE DETAILS </p>
            </div>
            <div className="data  flex gap-[25px]   md:mb-[30px] md:gap-[90px] w-full  text-[12px] mb-[-10px]">
                <div>
                    <p className="flex  ">
                        <span>high </span>
                        <span>23°c</span>
                    </p>
                    <p>
                        <span>low </span>
                        <span>18°c</span>
                    </p>
                </div>
                <div>
                    <p className="flex">
                        <span>high </span>
                        <span>23°c</span>
                    </p>
                    <p>
                        <span>low </span>
                        <span>18°c</span>
                    </p>
                </div>
                <div>
                    <p className="flex">
                        <span>high </span>
                        <span>23°c</span>
                    </p>
                    <p>
                        <span>low </span>
                        <span>18°c</span>
                    </p>
                </div>
                <div>
                    <p className="flex">
                        <span>high </span>
                        <span>23°c</span>
                    </p>
                    <p>
                        <span>low </span>
                        <span>18°c</span>
                    </p>
                </div>
                <div>
                    <p className="flex">
                        <span>high </span>
                        <span>23°c</span>
                    </p>
                    <p>
                        <span>low </span>
                        <span>18°c</span>
                    </p>
                </div>
                <div>
                    <p className="flex">
                        <span>high </span>
                        <span>23°c</span>
                    </p>
                    <p>
                        <span>low </span>
                        <span>18°c</span>
                    </p>
                </div>
                <div>
                    <p className="flex">
                        <span>high </span>
                        <span>23°c</span>
                    </p>
                    <p>
                        <span>low </span>
                        <span>18°c</span>
                    </p>
                </div>
            </div>
            <div>
                <img
                    src="./images/Vector 1.svg"
                    alt="hello"
                    className="hidden md:block  md:w-full h-[7%] mb-3"
                />

                {/* <svg>
                    <path d="M 0 50 C 50 0, 100>
                </svg> */}
            </div>
            <div className="mb-[50px]">
                <div className="flex flex-wrap gap-12  md:mt-[0px] mt-[25px] align-center justify-center md:gap-[55px] w-full ">
                    <Cities
                        cityName="washington dc"
                        coordinates={{
                            lat: 38.8950368,
                            lon: -77.0365427,
                        }}
                    />

                    <Cities
                        cityName="New york"
                        coordinates={{
                            lat: 55.0252998,
                            lon: -1.4869496,
                        }}
                    />
                    <Cities
                        cityName="south Dakota"
                        coordinates={{
                            lat: 45.417463,
                            lon: -96.7008999,
                        }}
                    />
                    <Cities
                        cityName="Oklahoma City"
                        coordinates={{
                            lat: 41.1139501,
                            lon: -78.7333623,
                        }}
                    />

                    <Cities
                        cityName="Philadelphia"
                        coordinates={{
                            lat: 39.9527237,
                            lon: -75.1635262,
                        }}
                    />
                    <Cities
                        cityName="san fransisco"
                        coordinates={{
                            lat: 37.7790262,
                            lon: -122.419906,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
