const express = require('express');

const ProjectDb = require('./projectModel');

const router = express.Router();

// Get a single project by id
router.get('/:id', async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const project = await ProjectDb.get(id);
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was an error retrieving the projects',
    });
  }
});

// Add a project
router.post('/', async (req, res) => {
  try {
    const { body } = req;
    const project = await ProjectDb.insert(body);
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was an error adding the project',
    });
  }
});

module.exports = router;
