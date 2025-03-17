import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { searchKeyword } from "@/store";
import { useStore } from "@nanostores/react";
import { useMemo } from "react";
import type { LocationData } from "@/content.config"; // Import the type
import "@/styles/globals.css";



export default function ListClubs({ clubs = [] }: { clubs?: LocationData[] }) {
    const search = useStore(searchKeyword);

    const filteredClubs = useMemo(() => {
        if (!clubs) return [];
        if (!search) return clubs;
        return clubs.filter((club: LocationData) => {
            if (!club.Title.toLowerCase().includes(search.toLowerCase())) return false;
            return true;
        });

    }, [search, clubs]);
    console.log(" Clubs: ", clubs);
    return (
        <div className={cn(
            "container mx-auto px-4 md:px-0",
            "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        )}>
            {filteredClubs.length === 0 ? (
                <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">No clubs found</p>
                </div>
            ) : (
                filteredClubs.map((club) => (
                    <a
                        key={club.Title}
                        className={cn(
                            "rounded bg-background p-4 shadow",
                            "flex flex-col gap-4 cursor-pointer hover:shadow-md transition-shadow"
                        )}
                        href={`/locations/${club.slug}`}
                    >
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">{club.Title}</h3>
                            {club.City && (
                                <p className="text-gray-600">📍 {club.City}</p>
                            )}
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-2">
                            <div className="flex flex-col gap-2">
                                {club.Summary && (
                                    <p className="line-clamp-3 text-sm text-muted-foreground">
                                        {club.Summary}
                                    </p>
                                )}
                                {club.Type && (
                                    <Badge variant={club.Type === "US Sailing Member" ? "default" : "secondary"}>
                                        {club.Type}
                                    </Badge>
                                )}
                                <div className="flex flex-wrap gap-1">
                                    {club.Racing && (
                                        <Badge variant="outline">Racing</Badge>
                                    )}
                                    {club["Active One Design Fleet"] && (
                                        <Badge variant="outline">One Design Fleets</Badge>
                                    )}
                                    {club["Education Programs"] && (
                                        <Badge variant="outline">Education</Badge>
                                    )}
                                    {club["Organization Owned Fleets"] && (
                                        <Badge variant="outline">Club Owned Boats</Badge>
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                                {club.Website && (
                                    <a
                                        href={club.Website}
                                        target="_blank"
                                        className="text-blue-600 hover:underline"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        🌐 Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </a>
                ))
            )}
        </div>
    );
}
