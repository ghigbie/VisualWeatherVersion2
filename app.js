const express = require("express"),
          app = express();

const port = process.env.PORT,
        ip = process.env.IP;
        
app.use("view engine", "ejs");

app.get("*", (req, res) => {
   res.send("Not found page"); 
});

app.listen(port, ip, () => {
   console.log(`Server is up on port ${port}`);
});

