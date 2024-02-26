import mysql from "mysql2";
import express from "express";
import db from "./models/index.js";
const { User } = db;

const app = express();

await db.sequelize.sync().then((req) => {
  app.listen(3001, () => {
    console.log("Server is running");
  });
});

app.get("/insert", (req, res) => {
  User.create({
    firstName: "AR Memon",
    age: 24,
  }).catch((err) => {
    console.log(err);
  });
  res.send("User Created");
});

// const pool = mysql.createPool({
//     // host: 'localhost',
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'admin123',
//     database: 'world'
// }).promise()

// const [rows] = await pool.query("Select code, name, continent, region, localname from country limit 2")
// // const rows = result[0]
// console.log(rows);
