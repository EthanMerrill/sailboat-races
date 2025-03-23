# project aspirations

### MVP TODO

- [x] a new page for every entry in my scraped data
- [x] show and hide sections based on data availability
- [x] update homepage to show where to sail
- [x] search bar
- [ ] UI Cleanup but specifically
  - [x] make a universal card component for clubs
  - [x] make a component for hero image and pattern if no image
  - [x] make a component for location
  - [ ] make a component for facilities labels with icons
  - [ ] Make badges make sense
  - [ ] update Iconography where it makes sense, remove otherwise
  - [ ] Add custom colors, fonts, and styles to the theme
  - [ ] add ethan-components footer
  - [/] add a header
  - [ ] add ui cue for the type of organization (yacht club, sailing school, etc)

## POST MVP TODO

- [ ] add mapping for each club, will require geo-coding via apis to lat long
- [ ] add a map to the homepage
- [ ] add a badge if they are in the american association of yachtclubs
  - [ ] need to obtain a list of yacht clubs in the association, manually add to csv
- [ ] add a formalness indicator, like a yacht club vs a community sailing program
- [ ] badge tooltips
- [ ] search by badge
- an interactive map with filtering
- ## major cities pages
- sexy icons based on capabilities
- add this: https://krthush.medium.com/how-to-create-link-previews-like-social-media-apps-open-source-api-45797d758200
- Add more information about the page, a little about me
- scrape more data, charters,RYA, etc
- add a blog
- add a contact form
- add a newsletter
- Sell Other People's Yachts Club Merch
- Add Yacht clubs and their per foot pricing

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
