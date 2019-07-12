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

// Update a project by id
router.put('/:id', async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedProject = await ProjectDb.update(id, body);
    res.status(200).json(updatedProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was a problem updating the project',
    });
  }
});

// Delete a project by id
router.delete('/:id', async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const deleteUser = await ProjectDb.remove(id);
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was a problem deleting the project',
    });
  }
});

// Get a single projects actions by project id
router.get('/:id/actions', async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const getProjectActions = await ProjectDb.getProjectActions(id);
    res.status(200).json(getProjectActions);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was a problem getting this projects actions',
    });
  }
});

module.exports = router;
