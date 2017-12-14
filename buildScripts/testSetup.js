//register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that mocha cant understand
require.extensions['.css'] = function() {};
