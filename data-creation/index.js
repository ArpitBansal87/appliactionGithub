'use strict';

var _ = require('underscore');
var mongoose = require('mongoose');
var Category = require('./category-model');
const fs = require ('fs');
let catData = fs.readFileSync('categoriesLoad.json');
let catJsonData = JSON.parse(catData);

var connStr = 'mongodb://localhost:27017/test';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    // console.log('Successfully connected to MongoDB');
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
