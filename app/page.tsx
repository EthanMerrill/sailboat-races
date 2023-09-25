import AnnualEvents from '@/components/AnnualEvents'
import InteractiveMap from '@/components/LeafletMap'
import WeeklyEvents from '@/components/WeeklyEvents'
import { SailingOrganization } from '@/src/models'
import { queryClubs } from '@/utils/utils'
import { DataStore } from 'aws-amplify'

export default async function Home() {
  const clubs = DataStore.query(SailingOrganization)
  console.log('CLUBS: ', await clubs, queryClubs())
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Where to Race Sailboats
      </h1>
      <p className='p-10 text-gray-800 max-w-3xl'>A map of races and venues where you can join a fleet and connect with others. From small community boating programs to highly competitive yacht clubs this site aims to make it easy to get connected with the racing community wherever you are.</p>
      {/* find events near me button */}
      <div className='flex justify-center'>
        <button className='bg-gradient-to-r from-blue-500 to-cyan-500 font-bold py-2 px-4 rounded hover:shadow'>
          <p className='text-cyan-50 bg-clip-text'>Find Events Near Me</p>
        </button>
      </div>
      <div className='flex w-full my-10 gap-5'>
        <AnnualEvents />
        <InteractiveMap clubsPromise={clubs}/>
        </div>
        <WeeklyEvents />
    </main>
  )
}
