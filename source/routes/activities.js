const express = require('express');
const Activity = require('../models/Activity');
const router = express.Router();

router.get('/activities', (req, res) => {
  Activity.getAll((err, activities) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(activities);
  });
});

router.post('/activities', (req, res) => {
  const { title, description, due_date } = req.body;
  Activity.create(title, description, due_date, function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

module.exports = router;