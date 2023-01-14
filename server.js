const data = require('./data.js')
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.locals.title = 'Strangers API';
app.locals.questions = data;

app.set('port', 3001);

app.get('/api/v1/strangers', (request, response) => {
  response.status(200).json(app.locals.questions);
});

app.get('/api/v1/strangers/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.questions.find(question => question.id == id);

  if (!match) return response.status(404).json({message: `No question found with an id of ${id}`});

  return response.status(200).json(match);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on port ${app.get('port')}!`);
});