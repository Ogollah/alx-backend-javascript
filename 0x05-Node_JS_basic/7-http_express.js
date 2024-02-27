const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Define port
const PORT = 1245;

// Route for "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for "/students"
app.get('/students', (req, res) => {
  const dbFilePath = req.query.db || '';
  const filePath = path.join(__dirname, dbFilePath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading the file');
    }

    // Split the file content by newline
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Prepare response
    let response = 'This is the list of our students\n';
    lines.forEach(line => {
      const [name, age, field] = line.split(',');
      response += `Name: ${name}, Age: ${age}, Field: ${field}\n`;
    });

    res.type('text').send(response);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
