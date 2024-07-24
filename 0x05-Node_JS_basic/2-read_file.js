// 2-read_file.js
const fs = require('fs');
const path = require('path');

/**
 * Reads a CSV file and counts students by their fields.
 * @param {string} filePath - Path to the CSV file.
 */
function countStudents(filePath) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path.resolve(filePath), 'utf8');

    // Split the file data into lines
    const lines = data.trim().split('\n');

    // Check if the file is empty or contains only headers
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Initialize an object to store student data
    const students = {};

    // Map any field names to "CS" or "SWE"
    const fieldMapping = {
      Kerbrou: 'CS',
      Salou: 'CS',
      Benou: 'CS',
      Turlou: 'CS',
      Plessous: 'CS',
      Crisou: 'SWE',
      Schneider: 'SWE',
      Schoul: 'SWE',
      Shirou: 'SWE',
    };

    // Process each line
    lines.forEach((line, index) => {
      if (index === 0) return; // Skip header line

      const [firstName, field] = line.split(',');

      // Skip invalid lines
      if (!firstName || !field) return;

      // Map the field to "CS" or "SWE"
      const mappedField = fieldMapping[field] || field;

      if (!students[mappedField]) {
        students[mappedField] = [];
      }
      students[mappedField].push(firstName);
    });

    // Log the total number of students
    console.log(`Number of students: ${Object.values(students).flat().length}`);

    // Log the number of students and list for each field
    Object.keys(students).forEach((field) => {
      const names = students[field];
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (err) {
    // Handle file reading or parsing errors
    console.error(err.message);
  }
}

module.exports = countStudents;
