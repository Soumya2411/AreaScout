const fetch = require('node-fetch');
const express = require('express');
const satelize = require('satelize');
const app = express();

const port = 3000;


app.post('/dashboard/location', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  satelize.satelize({ip}, (err, geoData) => {
    if (err) {
      console.error(err);
      res.status(400).json({ error: 'Unable to get location data' });
    } else {
      res.json({
        region: geoData.region,
        country: geoData.country,
        city: geoData.city,
        latitude: geoData.latitude,
        longitude: geoData.longitude
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
