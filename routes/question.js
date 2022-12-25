const express = require('express');
const router = express.Router();
let { getAllQuestions, getQuestionById, addQuestion, removeQuestion } = require('../controllers/questionController')

/**
 * @swagger
 * /questions:
 *   get:
 *     description: All questions
 *     responses:
 *       200:
 *         description: Returns all the questions
 * */
router.get('/', async (req, res) => {
    let response = await getAllQuestions(req.query.s, req.query.page, req.query.limit);
    if (response.success == true) {
        res.status(200).json(response);
    } else {
        res.status(404).json(response);
    }
});

/**
 * @swagger
 * /questions/{id}:
 *   get: 
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The question id.
 *     description: Get a question by id.
 *     responses:
 *       200:
 *         description: Returns the requested question
 * */
router.get('/:id', async (req, res) => {
    let response = await getQuestionById(req.params.id);
    res.json(response);
});

/**
 * @swagger
* /questions:
*   post:
*     parameters:
*      - in: body
*        name: question
*        description: New question
*        schema:
*          type: object
*          properties:
*            question:
*              type: string
*            category:
*              type: string
*     responses:
*       201:
*         description: created
*/
router.post('/', async (req, res) => {
    let body = {
        question: req.body.question,
        category: req.body.category,
    };
    let response = await addQuestion(body);

    if (response.success == true) {
        res.status(201).json(response);
    } else {
        res.status(404).json(response);
    }
});

/**
 * @swagger
 * /questions/{id}:
 *   delete:
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      type: string
 *      description: The question id.
 *   description: Delete a question by id.
 *   responses:
 *     200:
 *       description: Returns the requested question
 * */
router.delete('/:id', async (req, res) => {
    let response = await removeQuestion(req.params.id);
    res.json(response);
});

module.exports = router;
