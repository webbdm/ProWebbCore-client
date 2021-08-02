import React from "react";
import { useFetch } from "../../hooks/useFetch.js";
import { lifeApi } from "../../providers/api";
import PWCLogos from "../../../assets/PWC Logos.svg";
import { NavLink } from "react-router-dom";

const Life = () => {
    //const { data } = useFetch(async () => await lifeApi.getMeals());

    const tiles = ['Nutrition', 'Calendar', 'Organization'];
    return (
        <div className="h-screen 
                        grid 
                        xs:h-1/2 
                        sm:h-1/2 
                        xs:grid-rows-1 
                        grid-cols-1
                        md:grid-cols-1 
                        lg:grid-cols-4 
                        lg:grid-flow-col">
            <div className="shadow w-100 row-span-3 xs:col-span-1 h-screen p-8 lg:pl-0 ">
                <div className="text-white rounded lg:rounded-r-lg bg-panel h-full flex flex-col justify-between row-span-1 p-5">
                    <h1 className="text-center text-xl m-1">Thursday, July 18th</h1>
                    <p className="border-accent border-t-2 border-b-2 py-5">But now, this is what the LORD says — he who created you, O Jacob, he who formed you, O Israel: "Fear not, for I have redeemed you; I have summoned you by name; you are mine."
                    Isaiah 43:1</p>
                    <div className="relative rounded h-100 rounded border-rounded border-background">
                        <React.Fragment>
                            <img
                                className="rounded-lg object-cover h-full w-full"
                                src={`${process.env.BUCKET_URL}/Upcoming`}
                            />
                            {/* <span class="bg-opacity-50 bg-panel p-1 rounded absolute inline-block top-0 ml-2 mt-2 text-white">Upcoming</span> */}
                            {/* <p class="bg-opacity-50 bg-panel p-5 rounded absolute inline-block bottom-0 m-10 mt-32 text-white">
                                Dinner Party - 5:30pm
                                123 Road Drive Lane
                                </p> */}
                            <p className="absolute bottom-0 left-0 m-1 p-1 rounded-lg bg-paneltp">Upcoming</p>
                        </React.Fragment>
                    </div>
                </div>
            </div>
            <div className="p-6 pb-0 h-screen grid lg:grid-rows-3 gap-8 col-span-3 bg-background">
                {tiles.map(item => <div style={{ height: '200px' }} className="cursor-pointer relative shadow-2xl flex-grow flex flex-row text-white rounded-lg m-2 bg-panel" key={item}>
                    <React.Fragment>
                        <NavLink to={`/${item}`}>
                            <div className="backdrop-filter backdrop-blur-sm flex flex-col justify-center text-center w-32 bg-paneltp absolute h-full rounded-l-lg p-4">
                                <img src={PWCLogos} />
                                <h1 className="mt-2">{item}</h1>
                            </div>
                            <img
                                className="rounded-lg border-l border-panel object-cover h-full w-full border-accent"
                                src={`${process.env.BUCKET_URL}/${item}`}
                            />
                        </NavLink>
                        {/* <span className="bg-opacity-50 bg-panel p-1 rounded absolute inline-block bottom-0 ml-40 mb-2 text-black">{item}</span> */}
                    </React.Fragment>
                </div>)}
            </div>
            {/* <div>{data && data.length > 0 && data.map(meal => <div key={meal.id} className="text-white">{meal.name}</div>)}</div> */}
        </div>
    )
};

export default Life;