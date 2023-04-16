const express = require("express");
const app = express();
const path = require("path");
const PORT = 3001;
const fs = require("fs");
const uniqid = require("uniqid");
const notesData = require("./db/db.json");

console.log(uniqid());

app.use(express.static("public"));

// GET /notes should return the notes.html file.
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => res.json(notesData));

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file,
// and then return the new note to the client. You'll need to find a way to give each note a unique
// id when it's saved (look into npm packages that could do this for you).
app.post("/api/notes", (req, res) => {
  // Destructuring assignment for the items in req.body
  const {} = req.body;

  // Variable for the object we will save
  const newNote = {
    title,
    text,
    note_id: uniqid(),
  };
});

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order
// to delete a note, you'll need to read all notes from the db.json file, remove the note with the given
// id property, and then rewrite the notes to the db.json file.
app.delete("/api/notes/:id", (req, res) => {});

// GET * should return the index.html file.
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
