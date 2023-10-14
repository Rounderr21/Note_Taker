const fs = require('fs');

//importing db.json
const notesData = require('./db/db.json');

//importing express
const express = require('express');

//importing built-in Node.ks package 'path to resolve path of files that located on the server
const path = require('path');

//initalize an instance of Express.js
const app = express();

//specifying what port the express.js server will run on
const PORT = 3001;

//static middleware point to the public folder
app.use(express.static('public'));

//standard get to display index.html
app.get('/', (req,res) => res.sendFile('naviate to /notes and other html'));

//setting path/route for notes to be set when clicked upon
app.get('/notes', (req,res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//using express to make path for json values for the notes
app.get('api/notes', (req,res) => res.json(notesData));

//TEST THIS AS I DONT THINK THIS IS CORRECT TO POST DATA TO THE SERVER IN JSON FILE
app.post('api/notes', (req,res) => res.json(notesData));

//GETfoute that returns a specific title
app.get('api/notes/ :title', (req,res) => {
    //MAY NEED TO CHANGE.TERM TO .TITLE
    //JUST CONSOLE.LOG REQ.PARAMS AND SEE WHAT THE TITLE IS UNDER TO FIND ANSWER
    const requestedTitle = req.params.term.toLowercase();

    //looping thru notesData to enduer what you are looking for is in there
    for (let i = 0; i <notesData; i++){
        if(requestedTitle === notesData[i].term.toLowercase()){
            return read.json(notesData[i]);
        }
    }

    return res.json('no match has been found.')
});

//how to get port to listen and to use server
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);