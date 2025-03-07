const mongoose = require("mongoose");

// Adventouras Schema
const adventourasSchema = new mongoose.Schema(
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
    adventouras_event_details: {
      difficultyLevel: { type: String, required: true },
      baseVillageAdventure: { type: String, required: true },
      region: { type: String, required: true },
      totalTimeOfEvent: { type: String, required: true },
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

// Create Adventouras model
const Adventouras =
  mongoose.models.Adventouras ||
  mongoose.model("Adventouras", adventourasSchema);

// Dummy adventouras data (5 records)
const adventourasData = [
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Adventure_camping.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Lonavala Adventure Expedition",
    price: "5500",
    date: {
      start_date: new Date("2025-06-15"),
      end_date: new Date("2025-06-16")
    },
    location: "Lonavala, Maharashtra",
    details: "An adrenaline-filled adventure expedition in Lonavala, featuring rock climbing, zip-lining, and obstacle courses.",
    upcoming_batches: [
      { date: new Date("2025-06-20"), available_slots: 10, booked_slots: 1 }
    ],
    itinerary: [
      { day: "Day 1", description: "Activities and challenges." },
      { day: "Day 2", description: "Rest and return." }
    ],
    adventouras_event_details: {
      difficultyLevel: "Hard",
      baseVillageAdventure: "Lonavala",
      region: "Sahyadri",
      totalTimeOfEvent: "24 Hours",
      duration: "2 Days"
    },
    costInclude: [{ item: "Guide" }, { item: "Meals" }, { item: "Equipment" }],
    costExclude: [{ item: "Transport" }],
    thingsToCarry: [{ item: "Sportswear" }, { item: "Water" }, { item: "Sunscreen" }],
    faqs: [
      { question: "Is prior experience required?", answer: "Prior experience is recommended due to high-intensity activities." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Urban_adventure.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Pune Urban Adventure Challenge",
    price: "4800",
    date: {
      start_date: new Date("2025-07-10"),
      end_date: new Date("2025-07-10")
    },
    location: "Pune, Maharashtra",
    details: "A one-day urban adventure challenge in Pune, including obstacle courses and team-building activities.",
    upcoming_batches: [
      { date: new Date("2025-07-15"), available_slots: 20, booked_slots: 5 }
    ],
    itinerary: [
      { day: "Day 1", description: "Challenges and team activities." }
    ],
    adventouras_event_details: {
      difficultyLevel: "Moderate",
      baseVillageAdventure: "Pune",
      region: "Western Maharashtra",
      totalTimeOfEvent: "8 Hours",
      duration: "1 Day"
    },
    costInclude: [{ item: "Meals" }, { item: "Equipment" }, { item: "Guide" }],
    costExclude: [{ item: "Personal gear" }],
    thingsToCarry: [{ item: "Comfortable clothes" }, { item: "Water bottle" }, { item: "Sunglasses" }],
    faqs: [
      { question: "Is it open to all ages?", answer: "Yes, it's designed for all age groups." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Sea_adventure.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Mumbai Sea Adventure",
    price: "6000",
    date: {
      start_date: new Date("2025-08-05"),
      end_date: new Date("2025-08-06")
    },
    location: "Mumbai, Maharashtra",
    details: "Experience thrilling water sports and sea adventures off the coast of Mumbai.",
    upcoming_batches: [
      { date: new Date("2025-08-10"), available_slots: 12, booked_slots: 3 }
    ],
    itinerary: [
      { day: "Day 1", description: "Water sports and adventure activities." },
      { day: "Day 2", description: "Relax on the beach and return." }
    ],
    adventouras_event_details: {
      difficultyLevel: "Moderate",
      baseVillageAdventure: "Mumbai",
      region: "Konkan",
      totalTimeOfEvent: "24 Hours",
      duration: "2 Days"
    },
    costInclude: [{ item: "Equipment" }, { item: "Guide" }, { item: "Meals" }],
    costExclude: [{ item: "Transport" }],
    thingsToCarry: [{ item: "Swimwear" }, { item: "Towel" }, { item: "Sunscreen" }],
    faqs: [
      { question: "Are safety measures in place?", answer: "Yes, safety is our top priority with professional supervision." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Zipline.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Igatpuri Rappelling and Zipline",
    price: "5200",
    date: {
      start_date: new Date("2025-09-12"),
      end_date: new Date("2025-09-12")
    },
    location: "Igatpuri, Maharashtra",
    details: "A one-day adrenaline rush with rappelling and ziplining experiences in the hills of Igatpuri.",
    upcoming_batches: [
      { date: new Date("2025-09-15"), available_slots: 15, booked_slots: 4 }
    ],
    itinerary: [
      { day: "Day 1", description: "Adventure sports and challenges." }
    ],
    adventouras_event_details: {
      difficultyLevel: "Hard",
      baseVillageAdventure: "Igatpuri",
      region: "Western Maharashtra",
      totalTimeOfEvent: "10 Hours",
      duration: "1 Day"
    },
    costInclude: [{ item: "Guide" }, { item: "Safety Gear" }, { item: "Meals" }],
    costExclude: [{ item: "Personal items" }],
    thingsToCarry: [{ item: "Sports shoes" }, { item: "Water bottle" }, { item: "Energy bars" }],
    faqs: [
      { question: "Is prior experience required for rappelling?", answer: "Basic training is provided on the spot." }
    ]
  },
  {
    image: {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/Jungle_adventure.jpg",
      imageSrc: "Wikimedia Commons"
    },
    title: "Konkan Jungle Survival Adventure",
    price: "5800",
    date: {
      start_date: new Date("2025-10-20"),
      end_date: new Date("2025-10-22")
    },
    location: "Konkan, Maharashtra",
    details: "A 3-day survival adventure in the dense jungles of Konkan, including trekking, shelter building, and wild foraging.",
    upcoming_batches: [
      { date: new Date("2025-10-25"), available_slots: 8, booked_slots: 0 }
    ],
    itinerary: [
      { day: "Day 1", description: "Enter the jungle and basic training." },
      { day: "Day 2", description: "Survival exercises and team challenges." },
      { day: "Day 3", description: "Return journey." }
    ],
    adventouras_event_details: {
      difficultyLevel: "Hard",
      baseVillageAdventure: "Konkan",
      region: "Konkan",
      totalTimeOfEvent: "72 Hours",
      duration: "3 Days"
    },
    costInclude: [{ item: "Guide" }, { item: "Meals" }, { item: "Survival Gear" }],
    costExclude: [{ item: "Transport" }],
    thingsToCarry: [{ item: "Backpack" }, { item: "Water" }, { item: "Knife" }],
    faqs: [
      { question: "Do I need previous survival training?", answer: "No prior training is needed; instructions are provided." }
    ]
  }
];

// Seed function to insert adventouras data
async function seedAdventouras() {
  try {
    await Adventouras.deleteMany();
    await Adventouras.create(adventourasData);
    console.log("Adventouras seeded successfully.");
  } catch (err) {
    console.error("Error seeding adventouras:", err.message);
  }
}
seedAdventouras();
module.exports =Adventouras;
