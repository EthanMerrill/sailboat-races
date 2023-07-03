import AnnualCard from './AnnualCard'

export default function AnnualEvents() {

    return (
        <div className="w-[300px] h-[500px] bg-zinc-100 rounded-2xl shadow">
            <div className="w-[241px] h-14 text-center text-stone-600 text-[20px] font-bold pt-3">Annual Events</div>
            <AnnualCard id={1} date={new Date(2023,4,12)} name='test' host='test' description='test' eventLink='test' tags={['test', 'test2']} />

        </div>
    )
}