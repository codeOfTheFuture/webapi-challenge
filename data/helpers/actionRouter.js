const express = require('express');

const ActionDb = require('./actionModel');

const router = express.Router();

// Get an action by id
router.get('/:id', async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const action = await ActionDb.get(id);
    res.status(200).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was a problem getting the action',
    });
  }
});

// Add an action to a project
router.post('/', async (req, res) => {
  try {
    const {
      body: { project_id, description, notes, completed },
    } = req;

    const newAction = await ActionDb.insert({
      project_id,
      description,
      notes,
      completed,
    });
    res.status(201).json(newAction);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was an error adding the action to the project',
    });
  }
});

// Update an action by action id
router.put('/:id', async (req, res) => {
  try {
    const {
      params: { id },
      body: { project_id, description, notes, completed },
    } = req;

    const updatedAction = await ActionDb.update(id, {
      project_id,
      description,
      notes,
      completed,
    });

    res.status(200).json(updatedAction);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was an error updating the action',
    });
  }
});

// Delete an action by action id
router.delete('/:id', async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const deletedAction = await ActionDb.remove(id);
    res.status(200).json(deletedAction);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'There was a problem deleting this action',
    });
  }
});

module.exports = router;
