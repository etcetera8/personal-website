import koglock from './src/assets/project_assets/koglock.png'
import palettepick from './src/assets/project_assets/palette-pick2.png'
import headcount from './src/assets/project_assets/headcount.png'
import swapi from './src/assets/project_assets/swapibox.png'
import weatherly from './src/assets/project_assets/weatherly.png'
import trail from './src/assets/project_assets/trail.png'
import movie from './src/assets/project_assets/movie.png'
import drapac from './src/assets/project_assets/drapac.png'
import joust from './src/assets/project_assets/joust.png'
import co_api from './src/assets/project_assets/co_api.png'

export const projects = [
  {
    id: 0,
    title: "Kog Locker",
    description: "Kog Locker is a cycling-oriented social and personal motivation application. It's built using React, Router, Redux and uses an Express backend to handle the user authentication and API calls to the Strava endpoints. The app features \"gamification\" with hand-rolled badges, targeting of a segment of the users choice and visualizing it with the Google maps API, relevant and most interesting statistics, and lazy loading of images that the user has taken through various activities.",
    production: "https://kog-lockr.herokuapp.com/",
    github: "https://github.com/etcetera8/kog-locker",
    image: koglock
  },
  {
    id: 1,
    title: "Palette Picker",
    description: "A Postgresql/Node/Express backend with a jQuery frontend mimicking the functionality of Coolers or other palette generators. The user is able to create new projects and store unlimited palettes within those projects. The color bars have the ability to be locked to zero in on their desired palette. When the user revisits the page they are able to click on any saved palette in a project and have the color bars display that palette.",
    production: "https://parkerspalettepicker.herokuapp.com/",
    github: "https://github.com/etcetera8/pallete-picker",
    image: palettepick
  },
  {
    id: 2,
    title: "HEADCOUNT",
    description: "This React app takes in kindergarten attendance rates for all Colorado school districts. The user is able to live search for any district they wish to find with the results narrowing down as they type. As soon as two districts are selected a comparison card appears that shows the users the ratio of attendance rates between the two districts. The user can also toggle selection by clicking again on any card or clearing out the entire comparison container. The project is unit and integration tested with Jest and Enzyme. I wanted to make it visually appealing and decided to mimick my own IDE colors.",
    production: "http://headcount2.surge.sh/",
    github: "https://github.com/etcetera8/headcount2.0",
    image: headcount
  },
  {
    id: 3,
    title: "SWAPI-BOX",
    description: "I created this project using the Star Wars API, React, asynchronus JS and a full unit and integration testing suite with Jest and Enzyme. When the user first visits the site they are immediately greeted with scrolling text from one of the Star Wars movies. As the user clicks on one of the three categories, people, planets, or vehicles, another fetch call is made and they are shown 10 of that category. Users have the ability to favorite cards. When they visits the favorites tab they are able to see all of their favorited cards where they can defavorite them if wanted. I implemented local storage to increase the performance and limit API calls",
    production: "http://swapi-box.surge.sh/",
    github: "https://github.com/etcetera8/swapi-box",
    image: swapi
  },
  {
    id: 4,
    title: "Joust",
    description: "I set out to recreate my favorite arcade game of all time. This project is pure Vanilla JS and HTML5 canvas with extensive use of OOP. All physics and collision detection were written from scratch. The game is two player so grab a friend and getter ready to Joust! The largest challenges I came across was writing the collision detection and finding and implementing half decent sprite images.",
    production: "http://joust-clone.surge.sh/",
    github: "https://github.com/etcetera8/game-time",
    image: joust
  },
  {
    id: 5,
    title: "Trail Finder",
    description: "One of the first websites I ever created using Vanilla JS and the MTB Project API. I had just moved to Colorado and was overwhelmed with choices in trails to ride near my house. I essentially created a tool that I could filter trails down based on difficulty and distance from my current position. Its how I found my go to 'after work' ride at White Rance Park. One day I would like to revisit this project with Vue or React.",
    production: "https://etcetera8.github.io/brapBrapProject/",
    github: "https://github.com/etcetera8/brapBrapProject",
    image: trail
  },
  {
    id: 6,
    title: "Movie Tracker",
    description: "A React, Router, Redux, Node/Express, Postrgresql project. The user has the ability to either sign-up for an account or sign-in. Once signed in the app allows the user to find information on recent movie releases, ratings, and save them as favorites. The user is able to logout, and come back anytime to find their favorites still persisting.",
    production: "https://github.com/etcetera8/movie-tracker",
    github: "https://github.com/etcetera8/movie-tracker",
    image: movie
  },
  {
    id: 7,
    title: "Cycling Team - Static Comp",
    description: "This was a code challenge where I was given a static comp to recreate with my own theme yet maintain the structure of the comp. There were no guidelines for responsive design but it was expected to be pleasing and usable. I handled the responsiveness with flexbox and it works on all size devices. I thoroughly enjoyed working on this project and would like to one day make a 'fantasy cycling team' app using this wireframe as the design.",
    production: "https://etcetera8.github.io/pl-comp-challenge-2/",
    github: "https://github.com/etcetera8/pl-comp-challenge-2",
    image: drapac
  },
  {
    id: 8,
    title: "Weatherly",
    description: "A React weather app utiling asynchronous JavaScript and tested with Jest and Enzyme. This was a pair project where we set out with the goal to create a weather app that stood out from what most people are familiar with. We created a very simplistic UI with loading indication for improved UX. The user is able to search cities with a prefix trie npm package that I developed. The app utilizes local storage so the user is only prompted once for their location and do not have to visit the welcome screen again.",
    production: "http://weatherly.surge.sh/",
    github: "https://github.com/etcetera8/weatherly",
    image: weatherly
  },
  {
    id: 9,
    title: "Colorado Superfund API",
    description: "This is a Postgresql backend built using Node, Express and Knex. The endpoints for patching, deleting and editing data are secured with JSON webtokens. The data was all gathered with Nightmare by web-scraping the EPA's website.  If you really want to test the functionality of those please let me know and I can give you the keyword for access. Otherwise the docs have all the info for accessing the public endpoints. This project was built in four days and I would like to revisit to add additional states.",
    production: "https://byob-pichelle.herokuapp.com/",
    github: "https://github.com/etcetera8/CO-superfund-api",
    image: co_api
  },
]