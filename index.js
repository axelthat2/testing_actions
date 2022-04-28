const mysql = require("mysql")

const con = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "database",
})

con.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack)
    return
  }

  console.log("connected as id " + connection.threadId)
})
