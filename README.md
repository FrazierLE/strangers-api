# We're Not Really Strangers API

This app is the back-end server for [Strangers]('https://github.com/FrazierLE/strangers').

## Getting started

### Installation

1. Clone down this repository.
    - `git clone git@github.com:FrazierLE/strangers-api.git`
2. Change into the new directory.
    - `cd strangers-api`
3. Install the dependencies.
    - `npm install`

### Deployed Link
[We're Not Really Strangers API](https://strangers-api-lhr3.vercel.app/api/v1/strangers/)

### Usage

1. To fire up the server, run `node server.js` or `nodemon server.js`.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/strangers` | GET | not needed | Array of all questions: `[{ id: 1, question: "What was your first impression of me?", level: 1}]` | 
POST | `{ id: <Number>, question: <String>, level: <Number>' | New Question: `{id: '169', question: 'What is something you want to accomplish this year?', level: 2}` |
| `http://localhost:3001/api/v1/strangers/:id` | DELETE | not needed | Array of all remaining questions: `[{id: '169', question: 'What is something you want to accomplish this year?', level: 2}]`
|


Note: All of these endpoints will return semantic errors if something is wrong with the request.
