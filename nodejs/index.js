
var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
   res.send('Hello World');
});
app.get("/xxx",function(req,res){
	res.send("hello");
});
app.get("/hahaha",function(req,res){
	var hahaha ={
		status: 1,
		message: "Success!",
		data:[
		{
			ten: "Tran Van A",
			namsinh: 1999,
			dienthoai: 123451,
			lop: "A1",
			diemthi:"5"
		},
		{
			ten: "Nguyen Van B",
			namsinh: 1998,
			dienthoai: 123452,
			lop: "A2",
			diemthi:"6"
		},
		{
			ten: "Pham Van C",
			namsinh: 1999,
			dienthoai: 123453,
			lop: "A1",
			diemthi:"5"
		},
		{
			ten: "Tran Minh D",
			namsinh: 1997,
			dienthoai: 123454,
			lop: "A3",
			diemthi:"7"
		},
		{
			ten: "Tran Van E",
			namsinh: 1998,
			dienthoai: 123455,
			lop: "A4",
			diemthi:"9"
		},
		{
			ten: "Truong Fu",
			namsinh: 1997,
			dienthoai: 123456,
			lop: "A1",
			diemthi:"8"
		},
		]
	};
	res.send(hahaha);
});
var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Ung dung Node.js dang hoat dong tai dia chi: http://%s:%s", host, port)
});