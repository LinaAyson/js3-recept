const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "myrecipes"
});

app.get('/recipes', (req, res) => {
    db.query("SELECT * FROM recipes", function (err, result, fields) {
        if (err) throw err;
        res.send(result)
    });
});

app.get('/recipes/:id', (req, res) => {
    db.query("SELECT * FROM recipes WHERE id = " + req.params.id + " LIMIT 1", function (err, result, fields) {
        if (err) throw err;
        res.send(result)
    });
});

app.post('/recipes/delete/:id', (req, res) => {
    db.query("DELETE FROM recipes WHERE id = " + req.params.id, function (err, result, fields) {
        if (err) throw err;
        res.send(result)
    });
});

app.post('/api/insert', (req, res) => {
    console.log(req.body.foodName);
    const foodName = req.body.foodName;
    const foodChef = req.body.foodChef;
    const sqlInsert = "INSERT INTO recipes (foodName, foodChef) VALUES (?,?);"
    db.query(sqlInsert, [foodName, foodChef], (err, result) => {

    });

});

app.listen(3002, () => {
    console.log("Running on port 3002");
});

