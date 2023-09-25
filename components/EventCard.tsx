'use client'

import { SailingEvent as SailingEventType } from "@/types/API";
import Chip from "./Chip";
import { useContext } from "react";
import { AppContext } from "@/app/ContextProvider";
import { SailingEvent } from "@/src/models";

export default function EventCard(props: { SailingEvent: SailingEventType }) {
    const { name,date, description,series,dayOfWeek,link,hostClubs } = props.SailingEvent || {};
    const borderStyleAnnual = "relative pb-6 min-w-[180px] max-w-[400px] border-l-4 rounded border-rose-500 bg-white m-2 p-2 hover:shadow-sm"
    const borderStyleWeekly = "relative pb-6 min-w-[1px] max-w-[150px] border-l-4 rounded border-teal-500 bg-white m-2 p-2 hover:shadow"

    const appContext = useContext(AppContext)

    // convert date string to date object
    const dateObj = date? new Date(date):null;

    return (
        <div className={date?borderStyleAnnual:borderStyleWeekly} 
        onMouseEnter={
            e => {
                // console.log(`mouseover card ${name}`)
            appContext.setSelectedClub(SailingEvent);}
        }
        >
            <div className=" flex flex-row justify-between ">
                {date && <div className="flex flex-col text-center my-auto mx-2">
                    <div className="font-extrabold text-stone-500 text-[18px]">{dateObj?.getDay()}</div>
                    <div className="font-medium text-stone-500 text-[16px]">{(dateObj?.toLocaleDateString('default', { month: 'long' }))}</div>
                </div>}
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className=" text-stone-500 text-[18px] font-semibold">{name}</div>
                        <div className="w-[141px] h-[19px] text-stone-500 text-[14px] font-normal">{hostClubs?.items ? hostClubs?.items[0]?.name:''}</div>
                    </div>
                    <div className="flex flex-row flex-wrap my-1">
                        {/* {tags?.map((tag: string, i: number) => {
                            return (
                                <Chip key={i} text={tag} color={'bg-orange-300'} />
                            )
                        })} */}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-3 right-1 h-3 text-right">
                <span className="text-blue-500 text-[12px] font-medium tracking-wider">EVENT PAGE</span>
                <span className="text-blue-500 text-[12px] font-medium"> {'-->'} </span>
            </div>

        </div>
    )

}