import { Organizations } from "@/src/models";
import DayOfTheWeek from "./DayOfTheWeek";
import WeeklyEvent from "@/types/WeeklyEvent.interface";
import { DataStore } from 'aws-amplify';
import awsExports from "./../src/aws-exports";
import Amplify from "@aws-amplify/core";

Amplify.configure(awsExports);

async function queryClubs() {
// Simple query
try {
    const posts = await DataStore.query(Organizations);
    console.log('Posts retrieved successfully!', JSON.stringify(posts, null, 2));
  } catch (error) {
    console.log('Error retrieving posts', error);
  }
}

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

    console.log('queryClubs', queryClubs())

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