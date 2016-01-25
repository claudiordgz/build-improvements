"use strict";

var slides = require('./slides.jade');
require('./slides.css');

$('.slides').append(slides);
$('#newstalk-dependencies').attr("src", require("./images/newstalk-javascript-modules.png"));
$('#newstalk-footer').attr("src", require("./images/newstalk-footer.png"));