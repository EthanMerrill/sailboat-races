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
