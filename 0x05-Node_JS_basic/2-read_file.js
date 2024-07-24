const fs = require('fs');

/**
 * Reads a CSV file and counts students by their fields.
 * @param {string} fileName - Path to the CSV file.
 */
function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  try {
    // Read the file synchronously
    const content = fs.readFileSync(fileName, 'utf-8');

    // Split the content by lines
    const lines = content.split('\n');

    // Process each line in the CSV file
    for (let i = 0; i < lines.length; i += 1) { // Replaced `++` with `+= 1`
      if (lines[i].trim()) { // Skip empty lines
        totalStudents += 1; // Replaced `totalStudents = totalStudents + 1` with `+= 1`
        const [firstName, , , field] = lines[i].split(',');

        // Update students list for each field
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);

        // Update field counts
        if (!fields[field]) {
          fields[field] = 0;
        }
        fields[field] += 1; // Replaced `fields[field] = fields[field] + 1` with `+= 1`
      }
    }

    // Exclude header line from total count
    const numStudents = totalStudents - 1;

    // Output total number of students
    console.log(`Number of students: ${numStudents}`);

    // Output student counts and lists for each field
    for (const [field, count] of Object.entries(fields)) {
      if (field !== 'field') { // Skip header field
        console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    // Handle errors related to file reading
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
