const db = require('../database/db');

class Activity {
  static getAll(callback) {
    db.all('SELECT * FROM activities ORDER BY due_date', callback);
  }

  static create(title, description, due_date, callback) {
    const sql = 'INSERT INTO activities (title, description, due_date) VALUES (?, ?, ?)';
    db.run(sql, [title, description, due_date], callback);
  }
}

module.exports = Activity;