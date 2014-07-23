var fs = require('fs')
var mongoose = require('mongoose');
global.DB = mongoose.connect('mongodb://localhost/mongoose-api-query');
var Monster = require('./model');
var monsters = require('./fixtures');

Monster.collection.remove({}, function (err) {
	var addMonsters = function (monsters) {
	  var n = new Monster(monsters.shift());
	  n.save(function(){
	    if (monsters.length === 0) {
	      process.exit()
	    } else {
	      addMonsters(monsters);
	    }
	  });
	}

	addMonsters(monsters);
});