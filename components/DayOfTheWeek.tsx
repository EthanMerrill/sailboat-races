import WeeklyEvent from "@/types/WeeklyEvent.interface";


export default function DayOfTheWeek(props: { day: string, events?: WeeklyEvent[] }) {
    const { day, events } = props;
    return (
        <div>
        <div className="h-[31px] text-center text-neutral-600 text-[16px] font-bold">{day}</div>
        {
            events?.map((event, i) => {
                return (
                    <div key={i} className=" h-[31px] text-center text-neutral-600 text-[16px] font-bold">{event.name}</div>
                )
            })
        }
        <div className="h-[0px] origin-top-left -rotate-90 border border-zinc-300"></div>
        </div>
    )
}