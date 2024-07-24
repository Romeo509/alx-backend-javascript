const express = require('express');
const { promises: fs } = require('fs');

const app = express();
const PORT = 1245;

// Helper function to process the CSV file
async function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  let output = '';
  try {
    const data = await fs.readFile(fileName, 'utf-8');
    const lines = data.split('\n');
    for (const line of lines) {
      if (line) {
        length += 1;
        const field = line.split(',');
        if (students[field[3]]) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        fields[field[3]] = (fields[field[3]] || 0) + 1;
      }
    }
    output += `Number of students: ${length - 1}\n`;
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
      }
    }
    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Middleware to handle root endpoint '/'
app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

// Middleware to handle '/students' endpoint
app.get('/students', async (req, res) => {
  try {
    const studentsList = await countStudents(process.argv[2]);
    res.type('text').send(`This is the list of our students\n${studentsList}`);
  } catch (err) {
    res.status(500).type('text').send('Cannot load the database');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
