const mongoose = require("mongoose");
const schema = mongoose.Schema;
const flightSchema = new schema(
  {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    price: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const FlightConstructor = mongoose.model("users", flightSchema);
module.exports = FlightConstructor;