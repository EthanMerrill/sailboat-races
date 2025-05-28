import { cn } from "@/lib/utils";
import { searchKeyword } from "@/store";
import { useStore } from "@nanostores/react";
import { useMemo, useEffect, useState, useCallback } from "react";
import type { LocationData } from "@/content.config"; // Import the type
import "@/styles/globals.css";
import ClubBadge from "@/components/ClubBadge";

export default function ListClubs({ clubs }: { clubs: LocationData[] }) {
    const search = useStore(searchKeyword);
    const [visibleClubs, setVisibleClubs] = useState<LocationData[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const filteredClubs = useMemo(() => {
        if (!clubs) return [];
        if (!search) return clubs;
        return clubs.filter((club: LocationData) =>
            club.Title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, clubs]);

    useEffect(() => {
        // Load the first 50 clubs when the component mounts or when filteredClubs changes
        setVisibleClubs(filteredClubs.slice(0, 50));
        setHasMore(filteredClubs.length > 50);
    }, [filteredClubs]);

    const loadMoreClubs = useCallback(() => {
        if (!hasMore) return;
        setVisibleClubs((prev) => {
            const nextClubs = filteredClubs.slice(prev.length, prev.length + 50);
            setHasMore(nextClubs.length > 0);
            return [...prev, ...nextClubs];
        });
    }, [filteredClubs, hasMore]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100
            ) {
                loadMoreClubs();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loadMoreClubs]);

    return (
        <div className={cn(
            "container mx-auto px-4 md:px-0",
            "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        )}>
            {visibleClubs.length === 0 ? (
                <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">No clubs found</p>
                </div>
            ) : (
                visibleClubs.map((club) => (
                    <ClubBadge
                        key={club.Title}
                        club={club}
                    />
                ))
            )}
            {hasMore && (
                <div className="col-span-full text-center py-4">
                    <p className="text-muted-foreground">Loading more clubs...</p>
                </div>
            )}
        </div>
    );
}
