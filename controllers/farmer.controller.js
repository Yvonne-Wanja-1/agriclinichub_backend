const Farmer = require('../models/farmer.model');

exports.addFarmer = (req, res) => {
  Farmer.createFarmer(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true, id: result.insertId });
  });
};

exports.getAllFarmers = (req, res) => {
  Farmer.getFarmers((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};
