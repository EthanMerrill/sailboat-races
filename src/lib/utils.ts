import type { LocationData } from "@/content.config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseFleets(fleetString: string | undefined) {
  if (!fleetString) return [];

  const fleets = [];
  const parts = fleetString.split("Class Description:");

  for (let i = 1; i < parts.length; i++) {
    const part = parts[i].trim();
    const [className, rest] = part.split("Number In Fleet:");
    if (className && rest) {
      fleets.push({
        class: className.trim().replace(/,$/, ""),
        count: Number.parseInt(rest.trim().split(",")[0]) || 0,
      });
    }
  }

  return fleets;
}

export function parseCommaSeparatedList(str: string | undefined): string[] {
  if (!str) return [];
  return str.split(", ").filter(Boolean);
}

export type FilterType = "all" | "accessible" | "youth" | "adult";

export function filterClubsByCity(
  clubs: LocationData[],
  city: string,
): LocationData[] {
  return clubs.filter(
    (club) => club.City?.toLowerCase() === city.toLowerCase(),
  );
}

export function filterClubsByState(
  clubs: LocationData[],
  state: string,
): LocationData[] {
  return clubs.filter(
    (club) => club.State?.toLowerCase() === state.toLowerCase(),
  );
}

export function filterClubsByType(
  clubs: LocationData[],
  filterType: FilterType,
  searchTerm = "",
): LocationData[] {
  return clubs.filter((club) => {
    const matchesSearch =
      !searchTerm ||
      club.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (club.Summary &&
        club.Summary.toLowerCase().includes(searchTerm.toLowerCase()));

    if (filterType === "all") return matchesSearch;
    if (filterType === "accessible")
      return (
        matchesSearch &&
        club["Accessibility Options"]?.includes("Handicap Accessible")
      );
    if (filterType === "youth")
      return matchesSearch && club.Sailors?.includes("Youth");
    if (filterType === "adult")
      return matchesSearch && club.Sailors?.includes("Adult");

    return matchesSearch;
  });
}
