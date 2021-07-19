import React from "react";
import { useFetch } from "../../hooks/useFetch.js";
import { lifeApi } from "../../providers/api";

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
                <div className="text-white lg:rounded-r-lg bg-panel h-full flex flex-col justify-between row-span-1 p-5">
                    <h1 className="text-center text-xl m-1">Thursday, July 18th</h1>
                    <p className="border-t-2 border-b-2 py-5">But now, this is what the LORD says — he who created you, O Jacob, he who formed you, O Israel: "Fear not, for I have redeemed you; I have summoned you by name; you are mine."
                    Isaiah 43:1</p>
                    <div className="relative rounded h-100 rounded border-rounded border-background">
                        <React.Fragment>
                            <img
                                className="rounded-lg object-cover h-full w-full border-accent"
                                src={`${process.env.BUCKET_URL}/Upcoming`}
                            />
                            {/* <span class="bg-opacity-50 bg-panel p-1 rounded absolute inline-block top-0 ml-2 mt-2 text-white">Upcoming</span> */}
                            <p class="bg-opacity-50 bg-panel p-5 rounded absolute inline-block bottom-0 m-10 mt-32 text-white">
                                Dinner Party - 5:30pm
                                123 Road Drive Lane
                                </p>
                        </React.Fragment>
                    </div>
                </div>
            </div>
            <div className="p-6 h-100 grid lg:grid-rows-3 gap-8 col-span-3 bg-background">
                {tiles.map(item => <div style={{ height: '200px' }} className="relative shadow-2xl flex-grow text-white rounded-lg m-2 bg-panel" key={item}>
                    <React.Fragment>
                        <img
                            className="rounded-lg object-cover h-full w-full border-accent"
                            src={`${process.env.BUCKET_URL}/${item}`}
                        />
                        <span class="bg-opacity-50 bg-panel p-1 rounded absolute inline-block bottom-0 ml-2 mb-2 text-black">{item}</span>
                    </React.Fragment>
                </div>)}
            </div>
            {/* <div>{data && data.length > 0 && data.map(meal => <div key={meal.id} className="text-white">{meal.name}</div>)}</div> */}
        </div>
    )
};

export default Life;