import mysql from "mysql2";

// Create the db connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "my_shopping_list",
});

// Connect to db
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL server.");
});

// Example query
connection.query("SELECT * FROM your_table", (err, rows) => {
  if (err) throw err;
  console.log("Data received from Db:");
  console.log(rows);
});

connection.end();
