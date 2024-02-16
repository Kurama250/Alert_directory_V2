/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const fs = require('fs');
const Tail = require('tail').Tail;
const axios = require('axios');
const { parseLogLine } = require('./cmd/parser');
const { sendRandomColorAlert } = require('./cmd/alert');
const { createEmbed } = require('./event/embed');
const { logFilePath } = require('./config/url.json');
const config = require('./config/config.json');
const detectConfig = require('./config/detect.json');

const tail = new Tail(logFilePath);

console.log('---------------------------------------------------------');
console.log('                  Alert_directory_V2                     ');
console.log('            Create by github.com/Kurama250               ');
console.log('Licence : Creative commons - CC BY-NC-ND 4.0 by Kurama250');
console.log('---------------------------------------------------------');

tail.on('line', (line) => {
  for (const file of detectConfig.sensitiveFiles) {
    if (line.includes(file)) {
      console.log(`Suspicious scan detected ! : ${line}`);
      const { ip, date, method, url, fullUrl, userAgent } = parseLogLine(line);
      sendRandomColorAlert(`Suspicious scan detected ! : ${line}`, { ip, date, method, url, fullUrl, userAgent });
      break;
    }
  }
});

tail.on('error', (error) => {
  console.error('Error while tailing the log file :', error);
});