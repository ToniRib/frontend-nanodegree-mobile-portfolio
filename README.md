## Website Performance Optimization portfolio project

For the Udacity Front End Web Developer Nanodegree project 4, Udacity provided an online portfolio with specific bugs that needed to be optimized. In particular, the goal was to optimize the critical rendering path to make the main page render as quickly as possible when scrolling by applying the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

Note: You can find a live version of this site at [http://tonirib.github.io/frontend-nanodegree-mobile-portfolio/dist/index.html](http://tonirib.github.io/frontend-nanodegree-mobile-portfolio/dist/index.html). This site uses the production code created from the Grunt tasks.

##### Dependencies

This project requires Grunt and ngrok in order to run the Gruntfile.

##### Locations

All source (dev) code is located in the src directory, while production code generated using Grunt is located in the dist directory.

##### License

All code is provided under the MIT license.

###Part 1: Optimize PageSpeed Insights score for index.html

The goal of this section was to achieve a mobile and desktop score of 90 or greater using [Google's PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

####The following optimizations were provided by Toni Rib:

* Created a Gruntfile.js to optimize images, minify the files, inline CSS into the HTML, and use ngrok and pagespeed to measure performance
* Changed the HTML link attribute to include a media="print" attribute for the print.css stylesheet in .html files
* Changed the call to img/profilepic.jpg to be img/build/profilepic.jpg in index.html
* Moved the Google fonts to be non-render blocking by asynchronously loading it at the bottom of the file
* Used imagemagick to resize the pizzeria.jpg image since Grunt kept having an error with this image
* Updated 'querySelectorAll' to 'getElementsByClassName' which is faster

#### Running Grunt to Produce Production Files

This section assumes the user is working on MAC OS X.

1. After cloning the project into a local respository using Git, navigate to the main project location.
2. If you are only interested in generating the production code, simply run the command 'grunt' to run all optimizations in the Gruntfile. Production code will be saved in the dist directory.
3. If you also want to check PageSpeed Insight scores using ngrok, perform the following steps:
	* Open a second tab from the Terminal and navigate to the dist directory. Run the command 'python -m SimpleHTTPServer 8080' to host the site on the local server at port 8080.
	* Go back to the first tab in the Terminal and run the 'grunt' command. The PageSpeed Insights scores will now be displayed.
4. To view the pages from the production code, navigate to the dist directory and open index.html in your browser.

###Part 2: Optimize Frames per Second in pizza.html

The goal of this section was to optimize views/pizza.html, by modifying views/js/main.js until the frames per second rate is 60 fps or higher when scrolling. In addition, the slider than changes the pizza's sizes needed to be optimized so that pizzas changed sizes in under 5ms.

####The following optimizations were provided by Toni Rib:

* In the changePizzaSizes function (line 450) I moved repeated variables outside of the for loop. In addition, I updated 'querySelectorAll' to 'getElementsByClassName' which is faster.
* In line 481, I moved the pizzaDivs variable outside of the for loop.
* In the updatePositions function (line 518) I moved 'document.body.scrollTop' outside of the for loop, calculated items.length outside of the for loop, and declared the phase variable outside of the loop as well.
* Used the screen size (line 543) to calculate the number of background pizzas to create instead of using the static # of 200, declared the elem variable outside of the for loop, and changed querySelector to getElementById which is faster.