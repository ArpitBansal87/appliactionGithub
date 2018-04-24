var mongoose = require('mongoose');
var User = require('./user-model');

var connStr = 'mongodb://localhost:27017/test';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

// create a user a new user
var testUser = new User({
    username: 'jmar1777',
    email:'test1@outlook.com',
    password: 'testingPass'
});


// fetch user and test password verification
User.findOne({ username: 'jmar777' }, function(err, user) {
    if (err) throw err;

    // test a matching password
    user.comparePassword('Password', function(err, isMatch) {
        if (err) throw err;
        console.log('Password:', isMatch); // -&gt; Password: true
    });

    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -&gt; 123Password: false
    });
     
});

// save user to database
/*testUser.save(function(err) {
    if (err) throw err;
    process.exit(0);
});*/
