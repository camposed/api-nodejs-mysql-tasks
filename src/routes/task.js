import { Router } from 'express';
import { getTask, getTaskCount, getTasks, saveTask, deleteTask, updateTask } from '../controllers/task';
const router = new Router();

/**
 * @swagger
 * tags: 
 * name: Tasks
 *   description: Task endpoint
 */

/**
 * @swagger
 * /task:
 * get:
 *   sumamry: Get all tasks
 *   tags:[Tasks]
 */

router.get('/task', getTasks)

/**
 * @swagger
 * /task/count:
 * get:
 *  summary: Get total tasks
 *  tags:[Tasks]
 */

router.get('/task/count',getTaskCount )

/**
 * @swagger
 * /task/id:
 * get:
 *   summary: Get only one task
 *   tags:[Tasks]
 */

router.get('/task/:id',getTask )

/**
 * @swagger
 * /task:
 * post:
 *   summary: Create new task
 *   tags:[Tasks]
 */

router.post('/task', saveTask)

/**
 * @swagger
 * /task/id:
 * delete:
 *   summary: Delete one task
 *   tags:[Tasks]
 */

router.delete('/task/:id', deleteTask)

/**
 * @swagger
 * /task/id:
 * put:
 *   summary: Update onu task by id
 *   tags:[Tasks]
 */

router.put('/task/:id', updateTask)

export default router