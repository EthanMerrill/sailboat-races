import WeeklyEvent from "@/types/WeeklyEvent.interface";
import EventCard from "./EventCard";
import { SailingEvent } from "@/types/API";


export default function DayOfTheWeek(props: { day: string, events?: SailingEvent[] }) {
    
    const { day, events } = props;

    return (
        <div>
            <div className="min-w-[190px] h-[31px] text-center text-neutral-600 text-[16px] font-bold">{day}</div>
            <div className="flex flex-col justify-center items-center">
                {(events === undefined ) ? <div className="min-w-[235px] h-[31px] text-center text-neutral-600 text-[16px] my-auto">No Events</div> :
                    events?.map((event, i) => {
                        return (
                            <EventCard key={i} SailingEvent={event} />
                        )
                    })
                }
            </div>
        </div>
    )
}