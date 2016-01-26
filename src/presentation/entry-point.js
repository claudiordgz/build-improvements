"use strict";

var slides = require('./slides.jade');
require('./slides.scss');

$('.slides').append(slides);
$('#newstalk-dependencies').attr("src", require("./images/newstalk-javascript-modules.png"));
$('#newstalk-footer').attr("src", require("./images/newstalk-footer.png"));