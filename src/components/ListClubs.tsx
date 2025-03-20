import { cn } from "@/lib/utils";
import { searchKeyword } from "@/store";
import { useStore } from "@nanostores/react";
import { useMemo, useEffect } from "react";
import type { LocationData } from "@/content.config"; // Import the type
import "@/styles/globals.css";
import ClubBadge from "@/components/ClubBadge";

export default function ListClubs({ clubs }: { clubs: LocationData[] }) {
    const search = useStore(searchKeyword);

    const filteredClubs = useMemo(() => {
        if (!clubs) return [];
        if (!search) return clubs;
        return clubs.filter((club: LocationData) => {
            if (!club.Title.toLowerCase().includes(search.toLowerCase())) return false;
            return true;
        });
    }, [search, clubs]);

    // Better logging with useEffect to see when clubs changes
    useEffect(() => {
        console.log("Clubs data:", clubs ? `${clubs.length} clubs loaded` : "clubs is undefined");
    }, [clubs]);

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
                    <ClubBadge
                        key={club.Title}
                        club={club}
                    />

                ))
            )}
        </div>
    );
}
