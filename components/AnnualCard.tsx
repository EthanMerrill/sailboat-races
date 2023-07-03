import AnnualEvent from "@/types/AnnualEvent.interface";
import { monthString } from "@/utils/utils";
import Chip from "./Chip";

export default function AnnualCard(props: AnnualEvent) {
    const { name, host, date, description, eventLink, tags } = props;
    return (
        <div className="relative pb-4 min-w-[200px] max-w-[400px] border-l-4 rounded border-rose-500 bg-white m-3 p-2">
            <div className=" flex flex-row justify-between ">
                <div className="flex flex-col text-center my-auto mx-2">
                    <div className="font-extrabold text-stone-500 text-[18px]">{date.getDay()}</div>
                    <div className="font-medium text-stone-500 text-[16px]">{monthString(date.getMonth())}</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className=" text-stone-500 text-[18px] font-semibold">{name}</div>
                        <div className="w-[141px] h-[19px] text-stone-500 text-[14px] font-normal">{host}</div>
                    </div>
                    <div className="flex flex-row flex-wrap">
                        {tags?.map((tag, i) => {
                            return (
                                <Chip key={i} text={tag} color={'blue-500'} />
                            )
                        })}
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