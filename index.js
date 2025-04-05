import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

const port = 3000;
const app = express();
env.config();

const db = new pg.Client({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.TOPSECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {

      maxAge: 1000 * 60 * 60 * 24

    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/resubmission", (req, res) => {
  res.render("checksubmission.ejs");
});

// app.get('/memberdetails', async (req, res) => {

//     let result = await db.query("SELECT * FROM members");
//     let getAllMembers = [];
//     getAllMembers = result.rows;
//     res.render("membersdetails.ejs", { members: getAllMembers });

// });

app.get("/delete/:id", async (req, res) => {
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

app.get('/logout', (req, res) => {

  req.logout(function (err) {
    
    if (err) {
      
      console.log(err);

    } else {
      
      res.redirect('/login');

    }

  })

})

app.get("/memberdetails", async (req, res) => {
    
  if (req.isAuthenticated()) {
    const result = await db.query("SELECT * FROM members");
    let getAllMembers = [];
    getAllMembers = result.rows;
    res.render("membersdetails.ejs", { members: getAllMembers });
  } else {
    res.redirect("/login");
  }
});

app.post("/register", async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  const checkUser = await db.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);

  if (checkUser.rows.length > 0) {
    res.redirect("/login");
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        console.log(err);
      }

      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
          console.log(err);
        }

        const result = await db.query("INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *", [name, email, hash])
        let user = result.rows[0];
        req.login(user, (err) => {

          console.log(err);
          res.redirect("/memberdetails");

        });

      });
    });
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/memberdetails",
    failureRedirect: "/login"
  })
);

passport.use(
  new Strategy(async function verify(email, password, cb) {
    try {
      const checkUserMail = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );

      if (checkUserMail.rows.length > 0) {
        let user = checkUserMail.rows[0];
        let userPassword = user.password;

        bcrypt.compare(password, userPassword, (err, result) => {
          if (err) {
            return cb(err);
          } else {
            if (result) {
              return cb(null, user);
            } else {
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      return cb(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

app.post("/thankyou", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;

    const checkmembers = await db.query(
      "SELECT * FROM members WHERE name = $1",
      [name]
    );

    if (checkmembers.rows.length > 0) {
      res.redirect("/resubmission");
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
});
