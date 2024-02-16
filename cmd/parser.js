/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

function parseLogLine(line) {
  const parts = line.split(' ');
  const ip = parts[0];
  const date = parts[3].replace('[', '');
  const method = parts[5].replace('"', '');
  const urlParts = parts[6].split('?');
  const url = urlParts[0];
  let fullUrl = urlParts[0];
  if (parts[7] && !parts[7].startsWith('"')) {
    fullUrl += '/' + parts[7];
  }
  const statusMatch = line.match(/\s(\d{3})\s/);
  const status = statusMatch ? statusMatch[1] : 'Unknown';
  const userAgent = line.split('"')[5];
  return { ip, date, method, url, fullUrl, status, userAgent };
}

module.exports = { parseLogLine };
