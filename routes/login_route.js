
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
       const available = ['student', 'admin']
       const{role} = req.body

       // Safelist roles to avoid SQL injection
       if (!available.includes(role)) {
        return res.status(400).json({ error: 'Invalid role' });
        }

       const { name, email, password } = req.body.form;
       const table = `${role}_table`
       
       const sql = `SELECT * FROM ${table} WHERE email = ? AND ${role}_password = ?;`
       
       db.query(sql, [email, password], (err, results) => {
              if (err) {
              return res.status(500).json({ error: 'Query failed', details: err });
              }
              res.json(results);
              console.log(results)
       });
});

module.exports = router;

