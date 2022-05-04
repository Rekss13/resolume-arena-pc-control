'use strict';

const shutDownWin = require('./shutDownWin');
const { OscManager } = require('./OscManager');
const resolume = require('./resolumeStart');

module.exports.shutdown = function (req, res) {
    res.send(true);
    shutDownWin.shutdown(20, true);
};

module.exports.reboot = function (req, res) {
    res.send(true);
    shutDownWin.reboot(20, true);
};

module.exports.resolumeLoadApp = function (req, res) {
    res.send(true);
    resolume.load();
};

module.exports.resolumeScene1 = function (req, res) {
    OscManager.enableScene1(result => res.send(result));
};

module.exports.resolumeScene2 = function (req, res) {
    OscManager.enableScene2(result => res.send(result));
};

module.exports.resolumeScene3 = function (req, res) {
    OscManager.enableScene3(result => res.send(result));
};

module.exports.resolumeScene4 = function (req, res) {
    OscManager.enableScene4(result => res.send(result));
};

module.exports.resolumeScene5 = function (req, res) {
    OscManager.enableScene5(result => res.send(result));
};

module.exports.resolumeScene6 = function (req, res) {
    OscManager.enableScene6(result => res.send(result));
};

module.exports.resolumeScene7 = function (req, res) {
    OscManager.enableScene7(result => res.send(result));
};

module.exports.resolumeScene8 = function (req, res) {
    OscManager.enableScene8(result => res.send(result));
};