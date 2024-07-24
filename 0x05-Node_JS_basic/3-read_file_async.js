const fs = require('fs').promises;

/**
 * Reads a file and counts occurrences of each student by field.
 * @param {string} fileName - Path to the file.
 * @returns {Promise<void>}
 */
async function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  try {
    // Read the file asynchronously
    const content = await fs.readFile(fileName, 'utf-8');
    const lines = content.split('\n');

    // Process each line of the file
    for (const line of lines) {
      if (line) { // Skip empty lines
        const [name, , , field] = line.split(',');

        if (field) { // Check if field is defined
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(name);
          fields[field] = (fields[field] || 0) + 1;
          totalStudents += 1;
        }
      }
    }

    // Log total number of students
    console.log(`Number of students: ${totalStudents - 1}`); // Subtract 1 to exclude header line

    // Log number of students in each field
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${fields[field]}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Handle errors related to file reading
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
