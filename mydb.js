var mysql = require('mysql');

var con =  mysql.createConnection({
    host:'localhost',
    user:'vinodh',
    password:'viNODH12$'
});

con.connect(function(){
    console.log("connected");
    con.query("CREATE DATABASE mydb", function(err,result){
    console.log("Database Created");
    });
});