export default interface WeeklyEvent {
    id: number;
    name: string;
    day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
    tags: string[];
    eventLink: string;
    season: 'spring' | 'summer' | 'fall' | 'winter';
    host: string;
    startTime?: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
    burgeeImage?: string;
}