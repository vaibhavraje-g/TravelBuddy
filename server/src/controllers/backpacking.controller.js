const createError = require("http-errors");
const Backpacking = require("../models/backpacking");

// Users array
const users = ["akash.borude", "vaibhavraje.gaikwad", "tejas.gandhi"];

// Get all backpacking data
const getAllBackpacks = async (req, res, next) => {
  try {
    const backpackingData = await Backpacking.find();
    res.json(backpackingData);
  } catch (error) {
    next(error);
  }
};

// Get a specific backpacking event by ID
const getBackpackById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const backpackingEvent = await Backpacking.findById(id);
    if (!backpackingEvent) {
      return next(createError(404, "Backpacking event not found"));
    }
    res.json(backpackingEvent);
  } catch (error) {
    next(error);
  }
};

// Create a new backpacking event
const addNewBackpacking = async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  const backpackingEvent = new Backpacking(req.body);
  try {
    const newBackpackingEvent = await backpackingEvent.save();
    res.status(201).json(newBackpackingEvent);
  } catch (error) {
    next(error);
  }
};

// Create multiple new backpacking events
const addNewBackpackingEvents = async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const createdBackpackingEvents = [];
    for (const backpackingEventData of req.body.backpackingEvents) {
      const newBackpackingEvent = new Backpacking({ ...backpackingEventData, modifiedBy });
      const savedBackpackingEvent = await newBackpackingEvent.save();
      createdBackpackingEvents.push(savedBackpackingEvent);
    }
    res.status(201).json(createdBackpackingEvents);
  } catch (error) {
    next(error);
  }
};

// Update a backpacking event
const updateBackpackById = async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const updatedBackpackingEvent = await Backpacking.findByIdAndUpdate(
      id,
      { ...req.body, modifiedBy },
      { new: true }
    );
    if (!updatedBackpackingEvent) {
      return next(createError(404, "Backpacking event not found"));
    }
    res.json(updatedBackpackingEvent);
  } catch (error) {
    next(error);
  }
};

// Delete a backpacking event
const deleteBackpackById = async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const deletedBackpackingEvent = await Backpacking.findByIdAndDelete(id);
    if (!deletedBackpackingEvent) {
      return next(createError(404, "Backpacking event not found"));
    }
    res.json({ message: "Backpacking event deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBackpacks,
  getBackpackById,
  addNewBackpacking,
  addNewBackpackingEvents,
  updateBackpackById,
  deleteBackpackById,
};
