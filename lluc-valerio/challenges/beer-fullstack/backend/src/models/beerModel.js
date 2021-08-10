const mongoose = require('mongoose');

const beerSchema = mongoose.beerSchema({
  id: Number,
  name: String,
  tagline: String,
  first_brewed: String,
  description: String,
  image_url: String,
  abv: Number,
  ibu: Number,
  target_fg: Number,
  target_og: Number,
  ebc: Number,
  srm: Number,
  ph: Number,
  attenuation_level: Number,
  volume: {
    value: Number,
    unit: String
  },
  boil_volume: {
    value: Number,
    unit: String
  },
  method: {
    mash_temp: [
      {
        temp: {
          value: Number,
          unit: String
        },
        duration: Number
      }
    ],
    fermentation: {
      temp: {
        value: Number,
        unit: String
      }
    },
    twist: null
  },
  ingredients: {
    malt: [
      {
        name: String,
        amount: {
          value: Number,
          unit: String
        }
      }
    ],
    hops: [
      {
        name: String,
        amount: {
          value: Number,
          unit: String
        },
        add: String,
        attribute: String
      }
    ],
    yeast: String
  },
  food_pairing: [],
  brewers_tips: String,
  contributed_by: String
});

module.exports = mongoose.model('Beer', beerSchema);
