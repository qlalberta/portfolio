'use strict';

// const pg = require('pg');
const express = require('express');
const app = express();
const proxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const githubToken = process.env.GITHUB_TOKEN;
// const client = new pg.Client(conString);
// client.connect();
// client.on('error', err => console.error(err));

app.use(express.static('./public'));



app.get('/github/*', function (request, response) {
  (
    proxy({
      url: `https://api.github.com/${request.params[0]}`,
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
  )(request, response);
})

app.get('/index', function (req, res) {
  res.sendFile('index.html', {root: './public'});
})

app.listen(PORT, function() {
  console.log(`Server started on ${PORT}`);
});
