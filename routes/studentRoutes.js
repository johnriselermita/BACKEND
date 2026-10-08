import express from 'express';
import * as studentController from '../controllers/studentController.js';

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.getAllStudents);
studentRoutes.post('/', studentController.createStudent);

export default studentRoutes;