var express = require('express');
var mysql = require('mysql');

const router = express.Router();

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'job'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... ");    
} else {
    console.log("Error connecting database ... ");    
}
});

/* Register user. */
router.post('/register', function (req, res) {
    var firstName = req.body.firstName,
        lastName = req.body.lastName,
        username = req.body.username,
        password = req.body.password,
        email = req.body.email,
        address = req.body.address,
        country = req.body.country,
        userType = req.body.userType,
        queryByUsername = 'SELECT * FROM users where username = ?',
        queryByEmail = 'SELECT * FROM users where email = ?',
        queryRegisterUser = 'INSERT INTO users (first_name, second_name, username, password, email, address, country, user_type) VALUES ? ';

    connection.query(queryByUsername, [username], function (error, results) {
        if (error) throw error;
        if(results.length === 0) {
            connection.query(queryByEmail, [email], function (error, results) {
                if (error) throw error;
                if(results.length === 0) {
                    connection.query(queryRegisterUser, [[[firstName, lastName, username, password, email, address, userType, country]]], function (error, results) {
                        if (error) throw error;
                        else return res.send({ error: false, affectedRows: results.affectedRows });
                    });
                }
                else return res.send({ error: 30, data: results, message: 'Email already exists.' });
            });
        } else return res.send({ error: 20, data: results, message: 'Username already exists.' });
    });
});

/* Login user. */
router.post('/login', function (req, res) {
    var username = req.body.username,
        password = req.body.password,
        query = 'SELECT * FROM users where username = ? and password = ?'
    connection.query(query, [username, password], function (error, results) {
        if (error) throw error;
        if(results.length > 0) return res.send({ error: false, data: results, message: '' });
        else return res.send({ error: 10, data: results, message: 'Username/Password is incorrect' });
    });
});

/* GET jobs listing. */
router.get('/jobs', function (req, res) {
  connection.query('SELECT * FROM jobs', function (error, results) {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Job list.' });
  });
});

module.exports = router;