const createError = require("http-errors");
const Camping = require("../models/camping");

// Users array
const users = ["akash.borude", "vaibhavraje.gaikwad", "tejas.gandhi"];

// Get all camping data
const getAllCamps = async (req, res, next) => {
  try {
    const campingData = await Camping.find();
    res.json(campingData);
  } catch (error) {
    next(error);
  }
};

// Get a specific camping by ID
const getCampById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const camp = await Camping.findById(id);
    if (!camp) {
      return next(createError(404, "Camp not found"));
    }
    res.json(camp);
  } catch (error) {
    next(error);
  }
};

// Create a new camp
const addNewCamp = async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  const camp = new Camping(req.body);
  try {
    const newCamp = await camp.save();
    res.status(201).json(newCamp);
  } catch (error) {
    next(error);
  }
};

// Create multiple new camps
const addNewCamps = async (req, res, next) => {
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const createdCamps = [];
    for (const campData of req.body.camps) {
      const newCamp = new Camping({ ...campData, modifiedBy });
      const savedCamp = await newCamp.save();
      createdCamps.push(savedCamp);
    }
    res.status(201).json(createdCamps);
  } catch (error) {
    next(error);
  }
};

// Update a camp
const updateCampById = async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const updatedCamp = await Camping.findByIdAndUpdate(
      id,
      { ...req.body, modifiedBy },
      { new: true }
    );
    if (!updatedCamp) {
      return next(createError(404, "Camp not found"));
    }
    res.json(updatedCamp);
  } catch (error) {
    next(error);
  }
};

// Delete a camp
const deleteCampById = async (req, res, next) => {
  const id = req.params.id;
  const modifiedBy = req.body.modifiedBy;

  // Check if the user is authorized to modify the data
  if (!users.includes(modifiedBy)) {
    return next(createError(403, "You are not authorized to modify the data"));
  }

  try {
    const deletedCamp = await Camping.findByIdAndDelete(id);
    if (!deletedCamp) {
      return next(createError(404, "Camp not found"));
    }
    res.json({ message: "Camp deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCamps,
  getCampById,
  addNewCamp,
  addNewCamps,
  updateCampById,
  deleteCampById
};
