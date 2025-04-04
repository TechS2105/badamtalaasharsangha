import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import env from 'dotenv';
import bcrypt from 'bcrypt';

const port = 3000;
const app = express();
env.config();

const db = new pg.Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('index.ejs');

});

app.get('/resubmission', (req, res) => {


    res.render('checksubmission.ejs')

});

app.get('/memberdetails', async (req, res) => {

    let result = await db.query("SELECT * FROM members");
    let getAllMembers = [];
    getAllMembers = result.rows;
    res.render("membersdetails.ejs", { members: getAllMembers });

});

app.get('/delete/:id', async (req, res) => {
    
    let id = req.params.id;
    await db.query("DELETE FROM members where id = $1", [id]);
    res.redirect("/memberdetails");

});

app.get("/login", (req, res) => {

    res.render("login.ejs");

});

app.get("/register", (req, res) => {

    res.render("register.ejs");

});

app.post("/thankyou", async (req, res) => {

    try {
        const name = req.body.name;
        const email = req.body.email;

        const checkmembers = await db.query("SELECT * FROM members WHERE name = $1", [name]);

        if (checkmembers.rows.length > 0) {
         
            res.redirect('/resubmission');

        } else {
        
            const result = await db.query(
                "INSERT INTO members(name, email) VALUES ($1, $2) RETURNING *",
                [name, email]
            );
            let newMember = [];
            newMember = result.rows[0];
            res.render("thankyou.ejs", { member: newMember });

        }
    } catch (error) {
        
        console.error("There have something error in this file");

    }

});

app.listen(port, () => {

    console.log(`server is started on ${port} port`);

})