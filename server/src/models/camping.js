const mongoose = require("mongoose");

// Camping Schema
const campingSchema = new mongoose.Schema(
  {
    image: {
      imageUrl: { type: String, required: true },
      imageSrc: { type: String, required: true },
    },
    title: { type: String, required: true },
    price: { type: String, required: true },
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
        description: [{ type: String, required: true }],
      },
    ],
    camp_event_details: {
      difficultyLevel: { type: String, required: true },
      baseVillageCamp: { type: String, required: true },
      region: { type: String, required: true },
      totalTimeOfCamp: { type: String, required: true },
      duration: { type: String, required: true },
    },
    costInclude: [{ item: { type: String, required: true } }],
    costExclude: [{ item: { type: String, required: true } }],
    thingsToCarry: [{ item: { type: String, required: true } }],
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

// Create Camping model
const Camping =
  mongoose.models.camping || mongoose.model("camping", campingSchema);

module.exports = Camping;
