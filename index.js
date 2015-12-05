'use strict';
const Controller = require('./lib/controller');

module.exports.register = function (server, options, next) {


    server.route(
        { method: 'GET', path:'/hello', config: Controller.home }
    );
    next();
};

module.exports.register.attributes = {
    pkg: require('./package.json'),
    dependencies: ['sticky_auth']
};
