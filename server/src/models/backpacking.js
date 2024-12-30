const mongoose = require("mongoose");

const backpackingSchema = new mongoose.Schema({
  image: {
    imageUrl: { type: String, required: true },
    imageSrc: { type: String, required: true },
  }, // Source URL for the image
  title: { type: String, required: true },
  price:{ type:String, required:true},
  date: {
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
  location: { type: String, required: true },
  details: { type: String, required: true },
  upcoming_batches: [
    {
      date: { type: Date, required: true },
      available_slots: { type: Number, required: true },
      booked_slots: { type: Number, required: true },
    },
  ],
  itinerary: [
    {
      day: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  backpacking_event_details: {
    difficultyLevel: { type: String, required: true },
    baseVillageTrek: { type: String, required: true },
    region: { type: String, required: true },
    totalTimeOfEvent: { type: Number, required: true }, // Assuming it's in hours
    duration: { type: String, required: true }, // Assuming it's in days
  },
  costInclude: [{ item: { type: String, required: true } }],
  costExclude: [{ item: { type: String, required: true } }],
  thingsToCarry: [{ item: { type: String, required: true } }],
  pickUpPoints: {
    pune: [{ location: { type: String, required: false} }],
    mumbai: [{ location: { type: String, required: false } }],
  },
  faqs: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],

});

const Backpacking = mongoose.model("Backpacking", backpackingSchema);

module.exports = Backpacking;