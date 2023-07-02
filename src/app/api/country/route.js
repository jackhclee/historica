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
    const now = new Date()
    console.log(req.url)
    const countries = [
      {code: "FR", label: "France", msg: "hello", price: 100, ts: now},
      {code: "CHN", label: "China", msg: "hello", price: 100, ts: now}
]
    logger.info(countries);
    return new Response(JSON.stringify(countries), {
        headers: { 'content-type': 'application/json' },
      })
}