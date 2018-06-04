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
import espeak from './src/assets/project_assets/espeak.png'
import ridecast from './src/assets/project_assets/ridecast.png'
import vueTrailFind from './src/assets/project_assets/vueTrailFind.png'
export const projects = [
  {
    id: 0,
    title: "eSpeak",
    description: "The purpose of eSpeak is to provide users with a way to learn and practice their Spanish vocabulary on the go. After creating an account, logging in and being authenticated through Firebase, a user can choose a category of flash cards to practice their spanish on. The user is rewarded with a correct answer with points and an increase in thier status bar. If a user is having trouble with a word or phrase they are able to request a hint which provides them with a phonetic spelling of the word in exchange for small amount of points.",
    production: "#",
    github: "https://github.com/etcetera8/eSpeak",
    techStack: "React Native, PostgreSQL, Express, Node, Knex, Firebase",
    image: espeak,
    gh: true,
    live: false
  },
  {
    id: 1,
    title: "Palette Picker",
    description: "An app I made mimicking the functionality of pallete generator sites. The user is able to create new projects and store unlimited palettes within those projects. The color bars have the ability to be locked on their desired palette. When the user revisits the page they are able to click on any saved palette in a project and have the color bars display that palette.",
    production: "https://parkerspalettepicker.herokuapp.com/",
    github: "https://github.com/etcetera8/pallete-picker",
    image: palettepick,
    techStack: "jQuery, PostgreSQL, Node, Express, Mocha, Chai",
    gh: true,
    live: true
  },
  {
    id: 2,
    title: "HEADCOUNT",
    description: "This React app takes in kindergarten attendance rates for all Colorado school districts. The user is able to live search for any district they wish to find with the results narrowing down as they type. As soon as two districts are selected a comparison card appears that shows the users the ratio of attendance rates between the two districts. The user can also toggle selection by clicking again on any card or clearing out the entire comparison container. I wanted to make it visually appealing and decided to mimick my own IDE colors.",
    production: "http://headcount2.surge.sh/",
    github: "https://github.com/etcetera8/headcount2.0",
    image: headcount,
    techStack: "React, SASS, Asynchronous JavaScript, Jest, Enzyme",
    gh: true,
    live: true
  },
  {
    id: 3,
    title: "SWAPI-BOX",
    description: " A fun Star Wars visualizer! When the user first visits the site they are immediately greeted with scrolling text from one of the Star Wars movies. As the user clicks on one of the three categories, people, planets, or vehicles, another fetch call is made and they are shown 10 of that category. Users have the ability to favorite cards. When they visit the favorites tab they are able to see all of their favorited cards where they can defavorite them if wanted. I implemented local storage to increase the performance and limit API calls",
    production: "http://swapi-box.surge.sh/",
    github: "https://github.com/etcetera8/swapi-box",
    techStack: "React, Asynchronous JavaScript, Jest, Enzyme", 
    image: swapi,
    gh: true,
    live: true
  },
  {
    id: 4,
    title: "Joust",
    description: "I set out to recreate my favorite arcade game of all time. This project is pure Vanilla JS and HTML5 canvas with extensive use of OOP. All physics and collision detection were written from scratch. The object of the game is to defeat your opponent in one on one combat while avoiding the lances of wandering enemies riding vultures. You win a 'Joust' by landing on your opponents head. And watch out for falling into lava! The game is two player so grab a friend and getter ready to Joust!",
    production: "http://joust-clone.surge.sh/",
    github: "https://github.com/etcetera8/game-time",
    techStack: "HTML5, Canvas, Mocha, Chai",
    image: joust,
    gh: true,
    live: true
  },
  {
    id: 5,
    title: "Trail Find: Vue",
    description: "I made this app based off of an app I made before I knew anything about web development and was just playing around. After seven months of Turing and many hours spent coding I decided to revisit this old project as a litmus for how far I had come and an opportunity to use asynchronus JavaScript with Vue. I reached main functionality within two days and realized I had come far. The user comes to the site, allows the browser to gain their location, select a difficulty of trail and distance from location and are presented with a variety of options for riding! Click the link for google maps directions to get to riding!",
    production: "https://trailfind.herokuapp.com/",
    github: "https://github.com/etcetera8/vue-trail-finder",
    image: vueTrailFind,
    techStack: "Vue",
    gh: true,
    live: true,
  },
  {
    id: 6,
    title: "Movie Tracker",
    description: "Track all the recent movie releases with this one! The user has the ability to either sign-up for an account or sign-in. Once signed in the app allows the user to find information on recent movie releases, ratings, and save them as favorites. The user is able to logout, and come back anytime to find their favorites still persisting.",
    production: "#",
    github: "https://github.com/etcetera8/movie-tracker",
    image: movie,
    techStack: "React, Router, Redux, Node, Express, PostgreSQL, Jest, Enzyme",
    gh: true,
    live: false
  },
  {
    id: 7,
    title: "Cycling Team - Static Comp",
    description: "This was a code challenge where I was given a static comp to recreate with my own theme yet maintain the structure of the comp. There were no guidelines for responsive design but it was expected to be pleasing and usable. I handled the responsiveness with flexbox and it works on all size devices. I thoroughly enjoyed working on this project and would like to one day make a 'fantasy cycling team' app using this wireframe as the design.",
    production: "https://etcetera8.github.io/pl-comp-challenge-2/",
    github: "https://github.com/etcetera8/pl-comp-challenge-2",
    image: drapac,
    techStack: "HTML5, CSS3",
    gh: true,
    live: true
  },
  {
    id: 8,
    title: "Weatherly",
    description: "This was a pair project where we set out with the goal to create a weather app that stood out from what most people are familiar with. We created a very simplistic UI with loading indication for improved UX. The user is able to search cities with a prefix trie npm package that I developed. The app utilizes local storage so the user is only prompted once for their location and do not have to visit the welcome screen again.",
    production: "http://weatherly.surge.sh/",
    github: "https://github.com/etcetera8/weatherly",
    image: weatherly,
    techStack: "React, Jest, Mocha, Chai",
    gh: true,
    live: true
  },
  {
    id: 9,
    title: "Colorado Superfund API",
    description: "This is a PostgreSQL backend built using Node, Express and Knex. The endpoints for patching, deleting and editing data are secured with JSON webtokens. The data was all gathered with Nightmare by web-scraping the EPA's website.  If you really want to test the functionality of those please let me know and I can give you the keyword for access. Otherwise the docs have all the info for accessing the public endpoints. This project was built in four days and I would like to revisit to add additional states.",
    production: "https://byob-pichelle.herokuapp.com/",
    github: "https://github.com/etcetera8/CO-superfund-api",
    image: co_api,
    techStack: "PostgreSQL, Node, Express, Knex, Nightmare, JWT's",
    gh: true,
    live: true
  },
  {
    id: 10,
    title: "Kog Locker",
    description: "Kog Locker is a cycling-oriented social and personal motivation application that sets goals and targets for the user to give incentive to reach and go beyond those goals. Upon logging in through Strava (And if you don't have a strava account, go get one, go ride, and then come back) the user is presented with interesting statistics of their rides, unlockable badges that show progress, and a map where the user can set a target segment to help set a personal record. I also implemented a lazy loading carousel of images from the users rides in order to look back on all the awesomeness that has taken place.",
    production: "https://kog-lockr.herokuapp.com/",
    github: "https://github.com/etcetera8/kog-locker",
    image: koglock,
    techStack: "React, Redux, Router, PostgreSQL, Node, Express, Knex, OAuth 2.0, Mocha, Chai, Jest, Enzyme",
    gh: true,
    live: true
  },
  {
    id: 11,
    title: "Ride Cast",
    description: "This is an application that takes cycling data from a mounted computer  unit such as a Garmin. The application builds and presents a map to the user of their ride on a map. The user is also presented with a graph of power data over time where they can select two data points and the corresponding time and location is highlighted on the map. There is also a graph display of max heart rates and best power averages for 1, 5, 10, 15, and 20 minute power averages.",
    production: "https://ride-cast.herokuapp.com/",
    github: "#",
    image: ridecast,
    techStack: "React, Router, Jest, Enzyme, Google Maps API, React Charts",
    gh: false,
    live: true
  }, 
]