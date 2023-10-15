# Note_Taker

# HEROKU URL FOR APPLICATION: 
https://note-maker-with-express-js-cdc085429bed.herokuapp.com/


# Project Description
This Project is designed to store Notes to a Notes table for the user to keep track of things. Challenges that I faced are trying to post to api/notes the current note I just saved.

To start the project, type node server into the terminal. Then click on the url in the termainl. A web page should then be opened. When you are on the home page, click the get started button. This brings you to the notes page to see previously assigned notes or to create a brand new list. add a title and text to that title. click save note in the navbar. once it is saved it will appear in the left hand column. To delete the note, click the red trash bin.

Javascript File
Started with no starter code for server.js. started by installing all npm's that i needed such as fs and uuid. called upon express. used express to make a public port. used express to make the index.html the starter page. linked /notes to the starter page using app.get. once pages are connected used api/notes to retrieve values(json) from the db.json file. appened the values to the screen(if any). used another app.post to post the new note into the db.json and place it on the screen. used app.delete to remove a note based on its id and remove it from db.json resuliting in it being removed from the list.

Github
Pushed out starter code, Javascript, and README when finishing any coding edits, as to ensure I could go back at anytime to earlier designs if need be.

Project is located at this URL: https://github.com/Rounderr21/Note_Taker

Screenshot of the Project:
![alt text](./public/assests/images/Screenshot%20(116).png)
![alt text](./public/assests/images/Screenshot%20(117).png)