'use strict';
module.exports.home = {
    auth: 'simple',
    handler: function (request, reply){

        reply({ hello: request.auth.credentials.username });
    }
};
