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
const Camping = mongoose.models.Camping || mongoose.model("Camping", campingSchema);

// Dummy camping data (5 records)
const campingData = [
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Camping.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Malshej Ghat Camping Experience",
    price: "2500",
    date: {
      start_date: new Date("2025-08-05"),
      end_date: new Date("2025-08-07")
    },
    location: "Malshej Ghat, Maharashtra",
    details: "Enjoy a serene camping experience amidst the rugged beauty of Malshej Ghat with breathtaking views.",
    upcoming_batches: [
      { date: new Date("2025-08-10"), available_slots: 10, booked_slots: 2 }
    ],
    itinerary: [
      { day: "Day 1", description: "Setup camp and explore the surroundings." },
      { day: "Day 2", description: "Morning trek and campfire evening." }
    ],
    camp_event_details: {
      difficultyLevel: "Moderate",
      baseVillageCamp: "Malshej",
      region: "Sahyadri",
      totalTimeOfCamp: "48 Hours",
      duration: "2 Days"
    },
    costInclude: [{ item: "Tent" }, { item: "Meals" }, { item: "Guide" }],
    costExclude: [{ item: "Transport" }],
    thingsToCarry: [{ item: "Sleeping Bag" }, { item: "Water" }, { item: "Flashlight" }],
    faqs: [
      { question: "Is prior camping experience required?", answer: "No, beginners are welcome." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Camping_in_forest.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Igatpuri Forest Camping",
    price: "3000",
    date: {
      start_date: new Date("2025-09-15"),
      end_date: new Date("2025-09-16")
    },
    location: "Igatpuri, Maharashtra",
    details: "Camp under the stars in the lush forests of Igatpuri with adventure and relaxation.",
    upcoming_batches: [
      { date: new Date("2025-09-20"), available_slots: 8, booked_slots: 1 }
    ],
    itinerary: [
      { day: "Day 1", description: "Set up camp and enjoy a nature walk." },
      { day: "Day 2", description: "Group activities and return." }
    ],
    camp_event_details: {
      difficultyLevel: "Easy",
      baseVillageCamp: "Igatpuri",
      region: "Western Maharashtra",
      totalTimeOfCamp: "24 Hours",
      duration: "1 Day"
    },
    costInclude: [{ item: "Meals" }, { item: "Campfire" }, { item: "Guide" }],
    costExclude: [{ item: "Personal Expenses" }],
    thingsToCarry: [{ item: "Insect Repellent" }, { item: "Water Bottle" }, { item: "Comfortable Clothing" }],
    faqs: [
      { question: "Are meals provided?", answer: "Yes, breakfast and dinner are included." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Camping_at_Mahabaleshwar.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Mahabaleshwar Hilltop Camping",
    price: "3500",
    date: {
      start_date: new Date("2025-10-10"),
      end_date: new Date("2025-10-11")
    },
    location: "Mahabaleshwar, Maharashtra",
    details: "Experience camping with stunning hill views and cool weather at Mahabaleshwar.",
    upcoming_batches: [
      { date: new Date("2025-10-15"), available_slots: 12, booked_slots: 4 }
    ],
    itinerary: [
      { day: "Day 1", description: "Camp setup and local sightseeing." },
      { day: "Day 2", description: "Trek around and return." }
    ],
    camp_event_details: {
      difficultyLevel: "Easy",
      baseVillageCamp: "Mahabaleshwar",
      region: "Western Maharashtra",
      totalTimeOfCamp: "24 Hours",
      duration: "1 Day"
    },
    costInclude: [{ item: "Meals" }, { item: "Guide" }, { item: "Bonfire" }],
    costExclude: [{ item: "Travel" }],
    thingsToCarry: [{ item: "Jacket" }, { item: "Snacks" }, { item: "Water" }],
    faqs: [
      { question: "What is the weather like?", answer: "Mild and pleasant with occasional cool breezes." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Camping_in_Khandala.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Khandala Lakeside Camping",
    price: "2800",
    date: {
      start_date: new Date("2025-11-05"),
      end_date: new Date("2025-11-06")
    },
    location: "Khandala, Maharashtra",
    details: "Enjoy a relaxing camping experience near Khandala lakes with nature trails and scenic views.",
    upcoming_batches: [
      { date: new Date("2025-11-10"), available_slots: 10, booked_slots: 3 }
    ],
    itinerary: [
      { day: "Day 1", description: "Arrive and set up camp; evening lake view." },
      { day: "Day 2", description: "Morning nature walk and return." }
    ],
    camp_event_details: {
      difficultyLevel: "Easy",
      baseVillageCamp: "Khandala",
      region: "Western Maharashtra",
      totalTimeOfCamp: "24 Hours",
      duration: "1 Day"
    },
    costInclude: [{ item: "Tent" }, { item: "Meals" }, { item: "Campfire" }],
    costExclude: [{ item: "Transportation" }],
    thingsToCarry: [{ item: "Hat" }, { item: "Sunscreen" }, { item: "Water" }],
    faqs: [
      { question: "Are children allowed?", answer: "Yes, children are welcome." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Camping_on_Beach.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Alibaug Beach Camping",
    price: "3200",
    date: {
      start_date: new Date("2025-12-20"),
      end_date: new Date("2025-12-21")
    },
    location: "Alibaug, Maharashtra",
    details: "Camp on the beach in Alibaug and enjoy bonfires, sea views, and a unique coastal experience.",
    upcoming_batches: [
      { date: new Date("2025-12-25"), available_slots: 15, booked_slots: 5 }
    ],
    itinerary: [
      { day: "Day 1", description: "Set up camp on the beach and enjoy the sunset." },
      { day: "Day 2", description: "Beach activities and return." }
    ],
    camp_event_details: {
      difficultyLevel: "Moderate",
      baseVillageCamp: "Alibaug",
      region: "Konkan",
      totalTimeOfCamp: "24 Hours",
      duration: "1 Day"
    },
    costInclude: [{ item: "Meals" }, { item: "Guide" }, { item: "Bonfire" }],
    costExclude: [{ item: "Alcohol" }],
    thingsToCarry: [{ item: "Swimwear" }, { item: "Towel" }, { item: "Sunscreen" }],
    faqs: [
      { question: "Is sea water safe for swimming?", answer: "Yes, but always exercise caution." }
    ]
  }
];

// Seed function to insert camping data
async function seedCamping() {
  try {
    await Camping.deleteMany();
    await Camping.create(campingData);
    console.log("Campings seeded successfully.");
  } catch (err) {
    console.error("Error seeding campings:", err.message);
  }
}
seedCamping();

module.exports =Camping;
