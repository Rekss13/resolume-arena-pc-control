'use strict';

module.exports = function (app) {

    const controller = require('./controller');

    app.route('/shutdown')
        .get(controller.shutdown);
    app.route('/reboot')
        .get(controller.reboot);

    app.route('/resolume/load')
        .get(controller.resolumeLoadApp);
    app.route('/resolume/scene1')
        .get(controller.resolumeScene1);
    app.route('/resolume/scene2')
        .get(controller.resolumeScene2);
    app.route('/resolume/scene3')
        .get(controller.resolumeScene3);
    app.route('/resolume/scene4')
        .get(controller.resolumeScene4);
    app.route('/resolume/scene5')
        .get(controller.resolumeScene5);
    app.route('/resolume/scene6')
        .get(controller.resolumeScene6);
    app.route('/resolume/scene7')
        .get(controller.resolumeScene7);
    app.route('/resolume/scene8')
        .get(controller.resolumeScene8);
};
