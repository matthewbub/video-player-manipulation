# Video Player Manipulation Challenge

<p align="center">
  <img src="https://img.shields.io/badge/Framework-Vue-%2300AA74" alt="Vue" />
  <img src="https://img.shields.io/badge/Style%20Guide-Airbnb-%23FB5057" alt="Style Guide" />
  <img src="https://img.shields.io/badge/Hosting-Firebase-%23FFC932" alt="Firebase Hosting" />
  <img src="https://img.shields.io/badge/Tested%20with-Jest-%23BF1524" alt="Jest" />
</p>

<p>Interactive comments for the HTML5 Video API. Comments are tied to timestamp and sortable using the HTML5 Drag and Drop API.</p>
</br>

<p align="center">
  <a href="hi-matbub.github.io" target="_blank">
    <img src="./static/demo_app.gif" alt="demo"/>
  </a>
</p>

## Setup

Local setup is simple and only requires `npm`.

```bash
# clone repo
git clone https://github.com/hi-matbub/video-player-manipulation.git

# cd to the repo
cd video-player-manipulation 

# install deps
npm install

# run dev server :tada:
npm run dev
```

**Additional available scripts** to be used throughout development and testing.

```sh
# execute test suites
npm run test

# run eslint
npm run lint

# run eslint and fix 
npm run lint:fix
```

## Getting up to speed

``` sh
Video Player Manipulation
├── ...
├── index.html
├── package.json
└── src
    ├── App.vue
    ├── main.js
    ├── helpers
    └── MediaPlayer 
        ├── MediaPlayer.vue
        ├── Comments.vue
        └── Controls.vue
```

A _small but scaleable_ application, the video functionality can be broken down into 4 primary components. Below is a gist of what to expect inside each.

#### [src/App.vue](./src/App.vue)

Contains the majority of major event listeners that get sent down the tree and are accessible via `this.$props`.
- `timeupdate` to watch the current postion of the timestamp
- `onresize` for dynamic page height. 
- `ended` to dectect end of playback.

**Props accessbile from here**

Prop             | Type    | Description
---              | ---     | ---
comments         | Array   | array of comments
currentTimestamp | Number  | current timestamp of video
videoIsPlaying   | Boolean | detects if video is current playing
windowWidth      | Number  | detects current width of window


#### [src/MediaPlayer/MediaPlayer.vue](./src/MediaPlayer/MediaPlayer.vue)

Home of the `<video>` element. Uses `$props.currentTimestamp` to compare and watch the timestamp of each comment and reveal them accoring to a match in time. 

**See also  [/src/helpers/watchComments](/src/helpers/watchComments.js)**
</br>
_Side note: a sorting algorithim to group comments according to moments would surely improve effenciy in a real world environment._ 

Also contains the grid layout which is verbose and needs attention see #ISSUE for more details. 

#### [src/MediaPlayer/Comments.vue](./src/MediaPlayer/Comments.vue)

Uses `v-for` to list comments in a `div.container`. Drag and drop `methods` are housed here.

Also constantly watching the page width using the `$props.windowWidth` to handle draggablility as well as postion on presentation. _The position on presentation has it's [known issues](https://github.com/hi-matbub/video-player-manipulation/issues/37#issuecomment-791796281)_.

#### Conditional logic
**If** the screen is **greater than or equal to 960px**. 
- Comments will append to random locations throughout the grid. 
- Comments are `draggble`

**Else** page width is **less than 960px**  
- Comments append to the first grid container "as-is".
- Comments are not `draggable`

#### [src/MediaPlayer/Controls.vue](./src/MediaPlayer/Controls.vue)

Contains external video controls, easy to sync with video playback using `$props.currentTimestamp` and `$props.videoIsPlaying`.

## Workflow 

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), [conventional-commit-helper](https://github.com/hi-matbub/conventional-commit-helper) and is enforced with a [pre-commit hook](./.husky/pre-commit) to verify no lint errors and all tests are passing before each commit. As a final precautionary measure we have a GitHub workflow script to catch any lint errors for each push.

<p align="center">
  <a href="hi-matbub.github.io" target="_blank">
    Matthew Bub
  </a>
</p>
