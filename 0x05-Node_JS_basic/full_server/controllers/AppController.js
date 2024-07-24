// full_server/controllers/AppController.js
export class AppController {
    /**
     * Returns a 200 status and the message "Hello Holberton School!".
     * @param {Request} req - The request object.
     * @param {Response} res - The response object.
     */
    static getHomepage(req, res) {
      res.status(200).send('Hello Holberton School!');
    }
  }
  