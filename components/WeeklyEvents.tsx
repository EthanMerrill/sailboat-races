import DayOfTheWeek from "./DayOfTheWeek";
import WeeklyEvent from "@/types/WeeklyEvent.interface";

export default function WeeklyEvents() {

    const testEvent: WeeklyEvent = {
        id: 1,
        name: 'test event',
        day: 'tuesday',
        tags: ['PHRF', 'One Design', 'Cruising'],
        description: 'test description',
        eventLink: 'testlink.com',
        season: 'summer',
        host: 'Eastport Yacht Club'
    }

    return (
        <div className="mx-8 sm:mx-2  bg-zinc-100 rounded-2xl shadow" >
            <div className="py-3 text-center text-neutral-600 text-[18px] font-bold">Weekly Events</div>
            <div className='flex flex-wrap flex-row gap-1 justify-start mx-auto'>
                <DayOfTheWeek day='Monday' events={[testEvent]} />
                <DayOfTheWeek day='Tuesday' events={[testEvent]} />
                <DayOfTheWeek day='Wednesday' events={[testEvent]} />
                <DayOfTheWeek day='Thursday' events={[testEvent,testEvent]} />
                <DayOfTheWeek day='Friday' />
                <DayOfTheWeek day='Saturday' events={[testEvent]} />
                <DayOfTheWeek day='Sunday' events={[testEvent]} />
            </div>
        </div>
    )
}