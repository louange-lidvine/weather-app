import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { Main } from "../components/Main";

export const Dashboard = () => {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col gap-[120px] md:gap-[0px]  md:flex md:flex-row">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
};
