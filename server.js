const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const routes = require("./routes");
const connection = require("./src/connection");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
  res.sendStatus(200);
  } else {
  next();
  }
  };
  
  app.use(allowCrossDomain);


// Add routes, both API and view
app.use(routes);

// Connect to the MySQL DB
// mysql.createConnection(process.env.JAWSDB_URL || "mysql://ug1re3rnjcjrufmd:lzc67m7oecd5t2kg@qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/z2yluvu8hywbkv3o");
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL || "mysql://ug1re3rnjcjrufmd:lzc67m7oecd5t2kg@qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/z2yluvu8hywbkv3o");
// } else {

// connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "mlm123",
//   database: "burners_db"
// });
// }


connection.connect(function(err){
  if (err) {
      console.error("Error connecting: " + err.stack);
      return;
  }
  console.log("Connected as id "+ connection.threadId);
  connection.query("SELECT * from players", function(err, res){
    if (err) console.log(err);

  })
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
