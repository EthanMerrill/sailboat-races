'use client'

import EventCard from "./EventCard";
import { AppContext } from "@/app/ContextProvider";
import { useContext, useState } from "react";
import { SailingEvent as SailingEventType } from "@/types/API";


export default function AnnualEvents() {
    // const testEvent: AnnualEvent = {
    //     id: 1,
    //     name: 'test event',
    //     date: new Date(),
    //     tags: ['PHRF', 'One Design', 'Cruising'],
    //     description: 'test description',
    //     eventLink: 'testlink.com',
    //     host: 'Eastport Yacht Club'
    // }
    const [annualEvents, setAnnualEvents] = useState<SailingEventType[]>([]);
    const appContext = useContext(AppContext)

    return (
        <div className="w-[300px] h-[500px] bg-zinc-100 rounded-2xl shadow">
            <div className="w-[241px] h-14 text-center text-stone-600 text-[20px] font-bold pt-3">Annual Events</div>
            {annualEvents? annualEvents.map((event: SailingEventType, i: number) => {
                return (
                    <EventCard key={i} SailingEvent={event} />
                )

            }
            ) : <div>loading...</div>}

        </div>
    )
}