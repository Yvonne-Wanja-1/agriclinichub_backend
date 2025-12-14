require('dotenv').config();
const express = require('express');
const db = require('./config/db');

const app = express();

db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
  } else {
    console.log('✅ MySQL connected successfully');
    connection.release();
  }
});

app.get('/', (req, res) => {
  res.send('Agri Clinic Hub API running 🟢');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
