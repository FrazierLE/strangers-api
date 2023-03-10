const express = require('express');
const data = require('./data.js')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.locals.title = 'Strangers API';
app.locals.questions = data;

app.set('port', 3001);
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is now running on port ${app.get('port')}!`);
});

app.get('/api/v1/strangers/', (request, response) => {
  response.status(200).json(app.locals.questions);
});

app.get('/api/v1/strangers/:id', (request, response) => {
  const { id } = request.params;
  const match = app.locals.questions.find(question => question.id == id);

  if (!match) return response.status(404).json({message: `No question found with an id of ${id}`});

  return response.status(200).json(match);
});

app.post('/api/v1/strangers', (request, response) => {
   const newQuestion = request.body;

   for (let requiredParameter of ['id', 'question', 'level']) {
     if (!newQuestion[requiredParameter]) return response.status(422).json({message: `You are missing a required parameter of ${requiredParameter}`});
   }

   app.locals.questions = [...app.locals.questions, newQuestion];

   return response.status(201).json(newQuestion);
 });

 app.delete('/api/v1/strangers/:id', (request, response) => {
   const { id } = request.params;
   const match = app.locals.questions.find(question => question.id == id);

   if (!match) return response.status(404).json({message: `No idea found with an id of ${id}`});

   const filteredQuestions = app.locals.questions.filter(question => question.id != id);

   app.locals.questions = filteredQuestions;

   return response.sendStatus(204);
 });


module.exports = app;