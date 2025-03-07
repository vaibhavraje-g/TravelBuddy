const mongoose = require("mongoose");

// Trek Schema
const trekSchema = new mongoose.Schema(
  {
    date: {
      start_date: { type: Date, required: true },
      end_date: { type: Date, required: true },
    },
    trek_event_details: {
      difficultyLevel: { type: String, required: true },
      baseVillageTrek: { type: String, required: true },
      region: { type: String, required: true },
      totalTimeOfTrek: { type: String, required: true },
      duration: { type: String, required: true },
    },
    pickUpPoints: {
      pune: [
        {
          location: { type: String, required: true },
          _id: { type: mongoose.Schema.Types.ObjectId, required: true },
        },
      ],
      mumbai: [
        {
          location: { type: String, required: true },
          _id: { type: mongoose.Schema.Types.ObjectId, required: true },
        },
      ],
    },
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    image: {
      imageUrl: { type: String, required: true },
      imageSrc: { type: String, required: true },
    },
    type: { type: String, required: true },
    modifiedBy: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    details: { type: String, required: true },
    upcoming_batches: [
      {
        date: { type: Date, required: true },
        available_slots: { type: Number, required: true },
        booked_slots: { type: Number, required: true },
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      },
    ],
    itinerary: [
      {
        day: { type: String, required: true },
        description: { type: String, required: true },
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      },
    ],
    costInclude: [
      {
        item: { type: String, required: true },
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      },
    ],
    costExclude: [
      {
        item: { type: String, required: true },
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      },
    ],
    thingsToCarry: [
      {
        item: { type: String, required: true },
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      },
    ],
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      },
    ],
  },
  { versionKey: false }
);

// Create Trek model (avoid OverwriteModelError)
const Trekking = mongoose.models.Trekking || mongoose.model("Trekking", trekSchema);

// Hardcoded trek data variable (replace with your actual data)
const trekData = [
  {
    _id: new mongoose.Types.ObjectId(),
    date: {
      start_date: new Date("2025-04-01"),
      end_date: new Date("2025-04-01")
    },
    trek_event_details: {
      difficultyLevel: "Moderate",
      baseVillageTrek: "Lonavala",
      region: "Sahyadri",
      totalTimeOfTrek: "5 Hours",
      duration: "Full Day"
    },
    pickUpPoints: {
      pune: [
        { location: "Deccan Gymkhana, Pune", _id: new mongoose.Types.ObjectId() }
      ],
      mumbai: [
        { location: "Andheri, Mumbai", _id: new mongoose.Types.ObjectId() }
      ]
    },
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Rajmachi_Fort.jpg",
      imageSrc: "Wikimedia Commons"
    },
    type: "Trek",
    modifiedBy: "Admin",
    title: "Rajmachi Fort Trek",
    location: "Maval, Maharashtra",
    details: "Explore the historic Rajmachi Fort near Lonavala with breathtaking views and ancient ruins.",
    upcoming_batches: [
      {
        date: new Date("2025-04-05"),
        available_slots: 10,
        booked_slots: 0,
        _id: new mongoose.Types.ObjectId()
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        description: "Trek to Rajmachi Fort, explore the fort ruins and enjoy panoramic views.",
        _id: new mongoose.Types.ObjectId()
      }
    ],
    costInclude: [
      { item: "Breakfast", _id: new mongoose.Types.ObjectId() },
      { item: "Lunch", _id: new mongoose.Types.ObjectId() },
      { item: "Guide", _id: new mongoose.Types.ObjectId() }
    ],
    costExclude: [
      { item: "Transport", _id: new mongoose.Types.ObjectId() }
    ],
    thingsToCarry: [
      { item: "Water Bottle", _id: new mongoose.Types.ObjectId() },
      { item: "Sunscreen", _id: new mongoose.Types.ObjectId() },
      { item: "Cap", _id: new mongoose.Types.ObjectId() }
    ],
    faqs: [
      {
        question: "What is the difficulty level?",
        answer: "Moderate trek suitable for beginners.",
        _id: new mongoose.Types.ObjectId()
      }
    ]
  },
  // ... Additional 4 records follow similarly
];


// Seed function to insert trek data
async function seedTrek() {
  try {
    // Ensure DB is connected (connection is typically established in app.js)
    await Trekking.deleteMany();
    await Trekking.create(trekData);
    console.log("Treks seeded successfully.");
  } catch (err) {
    console.error("Error seeding treks:", err.message);
  }
}
seedTrek();

module.exports = Trekking;
