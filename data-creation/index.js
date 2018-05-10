'use strict';

var _ = require('underscore');
var mongoose = require('mongoose');
var Category = require('./category-model');
const fs = require ('fs');
let catData = fs.readFileSync('categoriesLoad.json');
let catJsonData = JSON.parse(catData);
let credentialData = JSON.parse(fs.readFileSync('../config/config.json'));

var connStr = credentialData.dbStringPrefix+credentialData.username+":"+credentialData.password+credentialData.dbDetails+credentialData.environmentDetails.contentDb+credentialData.dbStringSuffix;

mongoose.connect(connStr, function(err) {
    if (err) throw err;
    // console.log('Successfully connected to MongoDB');
    console.log("connection is successful");
    _.each(catJsonData,function(v){
      // console.log("output: before saving"+JSON.stringify(v));
      var saveCat = new Category(v);
      // console.log("savecat var: "+saveCat);
      saveCat.save(function(error){
        if(error){
          console.log(error);
          process.exit(1);
        }
        console.log("save successfull");
      });
    });
});
