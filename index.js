const mysql = require("mysql")

function createConnection() {
  return new Promise((resolve, reject) => {
    const con = mysql.createConnection({
      host: "db",
      port: 3306,
      user: "root",
      password: "",
      database: "database",
    })

    con.connect(function (err) {
      if (err) {
        reject("error connecting: " + err.stack)
        return
      }

      resolve("connected as id " + con.threadId)
    })
  })
}

async function main() {
  try {
    console.log(await createConnection())
  } catch (e) {
    console.log(e)
  }
}

main()
