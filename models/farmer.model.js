const db = require('../config/db');

exports.createFarmer = (data, callback) => {
  const sql = 'INSERT INTO farmers SET ?';
  db.query(sql, data, callback);
};

exports.getFarmers = (callback) => {
  db.query('SELECT * FROM farmers', callback);
};
