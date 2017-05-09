const express = require("express"),
          app = express();

const port = process.env.PORT,
        ip = process.env.IP;
        
app.set("view engine", "ejs");

app.set("/", (req, res) => {
   res.render("landing") 
});

app.get("*", (req, res) => {
   res.send("notfound"); 
});

app.listen(port, ip, () => {
   console.log(`Server is up on port ${port}`);
});

