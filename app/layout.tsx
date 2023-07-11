/* eslint-disable @next/next/no-sync-scripts */
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sailboat Races',
  description: 'A way to get involved in the local sailing community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin="" />
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""></script>
        {/* <link rel="stylesheet" href="https://webapiv2.navionics.com/dist/webapi/webapi.min.css" />
        <script type="text/javascript" src="https://webapiv2.navionics.com/dist/webapi/webapi.min.no-dep.js"></script> */}

      </head>
      {/* Header Goes Here */}
      <body className={inter.className}>{children}</body>
      {/* Footer Goes Here 
      Content:
      - Data sources
      - About the creator. why I made this
      - submit your club or event
       */}
    </html>
  )
}
