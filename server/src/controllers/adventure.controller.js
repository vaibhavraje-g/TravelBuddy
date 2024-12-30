const Adventours = require("../models/adventurous");
const createError = require("http-errors");

const users = ["akash.borude", "vaibhavraje.gaikwad", "tejas.gandhi"];

// Get all adventours data
const getAllAdventure = async (req, res, next) => {
  try {
    const adventoursData = await Adventours.find();
    res.json(adventoursData);
  } catch (error) {
    next(error);
  }
};

// Get a specific adventour by ID
const getAdventureById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const adventour = await Adventours.findById(id);
    if (!adventour) {
      return next(createError(404, "Adventour not found"));
    }
    res.json(adventour);
  } catch (error) {
    next(error);
  }
};

// Create a new adventour
const addNewAdventure = async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  const newAdventour = new Adventours(req.body);
  try {
    const savedAdventour = await newAdventour.save();
    res.status(201).json(savedAdventour);
  } catch (error) {
    next(error);
  }
};

// Create multiple new adventours
const addNewAdventures = async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const createdAdventures = [];
    for (const adventureData of req.body.adventures) {
      const newAdventure = new Adventours({ ...adventureData, modifiedBy });
      const savedAdventure = await newAdventure.save();
      createdAdventures.push(savedAdventure);
    }
    res.status(201).json(createdAdventures);
  } catch (error) {
    next(error);
  }
};

// Update an adventour
const updateAdventureById = async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const updatedAdventour = await Adventours.findByIdAndUpdate(
      id,
      { ...req.body, modifiedBy },
      { new: true }
    );
    if (!updatedAdventour) {
      return next(createError(404, "Adventour not found"));
    }
    res.json(updatedAdventour);
  } catch (error) {
    next(error);
  }
};

// Delete an adventour
const deleteAdventureById = async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const deletedAdventour = await Adventours.findByIdAndDelete(id);
    if (!deletedAdventour) {
      return next(createError(404, "Adventour not found"));
    }
    res.json({ message: "Adventour deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAdventure,
  getAdventureById,
  addNewAdventure,
  addNewAdventures,
  updateAdventureById,
  deleteAdventureById,
};
