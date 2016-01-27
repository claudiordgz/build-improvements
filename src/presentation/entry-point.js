"use strict";

var slides = require('./slides.jade');
require('./slides.scss');
require('./slides-grid--list.scss');
require('./slides-gallery--images.scss');

$('.slides').append(slides);
$('#newstalk-dependencies').attr("src", require("./images/newstalk-javascript-modules.png"));
$('#newstalk-footer').attr("src", require("./images/newstalk-footer.png"));
$('#webpack-logo').attr("src", require("./images/webpack-logo.png"));
$('#what-is-webpack').attr("src", require("./images/what-is-webpack.png"));

$('#logo--react').attr("src", require("./images/frameworks/logo--react.png"));
$('#logo--riot').attr("src", require("./images/frameworks/logo--riot.png"));
$('#logo--polymer').attr("src", require("./images/frameworks/logo--polymer.svg"));
$('#logo--cyclejs').attr("src", require("./images/frameworks/logo--cyclejs.png"));

$('#grid--list').attr("src", require("./images/k99online/grid--list.png"));

$('#gallery--images').attr("src", require("./images/k99online/gallery--images.png"));
$('#top-photo-100p').attr("src", require("./images/k99online/100p-top-photo.png"));

$('#newstalk-component').attr("src", require("./images/k99online/newstalk-component.png"));
$('#newstalk-podcast-player').attr("src", require("./images/k99online/newstalk-podcast-player.png"));

$('#polymer-compatibility').attr("src", require("./images/frameworks/polymer-compatibility.png"));

