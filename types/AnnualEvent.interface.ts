export default interface AnnualEvent {
    id: number;
    name: string;
    date: Date;
    host: string;
    tags: string[];
    eventLink: string;
    description?: string;
    burgeeImage?: string;
}
