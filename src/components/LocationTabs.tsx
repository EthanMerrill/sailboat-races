import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface fleetData {
    name: string;
    data: { class: string; count: number }[]
}


interface LocationTabsProps {
    educationPrograms: string[];
    facilities: string[];
    accessibilityOptions: string[];
    fleets: fleetData[];
    racingEvents: string[];
    locationData: any;
}

export function LocationTabs({
    educationPrograms,
    facilities,
    accessibilityOptions,
    fleets,
    racingEvents,
    locationData,
}: LocationTabsProps) {
    return (
        <Tabs defaultValue="programs">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
                <TabsTrigger value="fleets">Fleets</TabsTrigger>
                <TabsTrigger value="racing">Racing</TabsTrigger>
            </TabsList>

            <TabsContent value="programs" className="space-y-4">
                <Card>
                    <div className="p-6">
                        <h3 className="mb-4 text-xl font-semibold">Education Programs</h3>
                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            {educationPrograms.map((program, index) => (
                                <li key={index} className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-primary mr-2 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                        />
                                    </svg>
                                    {program}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>

                <Card>
                    <div className="p-6">
                        <h3 className="mb-4 text-xl font-semibold">Rental & Charter</h3>
                        <p>{locationData["Rental & Charter"]}</p>
                    </div>
                </Card>
            </TabsContent>

            <TabsContent value="facilities">
                <Card>
                    <div className="p-6">
                        <h3 className="mb-4 text-xl font-semibold">
                            Facilities & Resources
                        </h3>
                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            {facilities.map((facility, index) => (
                                <li key={index} className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-primary mr-2 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                    {facility}
                                </li>
                            ))}
                        </ul>

                        <Separator className="my-4" />

                        <h3 className="mb-2 text-lg font-medium">Accessibility</h3>
                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                            {accessibilityOptions.map((option, index) => (
                                <li key={index} className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-primary mr-2 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </TabsContent>

            <TabsContent value="fleets">
                <Card>
                    <div className="p-6">
                        <h3 className="mb-4 text-xl font-semibold">Organization Owned Fleets</h3>
                        <p>Fleets owned by the club or group which are often used for classes or events</p>
                        <div className="grid grid-cols-2 gap-4">
                            {fleets[0].data.map((fleet, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded-md border p-3"
                                >
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-primary mr-3 h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                        <span>{fleet.class}</span>
                                    </div>
                                    <Badge>{fleet.count}</Badge>
                                </div>
                            ))}
                        </div>
                        <h3 className="mb-4 text-xl font-semibold">Active One Design Fleets</h3>
                        <p>Types of <a href="https://en.wikipedia.org/wiki/One-design_racing#Sailing:~:text=%5B8%5D-,Sailing,-%5Bedit%5D">one design</a> sailboat fleets active at this location. Often these fleets conduct weekly races.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {fleets[1].data.map((fleet, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between rounded-md border p-3"
                                >
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-primary mr-3 h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                        <span>{fleet.class}</span>
                                    </div>
                                    <Badge>{fleet.count}</Badge>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </TabsContent>

            <TabsContent value="racing">
                <Card>
                    <div className="p-6">
                        <h3 className="mb-4 text-xl font-semibold">Racing Information</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="mb-2 text-lg font-medium">Racing Types</h4>
                                <p>{locationData.Racing}</p>
                            </div>

                            <div>
                                <h4 className="mb-2 text-lg font-medium">Racing Events</h4>
                                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                    {racingEvents.map((event, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-primary mr-2 h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            {event}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Card>
            </TabsContent>
        </Tabs>
    );
}