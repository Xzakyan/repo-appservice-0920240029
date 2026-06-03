const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  console.log('Halaman utama diakses');
  res.send('<h1>Praktikum Azure App Service</h1><p>Aplikasi berjalan.</p>');
});

app.get('/status', (req, res) => {
  console.log('Endpoint /status diakses');
  res.json({
    status: 'running',
    service: 'Azure App Service',
    timestamp: new Date()
  });
});

app.get('/profil', (req, res) => {
  console.log('Endpoint /profil diakses');
  res.json({
    mataKuliah: 'Komputasi Awan',
    topik: 'Serverless Azure'
  });
});

app.get('/waktu', (req, res) => {
  console.log('Endpoint /waktu diakses');
  res.json({
    service: 'Azure App Service',
    endpoint: '/waktu',
    waktuServer: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
