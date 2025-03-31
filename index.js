import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import env from 'dotenv';

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

})

app.post("/thankyou", async (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    const checkmembers = await db.query("SELECT * FROM members WHERE name = $1", [name]);

    if (checkmembers.rows.length > 0) {
         
        res.redirect('/resubmission');

    }else {
        
        const result = await db.query(
          "INSERT INTO members(name, email) VALUES ($1, $2) RETURNING *",
          [name, email]
        );
        let newMember = [];
        newMember = result.rows[0];
        res.render("thankyou.ejs", { member: newMember });

    }

});

app.listen(port, () => {

    console.log(`server is started on ${port} port`);

})