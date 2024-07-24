// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export class StudentsController {
  /**
   * Returns a list of all students with their fields.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      sortedFields.forEach(field => {
        output += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });
      res.status(200).send(output.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Returns a list of students in a specific major.
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   */
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(process.argv[2]);
      const list = students[major];
      if (list) {
        res.status(200).send(`List: ${list.join(', ')}`);
      } else {
        res.status(500).send('Cannot load the database');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
