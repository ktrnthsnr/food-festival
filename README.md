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


## Technology

- Performance monitoring tools and plugins: Google Lighthouse, Google DevTools, webpack bundler, webpack-bundle-analyzer, file-loader, image-webpack-loader, SW-precache-webpack, webpack-PWA-manifest plugins
- Software: MongoDB, Mongoose JS, Node.js, npm, Express.js, JavaScript, ES6, HTML, CSS

## Installations

- For local installations, below are various steps required.
- Prereq for your desktop: install VSCode, Node.js, and MySQL http://dev.mysql.com/downloads/
- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Install all components listed within the package.json file for npm
- $ `npm i`
-
- For custom installations here are each installation component
- To create a new package.json, start with initializing npm
- $ `npm init --y` or $ `npm install`
- Install webpack and webpack CLI
- $ `npm i -D webpack webpack-cli`
- Check webpack is installed, checking for the version
- $ `webpack -v`
- If you received this error, `webpack: command not found` resolve by running this
- $ `npm run webpack -v`
- Install the jQuery package
- $ `npm i jQuery`
- Install bootstrap
- $ `npm i bootstrap`
- Install popper.js
- $ `npm i popper.js`
- Install the webpack-bundle-analyzer
- $ `npm install -D webpack-bundle-analyzer`

## Usage

- Clone the repo to your desktop, complete the installation.
Then the app is ready for deployment to development. 
To execute the webpack, run in the bash terminal,
- $ `npm run build`
- 
- This will start An interactive tree map will render a report.html in the browser locally under c:/food-festival/dist/report.html, showing each bundle size being loaded.  Here is the report:
- ![Interactive Tree Map](./report_sample.jpg "Interactive Tree Map")

## Performance
- Completed performance testing before and after applying related fixes.
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
