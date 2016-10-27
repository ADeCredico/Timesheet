'use strict';

var firebase = require('firebase');

firebase.initializeApp({
	serviceAccount: "./timesheet-a437752c1332.json",
	databaseURL: "https://timesheet-dba46.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = firebase.database();

let setRef = function(path) {
	if(typeof(path) === 'string') {
		var ref = db.ref(path);
	}
};

db.pushToDb = function(body) {
	return ref.push().set(body);
};

module.exports = db;


// "CalVet/K_Dorsey/9_15/5/0"