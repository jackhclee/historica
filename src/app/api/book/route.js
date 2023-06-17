import { NextResponse } from 'next/server'
const winston = require('winston');

const papertrail = new winston.transports.Http({
  host: 'logs.collector.solarwinds.com',
  path: '/v1/log',
  auth: { username: new String(''), password: '5TgyqPpzUhYKbGt7xCI_LC7omCTf' },
  ssl: true,
});

const logger = winston.createLogger({
  transports: [papertrail],
});


export const GET = (req) => {
    logger.info({msg: "hello", price: 100});
    return new NextResponse(JSON.stringify({msg: "hello"}), {
        headers: { 'content-type': 'application/json' },
      })
}