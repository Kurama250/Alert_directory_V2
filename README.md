<h1 align="center">Directory | files scanner detector (Nginx)</h1>
<em><h5 align="center">(Programming Language - Node.js | Shell)</h5></em>

<p align="center">
  <img src="https://img.shields.io/github/stars/Kurama250/Alert_directory_V2">
  <img src="https://img.shields.io/github/license/Kurama250/Alert_directory_V2">
  <img src="https://img.shields.io/github/repo-size/Kurama250/Alert_directory_V2">
  <img src="https://img.shields.io/badge/stability-stable-green">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/nginx-v1.18.0-brightgreen">
  <img src="https://img.shields.io/npm/v/module-name">
  <img src="https://img.shields.io/npm/v/fs?label=fs">
  <img src="https://img.shields.io/npm/v/axios?label=axios">
  <img src="https://img.shields.io/npm/v/tail?label=tail"><br>
  <img src="https://img.shields.io/npm/v/ua-parser-js?label=ua-parser-js">
  <img src="https://img.shields.io/npm/v/useragent?label=useragent">
  <img src="https://img.shields.io/npm/v/systeminformation?label=systeminformation">
</p>

# Tutorial to install the bot ! For LINUX (VPS or Dedicated Server)

## 1 - on Terminal

<h5>A) Auto installer</h5>

- Run command :

```shell script
bash <(curl -s https://raw.githubusercontent.com/Alert_directory_V2/main/setup.sh)
```
<h5>B) Manual installer</h5>

```shell script
apt update && apt upgrade -y
apt install npm nodejs git -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
apt-get install -y nodejs
```

```shell script
git clone https://github.com/Kurama250/Alert_directory_V2.git
cd Alert_directory_V2/
npm install fs axios tail ua-parser-js useragent systeminformation
npm install pm2 -g
```
## 2 - on Terminal

```shell script
nano config.json
```

- And you also change this line :

```json
  "discordWebhookURL": "YOUR_WEBHOOK",
```

- After doing this, press CTRL + X and you press Y and ENTER then you do the following commands !

## 3 - on Terminal

```shell script
pm2 start main.js
```
- Demo : 

![alt text](https://github.com/Kurama250/Alert_directory_V2/blob/main/alert.png?raw=true)

<h3 align="center">If you like this repository don't hesitate to give it a star ⭐ !</h3>
<h1 align="center">Then it's the end you have started the bot have fun !</h1>
