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
    title: "Kog Locker",
    description: "Kog Locker is a cycling-oriented social and personal motivation application. The app features \"gamification\" with hand-rolled badges indicating the cylcists progress,targeting and mapping of a user selected segment, yearly and recent statistics and lazy loading of images that the user has taken through various activities.",
    production: "https://kog-lockr.herokuapp.com/",
    github: "https://github.com/etcetera8/kog-locker",
    image: koglock,
    techStack: "React, Redux, Router, PostgreSQL, Node, Express, Knex, OAuth 2.0, Mocha, Chai, Jest, Enzyme",
    gh: true,
    live: true
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
    description: "I set out to recreate my favorite arcade game of all time. This project is pure Vanilla JS and HTML5 canvas with extensive use of OOP. All physics and collision detection were written from scratch. The game is two player so grab a friend and getter ready to Joust! The largest challenges I came across was writing the collision detection and finding and implementing half decent sprite images.",
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
    description: "I made this app based off of an earlier one I made before I really knew anything about web development and was just playing around with it. After seven months of Turing and many hours spent coding I decided to revisit this old project as a litmus for how far I had come and an opportunity to use asynchronus JavaScript with Vue. I reached main functionality within two days and realized I had come far.",
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
    title: "eSpeak",
    description: "This application was my group capstone project for Turing school. We leveraged the skills we have learned over the course of Turing. The purpose of eSpeak is to provide users with a way to learn and practice their Spanish vocabulary. We used Firebase for user authentication and authorization. After creating an account and logging in, a user can go through the flash cards we have set up for them to practice their Spanish vocabulary. The user recieves points as they move throught the cards and unlock levels.",
    production: "#",
    github: "https://github.com/etcetera8/eSpeak",
    techStack: "React Native, PostgreSQL, Express, Node, Knex, Firebase ",
    image: espeak,
    gh: true,
    live: false
  },
  {
    id: 11,
    title: "Ride Cast",
    description: "This is an application that takes real cycling data from a mounted computer and maps the polyline. The user is also presented a graph of power data over time. The user is able to select areas on the power graph and have the relevant areas on the map highlighted. There is also a graph display of max heart rates and best power averages for 1, 5, 10, 15, and 20 minute power averages.",
    production: "https://ride-cast.herokuapp.com/",
    github: "#",
    image: ridecast,
    techStack: "React, Router, Jest, Enzyme, Google Maps API, React Charts",
    gh: false,
    live: true
  }, 
]