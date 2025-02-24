import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { searchKeyword } from "@/store";
import { useStore } from "@nanostores/react";
import { useMemo } from "react";

interface ClubProps {
    clubs: any[];
}

export default function ListClubs({ clubs }: ClubProps) {
    const search = useStore(searchKeyword);

    const filteredClubs = useMemo(() => {
        if (!search) return clubs;
        return clubs.filter((club) => {
            if (!club.data.Title.toLowerCase().includes(search.toLowerCase())) return false;
            return true;
        });
    }, [search, clubs]);

    return (
        <div className={cn(
            "container mx-auto px-4 md:px-0",
            "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        )}>
            {filteredClubs.map((club) => (
                <a
                    key={club.data.Title}
                    className={cn(
                        "rounded bg-background p-4 shadow",
                        "flex flex-col gap-4 cursor-pointer hover:shadow-md transition-shadow"
                    )}
                    href={`/locations/${club.data.slug}`}
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold">{club.data.Title}</h3>
                        {club.data.City && (
                            <p className="text-gray-600">📍 {club.data.City}</p>
                        )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-2">
                        <div className="flex flex-col gap-2">
                            {club.data.Summary && (
                                <p className="line-clamp-3 text-sm text-muted-foreground">
                                    {club.data.Summary}
                                </p>
                            )}
                            {club.data.Type && (
                                <Badge variant={club.data.Type === "US Sailing Member" ? "default" : "secondary"}>
                                    {club.data.Type}
                                </Badge>
                            )}
                            <div className="flex flex-wrap gap-1">
                                {club.data.Racing && (
                                    <Badge variant="outline">Racing</Badge>
                                )}
                                {club.data["Active One Design Fleets"] && (
                                    <Badge variant="outline">One Design Fleets</Badge>
                                )}
                                {club.data["Education Programs"] && (
                                    <Badge variant="outline">Education</Badge>
                                )}
                                {club.data["Organization Owned Fleets"] && (
                                    <Badge variant="outline">Club Owned Boats</Badge>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                            {club.data["Web Site"] && (
                                <a
                                    href={club.data["Web Site"]}
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
            ))}
        </div>
    );
}
