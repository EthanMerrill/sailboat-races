import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";
import { parse as parseCsv } from "csv-parse/sync";

const locations = defineCollection({
  loader: file("src/data/clubData_2025-02-17_updated.csv", {
    parser: (text) => parseCsv(text, { columns: true, skipEmptyLines: true }),
  }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    Title: z.string(),
    Address: z.string().optional(),
    Website: z.string().optional(),
    Phone: z.string().optional(),
    Email: z.string().optional(),
    "Organization Owned Fleets": z.string().optional(),
    "Monitor VHF": z.string().optional(),
    "Facebook Page": z.string().optional(),
    "Twitter Page": z.string().optional(),
    Summary: z.string().optional(),
    Type: z.string().optional(),
    Header: z.string().optional(),
    "Facilities Resources": z.string().optional(),
    "Accessibility Options": z.string().optional(),
    "Accredited EducationPrograms": z.string().optional(),
    Sailors: z.string().optional(),
    "Rental & Charter": z.string().optional(),
    Racing: z.string().optional(),
    "Active One Design Fleet": z.string().optional(),
    "Racing Events": z.string().optional(),
    "Active One Design Fleets": z.string().optional(),
    "Education Programs": z.string().optional(),
    City: z.string().optional(),
    State: z.string().optional(),
    Zip: z.string().optional(),
  }),
});

export const collections = { locations };
