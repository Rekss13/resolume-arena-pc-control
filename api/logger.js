const winston = require('winston');
const { format } = winston;
const { combine, label, json, timestamp } = format;

class Log {
    constructor(){
        this.level = 'debug';
    };

    addLogger(component){
        let category = require('path').basename(component);
        winston.loggers.add(category, {
            format: combine(
                label({ label: category }),
                timestamp(),
                json()
            ),
            transports: [
                new winston.transports.File({
                    level: this.level,
                    filename: `${process.cwd()}/resalumControl.service.log`,
                    maxsize: 1024 * 1024 * 10,
                    maxFiles: 2,
                    tailable: true
                }),
                new winston.transports.Console({ level: this.level })
            ]
        });
        return winston.loggers.get(category);
    };
}

module.exports = new Log();