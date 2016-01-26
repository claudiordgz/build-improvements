"use strict";
// Reveal JS includes
require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/solarized.css');

require('script!reveal.js/lib/js/head.min.js');
require('script!reveal.js/lib/js/classList.js');
require('script!reveal.js/lib/js/html5shiv.js');
require('script!reveal.js/js/reveal.js');

// Code coloring
require('script!reveal.js/plugin/highlight/highlight.js');
require('reveal.js/lib/css/zenburn.css');

// Zoom on Reveal
require('script!reveal.js/plugin/zoom-js/zoom.js');

// Bootstrap includes
// Tooltip requires Tether
require('script!tether/dist/js/tether.min.js');
require('bootstrap-loader');

// Entry point for Slides
require('./presentation/entry-point.js');


Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: 'slide'
});
hljs.initHighlightingOnLoad();