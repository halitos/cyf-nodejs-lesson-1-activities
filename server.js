const express = require("express");
const app = express();
const port = 9090;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cyf", (request, response) => {
  response.json({
    recipient: "CodeYourFuture",
    message: "Hello there!",
  });
});

const songs = [
  {
    id: 1,
    title: "Under Pressure",
    artist: "Queen & David",
  },
  {
    id: 2,
    title: "Wild World",
    artist: "Cat Stevens",
  },
  {
    id: 3,
    title: "Nothing Else Matters",
    artist: "Metallica",
  },
];

//------------ get all songs----------------

app.get("/songs", (request, response) => {
  response.json({
    songs,
  });
});

//--------- Request song with id Num------------

app.get("/songs/:id", (request, response) => {
  let id = Number(request.params.id);
  let mySong = songs.find((song) => song.id === id);
  response.json({
    msg: `The client made a request for song with the id: ${id}`,
    mySong,
  });
});

//-----------Detect Client Querries to filter songs------------

app.get("songs/", (req, res) => {
  let limit = Number(req.query.limit);
  if (limit) {
    songs = songs.slice(0, limit);
  }
  res.json({
    msg: `The client made a request for ${songs.length} songs`,
    songs,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
