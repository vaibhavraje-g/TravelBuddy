export interface Event {
  _id: string;
  image: {
    imageUrl: string;
    imageSrc: string;
  };
  title: string;
  price: string;
  date: {
    start_date: Date;
    end_date: Date;
  };
  location: string;
  details: string;
  upcoming_batches: Array<{
    date: Date;
    available_slots: number;
    booked_slots: number;
  }>;
  itinerary: Array<{
    day: string;
    events: Array<{
      time: string;
      description: string;
    }>;
  }>;
  costInclude: Array<{ item: string }>;
  costExclude: Array<{ item: string }>;
  thingsToCarry: Array<{ item: string }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  registrationLink: string;
  qrCodePaymentUrl: string;
}