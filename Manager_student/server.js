var express = require("express");
var app = express();

app.use(express.static('public'));

app.listen("3003", function(){
	console.log("hahaha")
});

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://caominhquan:minhquan1989@ds052968.mlab.com:52968/caominhquan';

MongoClient.connect(url, function (err, db) {
	if (err) {
	    console.log('khong vao duoc', err);
	} else {
	    
	    console.log('duoc roi', url);
	    var database = db.db();
	    var collection = database.collection("students");

	    
	    // var student1 = {
	    // 	id: 1,
	    // 	student_name: "Le Van A",
	    // 	mssv: "ms01",
	    // 	birthday: "2002-12-03",
	    // 	class_id: 1,
	    // 	gender: 1
	    // };
	   //  var student4 = {
	   //  	id: 4,
	   //  	student_name: "Lam Bao Han",
	   //  	mssv: "ms04",
	   //  	birthday: "2001-2-3",
	   //  	class_id: 3,
	   //  	gender: 2
	   //  };


	   //  collection.insert([student4], function (err, result) {
	   //    	if (err) {
	   //     	console.log(err);
	   //    	} else {
	   //     console.log('da them vao');
	   //    	}
	   //  	db.close();
	  	// });
 
	 //    collection.update({id:1}, {$set: {student_name: 'Le Van Luyen', birthday: '1999-1-12'}}, function (err, numUpdated) {
  // 			if (err) {
  //   			console.log(err);
  // 			} else if (numUpdated) {
  //   			console.log('ok');
  // 				} else {
  //   				console.log('khong tim thay');
  // 				}
 	// 		db.close();
		// });

		// collection.find({id:1}).toArray(function (err, result) {
  //     		if (err) {
  //       		console.log(err);
  //     		} else if (result.length) {
  //       		console.log('Found:', result);
  //     			} else {
  //       			console.log('No document(s) found with defined "find" criteria!');
  //     			}
  //     //Close connection
  //     		db.close();
  //   	});

	 //  	db.close();

	  	app.get('/list_students', function(req,res){
	  		collection.find({}).toArray(function(err,result){
	  			if (err){
	  				res.send({
	  					status: 0,
	  					message: 'fail'
	  				});
	  			} else {
	  				if(result.length){
	  					res.send({
	  						status: 1,
	  						message: 'seccess',
	  						data: result
	  					});
	  				}else{
	  					res.send({
	  						status: 1,
	  						message: 'success',
	  						data: []
	  					});
	  				}
	  			}
	  		});
	  	});
	}
});