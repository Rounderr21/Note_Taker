const fs = require('fs');

//using uuid to create a random number
const { v4: uuidv4 } = require('uuid');

//importing db.json
const notesData = require('./db/db.json');

//importing express
const express = require('express');


//importing built-in Node.ks package 'path to resolve path of files that located on the server
const path = require('path');
const { Console } = require('console');

//initalize an instance of Express.js
const app = express();

//specifying what port the express.js server will run on
const PORT = 3001;

//static middleware point to the public folder
app.use(express.static('public'));
app.use(express.json());

//standard get to display index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));


//setting path/route for notes to be set when clicked upon
app.get('/notes', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Handle GET request to retrieve notes
app.get('/api/notes', (req, res) => {
    return res.json(notesData);
  });
  
  // Handle POST request to create a new note
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    console.log(req.body);
    // Generate a unique ID using uuid
    newNote.id = uuidv4();
    notesData.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
    return res.json(newNote);
  });
  
  // delete route
app.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  // Find the index of the note with the provided ID
  const index = notesData.findIndex((note) => note.id === noteId);
  if (index !== -1) {
    // Remove the note from the array
    notesData.splice(index, 1);
    // Save the updated notes to db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
  }
});
//how to get port to listen and to use server
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);