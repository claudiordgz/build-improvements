"use strict";
require('reveal.js/css/reveal.css');
require('reveal.js/css/theme/solarized.css');
require('reveal.js/lib/css/zenburn.css');

require('script!reveal.js/js/reveal.js');
require('script!reveal.js/plugin/highlight/highlight.js');
require('script!tether/dist/js/tether.min.js');
require('bootstrap-loader');

require('./presentation/entry-point.js');


Reveal.initialize({ backgroundTransition: 'zoom' });
hljs.initHighlightingOnLoad();