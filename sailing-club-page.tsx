"use client"

import { MapPin, Phone, Mail, Anchor, Ship, Calendar, Users, Award, Facebook, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"

export default function SailingClubPage() {
  // This would normally come from your data source
  const club = {
    id: "83715034",
    slug: "park-city-sailing-association",
    Title: "PARK CITY SAILING ASSOCIATION",
    Address: "Jordanelle State Park, Heber City, UT 84098",
    Website: "http://www.ParkCitySailing.org",
    Phone: "435-659-1360",
    Email: "Info@ParkCitySailing.org",
    "Organization Owned Fleets":
      ", Class Description: Elliot 6m, Number In Fleet: 8, Class Description: J/22, Number In Fleet: 5, Class Description: Laser, Number In Fleet: 2, Class Description: Optimist, Number In Fleet: 11, Class Description: 420 (Club), Number In Fleet: 4",
    "Monitor VHF": "Channel:68",
    "Facebook Page": "https://www.facebook.com/ParkCitySailing",
    "Twitter Page": "",
    Summary:
      "Tuesday Night Laser Racing\nThursday Night Keelboat Racing\nSummer Sailing Camps-Beginner to Advanced ages 5-17 ages\nCamp Scholarships available\nJr Race Team\nAdult Sailing Lessons\nOutreach Programs\nSkiGatta every April - race on skis, race on lasers.\nAnnualFall Regatta\nMore info at www.SailPC.org",
    Type: "US Sailing Member",
    Header: "Community Sailing Program",
    "Facilities Resources": "Beach, Boat Ramp, Classroom, On-Shore Boat Storage with Trailers, Restrooms, Showers",
    "Accessibility Options": "Handicap Accessible, Handicapped Parking, Wheelchair Accessible Restroom",
    "Accredited EducationPrograms":
      "Basic Keelboat Sailing, Fleet Racing, Racing (Dinghy), Racing (Keelboat), Small Boat Sailing (Dinghy)",
    Sailors: "Adult, Armed Forces, Disabled, Youth",
    "Rental & Charter": "Small keelboats",
    Racing: "Handicap - Portsmouth, PHRF, ORR, IRC, One Design",
    "Active One Design Fleet": "",
    "Racing Events": "Annual regattas, Frostbiting, Weekday series, Youth",
    "Active One Design Fleets":
      "Class Description, Number In Class, , , , , 420, 6, , , , , Elliot 6m , 8, , , , , J/22 , 5, , , , , Laser , 50, , , , , Optimist, 20",
    "Education Programs": "",
    City: "Heber City",
    State: "UT",
    Zip: "84098",
  }

  // Parse the fleets data
  const parseFleets = (fleetString) => {
    if (!fleetString) return []

    const fleets = []
    const parts = fleetString.split("Class Description:")

    for (let i = 1; i < parts.length; i++) {
      const part = parts[i].trim()
      const [className, rest] = part.split("Number In Fleet:")
      if (className && rest) {
        fleets.push({
          class: className.trim(),
          count: Number.parseInt(rest.trim().split(",")[0]) || 0,
        })
      }
    }

    return fleets
  }

  const fleets = parseFleets(club["Organization Owned Fleets"])

  // Parse facilities
  const facilities = club["Facilities Resources"]?.split(", ") || []

  // Parse accessibility options
  const accessibilityOptions = club["Accessibility Options"]?.split(", ") || []

  // Parse education programs
  const educationPrograms = club["Accredited EducationPrograms"]?.split(", ") || []

  // Parse sailors
  const sailors = club["Sailors"]?.split(", ") || []

  // Parse racing events
  const racingEvents = club["Racing Events"]?.split(", ") || []

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Main info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=800" alt={club.Title} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h1 className="text-3xl font-bold text-white">{club.Title}</h1>
                <div className="flex items-center text-white/80 mt-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{club.Address}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-primary/10">
                {club.Type}
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                {club.Header}
              </Badge>
              {sailors.map((sailor, i) => (
                <Badge key={i} variant="outline" className="bg-primary/10">
                  {sailor}
                </Badge>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{club.Summary}</p>
              </CardContent>
            </Card>

            <Tabs defaultValue="programs">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
                <TabsTrigger value="fleets">Fleets</TabsTrigger>
                <TabsTrigger value="racing">Racing</TabsTrigger>
              </TabsList>

              <TabsContent value="programs" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Education Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {educationPrograms.map((program, i) => (
                        <li key={i} className="flex items-center">
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          {program}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Rental & Charter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{club["Rental & Charter"]}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="facilities">
                <Card>
                  <CardHeader>
                    <CardTitle>Facilities & Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {facilities.map((facility, i) => (
                        <li key={i} className="flex items-center">
                          <Anchor className="h-4 w-4 mr-2 text-primary" />
                          {facility}
                        </li>
                      ))}
                    </ul>

                    <Separator className="my-4" />

                    <h3 className="text-lg font-medium mb-2">Accessibility</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {accessibilityOptions.map((option, i) => (
                        <li key={i} className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          {option}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="fleets">
                <Card>
                  <CardHeader>
                    <CardTitle>Club Fleet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {fleets.map((fleet, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center">
                            <Ship className="h-5 w-5 mr-3 text-primary" />
                            <span>{fleet.class}</span>
                          </div>
                          <Badge>{fleet.count}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="racing">
                <Card>
                  <CardHeader>
                    <CardTitle>Racing Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Racing Types</h3>
                      <p>{club.Racing}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Racing Events</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {racingEvents.map((event, i) => (
                          <li key={i} className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right column - Contact info and map */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <p>{club.Address}</p>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <p>{club.Phone}</p>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <p>{club.Email}</p>
              </div>

              {club["Monitor VHF"] && (
                <div className="flex items-center">
                  <Ship className="h-5 w-5 mr-3 text-primary" />
                  <p>VHF: {club["Monitor VHF"].replace("Channel:", "")}</p>
                </div>
              )}

              <Separator />

              <div className="flex flex-col space-y-3">
                <Button asChild variant="outline" className="w-full">
                  <Link href={club.Website} target="_blank">
                    Visit Website
                  </Link>
                </Button>

                <div className="flex gap-2">
                  {club["Facebook Page"] && (
                    <Button asChild variant="outline" size="icon">
                      <Link href={club["Facebook Page"]} target="_blank">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </Link>
                    </Button>
                  )}

                  {club["Twitter Page"] && (
                    <Button asChild variant="outline" size="icon">
                      <Link href={club["Twitter Page"]} target="_blank">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-64 bg-muted rounded-md overflow-hidden">
                {/* This would be replaced with an actual map component */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Map of {club.City}, {club.State}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

