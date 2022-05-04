const osc = require("osc");

const log = __logger.addLogger(__filename);

class OscManager {
    constructor() {
        this.udpPort = new osc.UDPPort({
            // This is the port we're listening on.
            localAddress: "127.0.0.1",
            localPort: 57121,

            // This is where sclang is listening for OSC messages.
            remoteAddress: "127.0.0.1",
            remotePort: 7000,
            metadata: true
        });

        this.connect();
    }

    connect() {
        log.debug('Start OSC Manager');
        this.udpPort.open();
    }

    _send(callback, messages) {
        log.debug(`Send data: '${messages.address}' to Resalum`);
        callback(true);
        this.udpPort.send(messages);
    }

    enableScene1(callback) {
        this._send(callback, {
            address: "/composition/columns/1/connect",
            args: [{ type: "i", value: 1 }]
        });
    }

    enableScene2(callback) {
        this._send(callback, {
            address: "/composition/columns/2/connect",
            args: [{ type: "i", value: 1 }]
        });
    }

    enableScene3(callback) {
        this._send(callback, {
            address: "/composition/columns/3/connect",
            args: [{ type: "i", value: 1 }]
        });
    }

    enableScene4(callback) {
        this._send(callback, {
            address: "/composition/columns/4/connect",
            args: [{ type: "i", value: 1 }]
        });
    }

    enableScene5(callback) {
        this._send(callback, {
            address: "/composition/columns/5/connect",
            args: [{ type: "i", value: 1 }]
        });
    }

    enableScene6(callback) {
        this._send(callback, {
            address: "/composition/columns/6/connect",
            args: [{ type: "i", value: 1 }]
        });
    }

    enableScene7(callback) {
        this._send(callback, {
            address: "/composition/columns/7/connect",
            args: [{ type: "i", value: 1 }]
        });
    }

    enableScene8(callback) {
        this._send(callback, {
            address: "/composition/columns/8/connect",
            args: [{ type: "i", value: 1 }]
        });
    }
}

module.exports.OscManager = new OscManager;