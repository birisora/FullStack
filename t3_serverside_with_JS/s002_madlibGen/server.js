'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// use express middleware to parse the request body and add it to the request object
// don't worry, you'll learn all about middleware in the next assignment!
app.use(express.json());

// your code here.
function madlibGenerator (body) {
  // "adjective1", "adjective2", "adjective3", "adverb", "name", "place", "noun"
  // here we'll use destructuring for the format above
  const {adjective1, adjective2, adjective3, adverb, name, place, noun} = body;
  return `
    There's a ${adjective1} new ${name} in ${place} and everyone's talking. 
    Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. 
    However, ${name} has a secret - ${name}'s a vile vampire.

    Will it end with a bite, or with a stake through the ${noun}?
  `;

}     

// hint: click the Logs button near the top left corner of this page, then try doing
// console.log(req.body) here to show key-value pairs from Postman in the Activity Log
app.post('/', (req, res) => {
  // using json will give a different looking result
  res.send(madlibGenerator(req.body));
});

// listen for requests :)
app.listen(process.env.PORT, () => console.log(
  `Your app is listening on port ${process.env.PORT}`));
