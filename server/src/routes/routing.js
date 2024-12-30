const express = require("express");
const router = express.Router();

// Importing the controllers
const trekkingController = require("../controllers/trekking.controller");
const campingController = require("../controllers/camping.controller");
const adventureController = require("../controllers/adventure.controller");
const backpackingController = require("../controllers/backpacking.controller");

// Trekking Routes
router.post("/trekking/addNewTrek", trekkingController.addNewTrek);
router.post("/trekking/addNewTreks", trekkingController.addNewTreks);
router.get("/trekking/getAllTreks", trekkingController.getAllTreks);
router.get("/trekking/getTrekById/:id", trekkingController.getTrekById);
router.put("/trekking/updateTrekById/:id", trekkingController.updateTrekById);
router.delete("/trekking/deleteTrekById/:id", trekkingController.deleteTrekById);

// Camping Routes
router.post("/camping/addNewCamp", campingController.addNewCamp);
router.post("/camping/addNewCamps", campingController.addNewCamps);
router.get("/camping/getAllCamps", campingController.getAllCamps);
router.get("/camping/getCampById/:id", campingController.getCampById);
router.put("/camping/updateCampById/:id", campingController.updateCampById);
router.delete("/camping/deleteCampById/:id", campingController.deleteCampById);

// Adventurous Activities Routes
router.post("/adventure/addNewAdventure", adventureController.addNewAdventure);
router.post("/adventure/addNewAdventures", adventureController.addNewAdventures);
router.get("/adventure/getAllAdventure", adventureController.getAllAdventure);
router.get("/adventure/getAdventureById/:id", adventureController.getAdventureById);
router.put("/adventure/updateAdventureById/:id", adventureController.updateAdventureById);
router.delete("/adventure/deleteAdventureById/:id", adventureController.deleteAdventureById);

// Backpacking Routes
router.post("/backpacking/addNewBackpacking", backpackingController.addNewBackpacking);
router.post("/backpacking/addNewBackpackingEvents", backpackingController.addNewBackpackingEvents);
router.get("/backpacking/getAllBackpacks", backpackingController.getAllBackpacks);
router.get("/backpacking/getBackpackById/:id", backpackingController.getBackpackById);
router.put("/backpacking/updateBackpackById/:id", backpackingController.updateBackpackById);
router.delete("/backpacking/deleteBackpackById/:id", backpackingController.deleteBackpackById);

module.exports = router;
