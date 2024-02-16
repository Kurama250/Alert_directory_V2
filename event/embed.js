/*
Create by Kurama
Github : https://github.com/Kurama250
Licence : Creative commons - CC BY-NC-ND 4.0
*/

function createEmbed(message, { ip, date, method, url, fullUrl, userAgent }, { agent, osInfo }, ipInfo) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  let osVersion = '';
  const osVersionMatch = osInfo.match(/(\d+\.\d+(\.\d+)?)/);
  if (osVersionMatch) {
    osVersion = osVersionMatch[0];
    osInfo = osInfo.replace(osVersion, '').trim();
  }

  return {
    title: 'Alert scan directory !',
    description: message,
    color: parseInt(randomColor, 16),
    timestamp: new Date().toISOString(),
    fields: [
      { name: '-- Request --', value: `**IP : **${ip}\n**Date: **${date}\n**Method : **${method}\n**URL : **${url}\n**Full URL : **${fullUrl}\n**User-Agent : **${userAgent}` },
      { name: '-- System --', value: `**OS : **${osInfo} ${osVersion}\n**Navigator : **${agent.family}` },
      { name: '-- Info --', value: `**IP:** ${ipInfo.query}\n**IP Classes:** ${ipInfo.as}\n**Reverse DNS:** ${ipInfo.reverse}\n**Country:** ${ipInfo.country}\n**Capital:** ${ipInfo.capital}\n**State:** ${ipInfo.regionName}\n**City:** ${ipInfo.city}\n**Postal:** ${ipInfo.zip}\n**ISP / Organization:** ${ipInfo.isp}` }
    ]
  };
}

module.exports = { createEmbed };
