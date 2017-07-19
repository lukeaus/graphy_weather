# Graphy Weather

See your 5 day weather forecast in graphs


## Getting Started
### Install
```bash
npm install
```

Create a new file ```src/secrets.js```
```javascript
export default {
  // get your key from from: https://home.openweathermap.org/api_keys
  API_KEY_OPEN_WEATHER_MAP: "MY_KEY_HERE"
};

```

Run
```bash
npm start
```


## Deploying (to AWS s3)
[Guide](https://hackernoon.com/how-to-deploy-a-live-reactjs-redux-website-in-under-10-minutes-cadf73cfc75a) to deploying React/Redux on s3

1. Create a new file ```/secrets.js```
```javascript
module.exports = {
  user: 's3-user',
  accessKeyId: 'MY-ACCESS-KEY-ID',
  key: 'MY-ACCESS-KEY',
  bucket: 'MY-S3-BUCKET-NAME',
};
```

2. Command line
```bash
// build
npm run build
// deploy
npm run deploy
```
