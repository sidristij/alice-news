const express = require("express");
const app = express();

const port = 5000;

// Body parser
app.use(express.urlencoded({ extended: false }));

// Home route
app.post("/", (req, res) => {
  res.send("{ text: 'Как дела?',  tts: 'Как дел+а?',  buttons: [    {title: 'Отлично', hide: true},    {title: 'Супер', hide: true},  ],  end_session: false}");
});

// Mock API
app.get("/users", (req, res) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});

app.post("/user", (req, res) => {
  const { name, location } = req.body;

  res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});
