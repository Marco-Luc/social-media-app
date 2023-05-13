import mysql from "mysql";

//Connect to our mysql database

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "social-media-app",
});
