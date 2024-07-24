// full_server/routes/index.js
import { Router } from 'express';
import { AppController } from '../controllers/AppController.js';
import { StudentsController } from '../controllers/StudentsController.js';

const router = Router();

// Link the root route to AppController
router.get('/', AppController.getHomepage);

// Link the /students route to StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
