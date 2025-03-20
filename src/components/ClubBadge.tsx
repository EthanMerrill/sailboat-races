import type { LocationData } from "@/content.config"; // Import the type
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

export default function ClubBadge({ club }: { club: LocationData }) {
    // Ensure club is defined and has the necessary properties
    if (!club || !club.Title) {
        return null; // or return a placeholder if needed
    }
    return (
        <>
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

                        <div className="flex flex-wrap gap-1">
                            {club.Racing && (
                                <Badge variant="outline">Racing</Badge>
                            )}
                            {club["Active One Design Fleet"] && (
                                <Badge variant="outline">One Design Fleets</Badge>
                            )}
                            {club["Education Programs"] && (
                                <Badge variant="outline">Learn to Sail</Badge>
                            )}
                            {club["Organization Owned Fleets"] && (
                                <Badge variant="outline">Club Owned Boats</Badge>
                            )}
                            {club.Type && (
                                <Badge variant={"outline"}>
                                    {club.Type}
                                </Badge>
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
        </>
    );
}