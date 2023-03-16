// const winston = require("winston");
const {createLogger, transports, format} = require("winston");// 실제 서비스 사용시 winstone-daily-rotate-file 을 사용하여 날짜별로 로그 관리하기
const {combine, timestamp, printf, label, simple, colorize} = format;

const printFormat = printf(({timestamp,label,level, message}) => {
    return `${timestamp} [${label}] ${level} : ${message}`
})

const printLogFormat = {
    file: combine(
        label({
            label: "백엔드 맛보기"
        }),
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd"
        }),
        printFormat
    ),
    console: combine(
        colorize(),
        simple()
    )
};


const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level:"info",
        format: printLogFormat.file
    }),
    console:  new transports.Console({
        level:"info",
        format: printLogFormat.console
    })
}

const logger = createLogger({
    transports: [opts.file],
});

if(process.env.NODE_ENV !== "production") {
    logger.add(opts.console)
}


module.exports = logger;

