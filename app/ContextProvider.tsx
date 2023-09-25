'use client'

import { SailingOrganization, SailingEvent } from '@/src/models';
import { createContext, useEffect, useState } from 'react'


export const AppContext = createContext(null as any)

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    
    const [selectedClub, setSelectedClub] = useState<string>('');
    const [allClubs, setAllClubs] = useState<SailingOrganization[]>([]);
    const [AnnualEvents, setAnnualEvents] = useState<SailingEvent[]>([]);
    const [WeeklyEvents, setWeeklyEvents] = useState<SailingEvent[]>([]);

    useEffect(() => {
        // console.log('selectedClub', selectedClub)
    }, [setSelectedClub, selectedClub])

    return (
        <AppContext.Provider value={{
            selectedClub,setSelectedClub,
            allClubs,setAllClubs,
            AnnualEvents,setAnnualEvents,
            WeeklyEvents,setWeeklyEvents
        }}>
            {children}
        </AppContext.Provider>
    )
}
