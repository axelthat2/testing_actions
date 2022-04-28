const mysql = require("mysql")

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 4000))
}

async function main() {
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

  await sleep()
}

main()
