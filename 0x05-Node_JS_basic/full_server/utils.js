// full_server/utils.js
import { promises as fs } from 'fs';

/**
 * Reads the database file and returns an object of arrays of first names per field.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<Object>} - A promise that resolves to an object of arrays of first names per field.
 */
export async function readDatabase(filePath) {
  const students = {};
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n');
    for (const line of lines) {
      if (line) {
        const [firstname, , , field] = line.split(',');
        if (students[field]) {
          students[field].push(firstname);
        } else {
          students[field] = [firstname];
        }
      }
    }
    return students;
  } catch (error) {
    throw new Error('Cannot read the database');
  }
}
