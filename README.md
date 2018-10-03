# H Card Builder

## Preview

https://madwester.github.io/h-card-build/

## Usage

To run the project please clone repo and run npm start from your console

### General usage

To use this app you need to install NodeJS and NPM.

### Clone

```console
$ git clone https://github.com/madwester/h-card-build.git
``` 

```console
$ cd h-card-build
```

### Install 
```console
$ npm install
```

### Run dev server
```console
$ npm start
```

### TODOS / Improvements
* Server side rendering for SEO
* Testing of each individual component as well as an overall test of the entire app. 

### Design choices
* Ambivalent if the main-container containing both form and card preview should take up the whole screen or not
* The form and card preview containers are stacked on top of each other on screens smaller than 900px

### Library choices 
* create-react-app for efficiency 
* SASS for simplicity and better looking syntax

### Assumptions and thoughts
* Form and design works in the 3 requested browsers: Google Chrome, Internet Explorer and Firefox. 
* vCard classes has been added where needed in card preview
* I wasn't sure how to set up gh-pages with webpack and as I had already spent more than 5 hours of the project I decided to do it the way I know (gulp)
* Time spent on the project: Approximately 5 hours