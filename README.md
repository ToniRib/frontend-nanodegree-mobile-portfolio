## Website Performance Optimization portfolio project

For the Udacity Front End Web Developer Nanodegree project 4, Udacity provided an online portfolio with specific bugs that needed to be optimized. In particular, the goal was to optimize the critical rendering path to make the main page render as quickly as possible by applying the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

###Part 1: Optimize PageSpeed Insights score for index.html

The following optimizations were provided by Toni Rib:

* Created a Gruntfile.js to optimize images, minify the files, and use ngrok and pagespeed to measure performance
* Changed the HTML link attribute to include a media="print" attribute for the print.css stylesheet in .html files
* Changed the call to img/profilepic.jpg to be img/build/profilepic.jpg in index.html
* Minified css files
* Moved the Google fonts to be non-render blocking by asynchronously loading it at the bottom of the file.
* Used imagemagick to resize the pizzeria.jpg image since Grunt keeps having an error with this image
* Updated 'querySelectorAll' to 'getElementsByClassName' which is faster.

###Part 2: Optimize Frames per Second in pizza.html

The goal of this section was to optimize views/pizza.html, by modifying views/js/main.js until the frames per second rate is 60 fps or higher when scrolling. In addition, the slider than changes the pizza's sizes needed to be optimized so that pizzas changed sizes in under 5ms.

The following optimizations were provided by Toni Rib:

* In the changePizzaSizes function (line 450) I moved repeated variables outside of the for loop. In addition, I updated 'querySelectorAll' to 'getElementsByClassName' which is faster.
* In the updatePositions function (line 509) I moved 'document.body.scrollTop' outside of the for loop.
* Used the screen size (line 537) to calculate the number of background pizzas to create instead of using the static # of 200.