// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const { hero, villain, artifact, location, challenge } = req.body;

  // Ensure that the form fields are correctly received
  console.log('Form Data:', req.body);

  // Create an adventurous story using the input from the form
  const adventureStory = `In a land far, far away, the brave hero ${hero} faced off against the sinister villain ${villain}. The key to victory lay in the legendary ${artifact}, hidden in the mysterious ${location}. The journey was fraught with peril, and the ultimate challenge awaited: ${challenge}.`;

  // Send the generated adventure story as the response
  res.send(adventureStory);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

