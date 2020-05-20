const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');

app.get('/', function(req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
})

app.use('/static', express.static(path.resolve(__dirname, '../dist')))

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`App is running on port -> ${PORT}`);