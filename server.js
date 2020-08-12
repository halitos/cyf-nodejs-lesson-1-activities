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

//--------- request song with id Num in Resourse Path------------

app.get("/songs/:id", (request, response) => {
  let id = Number(request.params.id);
  let mySong = songs.find((song) => song.id === id);
  response.json({
    msg: `The client made a request for song with the id: ${id}`,
    mySong,
  });
});

//-----------detect Querry to filter songs------------

app.get("/song", (req, res) => {
  let limit = Number(req.query.limit);
  let artist = req.query.artist.toLowerCase();
  let selectedSongs = songs;
  if (artist !== undefined) {
    selectedSongs.filter((song) => song.artist.toLowerCase().includes(artist));
  }
  if (limit !== undefined) {
    selectedSongs = selectedSongs.slice(0, limit);
  }
  if (selectedSongs !== undefined) {
    res.json({
      msg: `The client made a request for ${selectedSongs.length} songs`,
      selectedSongs,
    });
  } else {
    res.status(404).send("not found");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
