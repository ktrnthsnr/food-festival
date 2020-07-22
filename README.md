# food-festival

Mobile web application showing venue info such as event detail, calendar, and location, where the project focuses on improving image and page load performance and offline usability.

## GitHub URL

https://github.com/ktrnthsnr/food-festival

## GitHub hosted website

https://ktrnthsnr.github.io/food-festival


## Table of Contents

* [Description](#description)
* [Technology](#technology)
* [Installations](#installations)
* [Usage](#usage)
* [Performance](#performance)
* [Contribution](#contribution)

## Description

A food festival website containing vivid imagery and a site menu and carousel showcasing a home page, schedule, and a page for ordering tickets to the festival. 

## Technology

Tools used for this project
- Performance monitoring tools and plugins: Google Lighthouse, Google DevTools, webpack bundler, webpack-bundle-analyzer, file-loader, image-webpack-loader, SW-precache-webpack, webpack-PWA-manifest plugins
- Software: Node.js, npm, Express.js, GitHub, JavaScript, ES6, HTML, CSS

## Installations

- For local installations, below are the steps required.
- Prereq for your desktop: Install VSCode and Node.js on your desktop.
- Then clone this GitHub repo to your local drive.
- To install all dependency components listed within the package.json file for npm, run in the VS Code bash terminal:
- $ `npm i`
-
- Below are are each installation components utilized for this project:

(Note, to run this application and website, you do not need to install these. These are listed to itemize the npm modules used to create the bundles and optimizations, and therefore the config and scripts have already been updated to support these optimizations.)

- Created a new package.json, started with initializing npm
- $ `npm init --y` or $ `npm install`
- Installed webpack and webpack CLI
- $ `npm i -D webpack webpack-cli`
- Checked webpack is installed, checking for the version
- $ `webpack -v`
- Received this error, `webpack: command not found` resolved by running this
- $ `npm run webpack -v`
- Installed the jquery package
- $ `npm i jquery`
- Installed bootstrap
- $ `npm i bootstrap`
- Installed popper.js
- $ `npm i popper.js`
- Installed the webpack-bundle-analyzer
- $ `npm install -D webpack-bundle-analyzer`
- Installed file-loader to optimize image files
- $ `npm install -D file-loader`

- Installed webpack loader
- $ `npm install image-webpack-loader`
- Installed dev server
- $ `npm install webpack-dev-server`

## Usage

- This application's website is hosted on GitHub https://ktrnthsnr.github.io/food-festival
- ![FoodFestival](./img/FoodFestival.jpg "Food Festival")
- If cloning this repo to your desktop, and after completing the npm installation per above `npm i`, you may view the app, by launching the `index.html` within your local desktop's browser. Note, the app was deployed to a development environment.
- To execute a webpack and view the report.html of bundled components, run in the bash terminal the following: (Note, this will recreate the bundled files on dist folder as well.)
- $ `npm run build`
- This will start an interactive tree map and will render a report.html in the browser locally under c:/food-festival/dist/report.html, showing each bundle size being loaded.  Here is the webpack report after modularization:
- ![Interactive Tree Map](./img/report_sample.html_afterImageFileLoader.jpg "Interactive Tree Map")

## Performance

- For this project, I completed performance testing before and after applying fixes.
- Firstly, performance testing showed: logos and app images makes rendering and adding orders slow. 
    * Audited website performance load times with Google Chrome > devtools > Lighthouse tool for mobile
- Appled these fixes: optimization techniques used to quicken page load time, including
    * Minified JS files through https://javascript-minifier.com/ 
    * Compressed images, from PNG (lossless) to JPG (lossy) with Optimizilla https://imagecompressor.com/
    * Added image and JavaScript lazy loading
    * Updated code from synchronous to asyncs
    * Removed extraneous JavaScript libraries

## Contribution

ktrnthsnr

### ©️2020 ktrnthsnr
