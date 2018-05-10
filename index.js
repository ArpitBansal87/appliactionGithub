var mongoose = require('mongoose');
var User = require('./user-model');
let credentialData = JSON.parse(fs.readFileSync('config/config.json'));
var connStr = credentialData.dbStringPrefix+credentialData.username+":"+credentialData.password+credentialData.dbDetails+credentialData.environmentDetails.contentDb+credentialData.dbStringSuffix;
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

// create a user a new user
var testUser = new User({
    username: 'arpitbansal',
    email:'test1@outlook.com',
    password: 'testingPass',
    name: 'Arpit Bansal'
});

// fetch user and test password verification
User.findOne({ username: 'arpitbansal' }, function(err, user) {
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

// // save user to database
// testUser.save(function(err) {
//     if (err) throw err;
//     process.exit(0);
// });
