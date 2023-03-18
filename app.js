const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongodb=require('./db/conn');
const User=require('./models/user');
const router=express.router();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));




const port = 3000

app.get('/signup', (req, res) => res.sendFile('C:/FTN/AreaScout/signup.html'));
  
app.post('/signup', (req, res) => {
    // Extract the user data from the request body
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const number = req.body.number;
  
    // Create a new user object
    const user = new User({
      email: email,
      password: password,
      name: name,
      number: number
    });
    user.save((err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error saving user to database');
        } else {
          console.log('User saved successfully!');
          res.send('User saved successfully!');
        }
      });
    });
    
    router.post('/login', (req, res) => {
        const { email, password } = req.body;
        User.findOne({ email }) // Find the user by email
    .then(user => {
      if (user && user.password === password) { // If the user exists and the password is correct
        res.render('dashboard'); // Send the user to the dashboard
      } else { // If the user doesn't exist or the password is incorrect
        res.render('signup'); // Send the user to the signup page
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});










app.listen(port, () => console.log(`Example app listening on port ${port}!`))