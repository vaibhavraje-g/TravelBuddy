const createError = require("http-errors");
const Trekking = require("../models/trekking");

// Users array
const users = ["akash.borude", "vaibhavraje.gaikwad", "tejas.gandhi"];

// Get all trekking data
const getAllTreks = async (req, res, next) => {
  try {
    const trekkingData = await Trekking.find();
    res.json(trekkingData);
  } catch (error) {
    next(error);
  }
};

// Get a specific trek by ID
const getTrekById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const trek = await Trekking.findById(id);
    if (!trek) {
      return next(createError(404, "Trek not found"));
    }
    res.json(trek);
  } catch (error) {
    next(error);
  }
};

// Create a new trek
const addNewTrek = async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  const newTrek = new Trekking(req.body);
  try {
    const savedTrek = await newTrek.save();
    res.status(201).json(savedTrek);
  } catch (error) {
    next(error);
  }
};

// Create multiple new treks
const addNewTreks = async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const createdTreks = [];
    for (const trekData of req.body.treks) {
      const newTrek = new Trekking({ ...trekData, modifiedBy });
      const savedTrek = await newTrek.save();
      createdTreks.push(savedTrek);
    }
    res.status(201).json(createdTreks);
  } catch (error) {
    next(error);
  }
};

// Update a trek
const updateTrekById = async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const updatedTrek = await Trekking.findByIdAndUpdate(
      id,
      { ...req.body, modifiedBy },
      { new: true }
    );
    if (!updatedTrek) {
      return next(createError(404, "Trek not found"));
    }
    res.json(updatedTrek);
  } catch (error) {
    next(error);
  }
};

// Delete a trek
const deleteTrekById = async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const deletedTrek = await Trekking.findByIdAndDelete(id);
    if (!deletedTrek) {
      return next(createError(404, "Trek not found"));
    }
    res.json({ message: "Trek deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTreks,
  getTrekById,
  addNewTrek,
  addNewTreks,
  updateTrekById,
  deleteTrekById
};