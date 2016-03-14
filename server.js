var express = require('express'),
    app = express(),
    mongodb = require('mongodb').MongoClient,
    mongoUrl = "mongodb://localhost:27017/test";

app.get('/', function(req, res){
  //res.send("Hello World");
  mongodb.connect(mongoUrl, function(err, db){
    if(err) res.send("Error while connection to db");
    var result = ["test"];
    db.collection('testCol').find().toArray(function(err, doc){
      result.push(doc);
      res.send(result + "");
    });

    
    db.close();
  });
});

app.listen('8080', '0.0.0.0', function(){
  console.log("Server is listening on 8080:0.0.0.0");
})

// console.log("hello world from nitrous online ide");
// var http = require("http");
// var server = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write("<html>");
//   response.write("<head>");
//   response.write("<title>Hello World Page</title>");
//   response.write("</head>");
//   response.write("<body>");
//   response.write("Hello World!");
//   response.write("</body>");
//   response.write("</html>");
//   response.end();
// });

// server.listen(8080, "0.0.0.0");
// console.log("Server is listening");