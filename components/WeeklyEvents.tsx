import DayOfTheWeek from "./DayOfTheWeek";
import WeeklyEvent from "@/types/WeeklyEvent.interface";

export default function WeeklyEvents() {

    const testEvent: WeeklyEvent = {
        id: 1,
        name: 'test event',
        day: 'tuesday',
        tags: ['test', 'test2'],
        description: 'test description',
        eventLink: 'testlink.com',
        season: 'summer',
    }

    return (
        <div className="mx-8 sm:mx-2 h-[319px] bg-zinc-100 rounded-2xl shadow" >
            <div className="w-[229px] h-[31px] text-center text-neutral-600 text-[16px] font-bold">Weekly Events</div>
            <div className='flex flex-wrap flex-row gap-2'>
                <DayOfTheWeek day='Monday' events={[testEvent]} />
                <DayOfTheWeek day='Tuesday' events={[testEvent]} />
                <DayOfTheWeek day='Wednesday' events={[testEvent]} />
                <DayOfTheWeek day='Thursday' events={[testEvent]} />
                <DayOfTheWeek day='Friday' />
                <DayOfTheWeek day='Saturday' events={[testEvent]} />
                <DayOfTheWeek day='Sunday' events={[testEvent]} />
            </div>
        </div>
    )
}