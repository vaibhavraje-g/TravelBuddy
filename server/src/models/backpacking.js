const mongoose = require("mongoose");

// Backpacking Schema
const backpackingSchema = new mongoose.Schema(
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
        description: { type: String, required: true },
      },
    ],
    backpacking_event_details: {
      difficultyLevel: { type: String, required: true },
      baseVillageTrek: { type: String, required: true },
      region: { type: String, required: true },
      totalTimeOfEvent: { type: Number, required: true },
      duration: { type: String, required: true },
    },
    costInclude: [{ item: { type: String, required: true } }],
    costExclude: [{ item: { type: String, required: true } }],
    thingsToCarry: [{ item: { type: String, required: true } }],
    pickUpPoints: {
      pune: [{ location: { type: String, required: false } }],
      mumbai: [{ location: { type: String, required: false } }],
    },
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

// Create Backpacking model
const Backpacking =
  mongoose.models.Backpacking ||
  mongoose.model("Backpacking", backpackingSchema);

// Dummy backpacking data (5 records)
const backpackingData = [
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Torna_Fort.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Torna Fort Backpacking Adventure",
    price: "4500",
    date: {
      start_date: new Date("2025-07-01"),
      end_date: new Date("2025-07-03")
    },
    location: "Torna, Maharashtra",
    details: "Embark on a 3-day backpacking adventure to Torna Fort, exploring historical sites and rugged terrains.",
    upcoming_batches: [
      { date: new Date("2025-07-05"), available_slots: 8, booked_slots: 2 }
    ],
    itinerary: [
      { day: "Day 1", description: "Trek and camp near the base." },
      { day: "Day 2", description: "Ascend the fort and explore." },
      { day: "Day 3", description: "Descend and return." }
    ],
    backpacking_event_details: {
      difficultyLevel: "Hard",
      baseVillageTrek: "Torna",
      region: "Sahyadri",
      totalTimeOfEvent: 72,
      duration: "3 Days"
    },
    costInclude: [{ item: "Meals" }, { item: "Guide" }, { item: "Camping Gear" }],
    costExclude: [{ item: "Transport" }],
    thingsToCarry: [{ item: "Backpack" }, { item: "Water" }, { item: "First Aid Kit" }],
    pickUpPoints: {
      pune: [{ location: "Hinjewadi, Pune" }],
      mumbai: [{ location: "Andheri, Mumbai" }]
    },
    faqs: [
      { question: "Is prior backpacking experience required?", answer: "Yes, it is recommended due to challenging terrain." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Kalsubai_Peak.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Kalsubai Backpacking Expedition",
    price: "5000",
    date: {
      start_date: new Date("2025-08-10"),
      end_date: new Date("2025-08-12")
    },
    location: "Kalsubai, Maharashtra",
    details: "Experience a thrilling 3-day backpacking expedition to Kalsubai, the highest peak in Maharashtra.",
    upcoming_batches: [
      { date: new Date("2025-08-15"), available_slots: 6, booked_slots: 1 }
    ],
    itinerary: [
      { day: "Day 1", description: "Trek and set up camp." },
      { day: "Day 2", description: "Summit attempt and exploration." },
      { day: "Day 3", description: "Return journey." }
    ],
    backpacking_event_details: {
      difficultyLevel: "Hard",
      baseVillageTrek: "Kalsubai",
      region: "Sahyadri",
      totalTimeOfEvent: 72,
      duration: "3 Days"
    },
    costInclude: [{ item: "Guide" }, { item: "Meals" }, { item: "Camping Equipment" }],
    costExclude: [{ item: "Return Transport" }],
    thingsToCarry: [{ item: "Water" }, { item: "Hiking Boots" }, { item: "Snacks" }],
    pickUpPoints: {
      pune: [{ location: "Pune Station" }],
      mumbai: [{ location: "Mumbai Central" }]
    },
    faqs: [
      { question: "What level of fitness is required?", answer: "High fitness levels are recommended." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Harishchandragad_Fort.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Harishchandragad Backpacking Journey",
    price: "4800",
    date: {
      start_date: new Date("2025-09-05"),
      end_date: new Date("2025-09-07")
    },
    location: "Harishchandragad, Maharashtra",
    details: "A 3-day backpacking journey through the rugged terrain of Harishchandragad with cave explorations.",
    upcoming_batches: [
      { date: new Date("2025-09-10"), available_slots: 10, booked_slots: 3 }
    ],
    itinerary: [
      { day: "Day 1", description: "Trek to base camp." },
      { day: "Day 2", description: "Explore the fort and caves." },
      { day: "Day 3", description: "Return journey." }
    ],
    backpacking_event_details: {
      difficultyLevel: "Moderate",
      baseVillageTrek: "Harishchandragad",
      region: "Sahyadri",
      totalTimeOfEvent: 72,
      duration: "3 Days"
    },
    costInclude: [{ item: "Meals" }, { item: "Guide" }, { item: "Camping Gear" }],
    costExclude: [{ item: "Personal Expenses" }],
    thingsToCarry: [{ item: "Water" }, { item: "Flashlight" }, { item: "Trekking Poles" }],
    pickUpPoints: {
      pune: [{ location: "Pune Central" }],
      mumbai: [{ location: "Andheri, Mumbai" }]
    },
    faqs: [
      { question: "Is the route safe for beginners?", answer: "It is moderately challenging; prior experience is recommended." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/74/Rajmachi_Fort.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Rajmachi Backpacking Escape",
    price: "4200",
    date: {
      start_date: new Date("2025-10-01"),
      end_date: new Date("2025-10-03")
    },
    location: "Rajmachi, Maharashtra",
    details: "Join a 3-day backpacking escape to Rajmachi, exploring ancient forts and natural beauty.",
    upcoming_batches: [
      { date: new Date("2025-10-05"), available_slots: 12, booked_slots: 2 }
    ],
    itinerary: [
      { day: "Day 1", description: "Trek to camp." },
      { day: "Day 2", description: "Explore the fort and surroundings." },
      { day: "Day 3", description: "Return journey." }
    ],
    backpacking_event_details: {
      difficultyLevel: "Moderate",
      baseVillageTrek: "Rajmachi",
      region: "Sahyadri",
      totalTimeOfEvent: 72,
      duration: "3 Days"
    },
    costInclude: [{ item: "Guide" }, { item: "Meals" }, { item: "Basic Camping Gear" }],
    costExclude: [{ item: "Transport" }],
    thingsToCarry: [{ item: "Water" }, { item: "Trekking Shoes" }, { item: "Sunscreen" }],
    pickUpPoints: {
      pune: [{ location: "Camp, Pune" }],
      mumbai: [{ location: "Mumbai Central" }]
    },
    faqs: [
      { question: "How challenging is the trek?", answer: "It is moderate and suitable for most experienced trekkers." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sinhagad_Fort.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Sinhagad Backpacking Adventure",
    price: "4000",
    date: {
      start_date: new Date("2025-11-10"),
      end_date: new Date("2025-11-12")
    },
    location: "Sinhagad, Maharashtra",
    details: "A 3-day backpacking adventure to Sinhagad Fort, rich in history and scenic views.",
    upcoming_batches: [
      { date: new Date("2025-11-15"), available_slots: 15, booked_slots: 3 }
    ],
    itinerary: [
      { day: "Day 1", description: "Trek to the base camp." },
      { day: "Day 2", description: "Explore the fort." },
      { day: "Day 3", description: "Return journey." }
    ],
    backpacking_event_details: {
      difficultyLevel: "Easy",
      baseVillageTrek: "Sinhagad",
      region: "Western Maharashtra",
      totalTimeOfEvent: 72,
      duration: "3 Days"
    },
    costInclude: [{ item: "Guide" }, { item: "Meals" }, { item: "Local Transport" }],
    costExclude: [{ item: "Extra expenses" }],
    thingsToCarry: [{ item: "Comfortable Shoes" }, { item: "Water" }, { item: "Hat" }],
    pickUpPoints: {
      pune: [{ location: "Pune Station" }],
      mumbai: [{ location: "Bandra, Mumbai" }]
    },
    faqs: [
      { question: "Is it suitable for beginners?", answer: "Yes, it is a relaxed backpacking experience." }
    ]
  }
];

// Seed function to insert backpacking data
async function seedBackpacking() {
  try {
    await Backpacking.deleteMany();
    await Backpacking.create(backpackingData);
    console.log("Backpackings seeded successfully.");
  } catch (err) {
    console.error("Error seeding backpackings:", err.message);
  }
}
seedBackpacking();

module.exports =Backpacking;
