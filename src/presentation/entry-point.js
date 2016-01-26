"use strict";

var slides = require('./slides.jade');
require('./slides.scss');

$('.slides').append(slides);
$('#newstalk-dependencies').attr("src", require("./images/newstalk-javascript-modules.png"));
$('#newstalk-footer').attr("src", require("./images/newstalk-footer.png"));
$('#webpack-logo').attr("src", require("./images/webpack-logo.png"));
$('#what-is-webpack').attr("src", require("./images/what-is-webpack.png"));
