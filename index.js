require('dotenv').config();
const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser');
const farmerRoutes = require('./routes/farmer.routes');

const app = express();
app.use(bodyParser.json());

db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
  } else {
    console.log('✅ MySQL connected successfully');
    connection.release();
  }
});

// TEST ROUTES
app.use('/api/farmers', farmerRoutes);

app.get('/', (req, res) => {
  res.send('Agri Clinic Hub API running 🟢');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
