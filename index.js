const mysql = require("mysql")

function createConnection() {
  return new Promise((resolve, reject) => {
    const con = mysql.createConnection({
      host: "db",
      port: 3306,
      user: "root",
      password: "root",
      database: "database",
    })

    con.connect(function (err) {
      if (err) {
        reject("error connecting: " + err.stack)
        return
      }

      resolve("connected as id " + connection.threadId)
    })
  })
}

async function main() {
  await createConnection()
}

console.log(main())
