/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

const axios = require('axios');
const useragent = require('useragent');
const { createEmbed } = require('../event/embed');
const config = require('../config/config.json');

async function sendRandomColorAlert(message, { ip, date, method, url, fullUrl, userAgent }) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  const agent = useragent.parse(userAgent);
  const osInfo = agent.os.toString();

  try {
    const ipInfo = await axios.get(`http://ip-api.com/json/${ip}`);

    const embed = createEmbed(message, { ip, date, method, url, fullUrl, userAgent }, { agent, osInfo }, ipInfo.data);

    await axios.post(config.discordWebhookURL, {
      embeds: [embed]
    });

    console.log('Alert sent successfully.');
  } catch (error) {
    console.error('Error sending alert :', error);
  }
}

module.exports = { sendRandomColorAlert };