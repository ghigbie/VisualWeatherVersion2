const express = require("express"),
          app = express();

const port = process.env.PORT,
        ip = process.env.IP;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
   res.render("landing");
});

app.get("/home", (req, res) => {
   res.render("home"); 
});

app.get("*", (req, res) => {
  res.render("notfound"); 
});

app.listen(port, ip, () => {
   console.log(`Server is up on port ${port}`);
});

