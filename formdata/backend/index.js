const Express = require("express");
const fs = require('fs');
const path = require('path');


require("./config");
const database = require("./coneection");


const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    const Filepath = path.join(__dirname, '../index.html');
    fs.readFile(Filepath, 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading the file:", err);
            res.status(500).send('Internal server error');
        }
        res.send(data)

    })
})

app.post("/formdata", (req, res) => {
    console.log(req.body)
    let data = new database(req.body);
    const result = data.save();
    
    res.send("submmitted sucessfully :-)")
})


app.listen(5000);
