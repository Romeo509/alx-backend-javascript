const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

// Function to count students and generate output string
async function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const data = await fs.readFile(fileName);
    const lines = data.toString().split('\n');
    lines.forEach((line) => {
      if (line) {
        length += 1;
        const [name, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(name);
        fields[field] = (fields[field] || 0) + 1;
      }
    });

    const studentCount = length - 1; // Exclude header
    let output = `Number of students: ${studentCount}\n`;
    Object.entries(fields).forEach(([field, count]) => {
      output += `Number of students in ${field}: ${count}. List: ${students[field].join(', ')}\n`;
    });

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Function to handle HTTP requests
async function handleRequest(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const output = await countStudents(process.argv[2]);
      res.end(output);
    } catch (error) {
      res.statusCode = 500;
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}

// Create and start HTTP server
const app = http.createServer(handleRequest);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
