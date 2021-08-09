module.exports = [{
  id: 81,
  name: 'India Session Lager - Prototype Challenge',
  tagline: 'Refreshing Hop Fix.',
  first_brewed: '11/2015',
  description: 'BrewDog’s level of dry-hop to a beer formed with a baseline of 100% pilsner malt – and at under 4.5% ABV – gives you a style that flirts at the edges of several others. Think aromas of fresh cut grass, nettle, white grape, melon, tangerine - with similar flavours leading to a dry, bitter finish.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 4.4,
  ibu: 35,
  target_fg: 1007,
  target_og: 1040,
  ebc: 12,
  srm: 6,
  ph: 4.4,
  attenuation_level: 79.5,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Pilsner', amount: { value: 3.25, unit: 'kilograms' } }, { name: 'Dextrin Malt', amount: { value: 0.38, unit: 'kilograms' } }],
    hops: [{
      name: 'Chinook', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 63, unit: 'grams' }, add: 'dry hop', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 63, unit: 'grams' }, add: 'dry hop', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 63, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 2007 - Pilsen Lager™',
  },
  food_pairing: ['Tomato and rosemary palmiers', 'Bratwurst with sauerkraut', 'Lemon drizzle cake'],
  brewers_tips: 'Let the beer lager at a low temperature for 3-4 weeks before adding the dry hops.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 82,
  name: 'Hopped-Up Brown Ale - Prototype Challenge',
  tagline: 'Malt Hop Balance.',
  first_brewed: '01/2016',
  description: 'Brown ales are perfect foils for resinous C-Hops, as the piney elements of the latter contrast brilliantly with the sweeter, nutty elements of the malt bill. The best of both worlds.',
  image_url: 'https://images.punkapi.com/v2/82.png',
  abv: 6.3,
  ibu: 85,
  target_fg: 1015,
  target_og: 1063,
  ebc: 24,
  srm: 12,
  ph: 4.2,
  attenuation_level: 82.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 0.75, unit: 'kilograms' } }, { name: 'Brown', amount: { value: 0.38, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 0.06, unit: 'kilograms' } }],
    hops: [{
      name: 'Columbus', amount: { value: 47, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Simcoe', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Columbus', amount: { value: 25, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 37.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Citra', amount: { value: 12.5, unit: 'grams' }, add: 'FV', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Butternut squash and sage soup', 'Roast beef and horseradish sandwich', 'Fudge'],
  brewers_tips: 'High carbonate water will really accent the malt notes to better balance the punchy hops.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 83,
  name: 'Comet',
  tagline: 'Single Hop India Pale Ale',
  first_brewed: '02/2014',
  description: 'A potently bitter hop variety originally grown in the US around 40 years ago, Comet has been newly resurrected - this German version has bold resinous grapefruit flavours, which add a huge fresh hop aroma to this IPA.',
  image_url: 'https://images.punkapi.com/v2/83.png',
  abv: 7.2,
  ibu: 70,
  target_fg: 1012,
  target_og: 1067,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 82.1,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 5.65, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.31, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.06, unit: 'kilograms' } }],
    hops: [{
      name: 'Comet', amount: { value: 15, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Comet', amount: { value: 25, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Comet', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Comet', amount: { value: 250, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Margherita pizza with chili flakes', 'Spicy Thai peanut satay', 'Panna cotta with a grapefruit tuile'],
  brewers_tips: 'Experiment with other high alpha hops during dry-hop to discover their aroma and flavour characteristics.',
  contributed_by: 'Ali Skinner <AliSkinner>',
}, {
  id: 84,
  name: 'Baby Saison - B-Sides',
  tagline: 'Trial Baby Saison.',
  first_brewed: '08/2015',
  description: 'A hark back to the origins of Saison; slight spice and earthy notes with highlights of lemon and pepper make a beer that could quench the thirst of any seasonal worker.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 3.6,
  ibu: 9,
  target_fg: 1004,
  target_og: 1032,
  ebc: 2,
  srm: 1,
  ph: 4.4,
  attenuation_level: 88,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Pilsner', amount: { value: 5.4, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Amber', amount: { value: 0.05, unit: 'kilograms' } }],
    hops: [{
      name: 'Sorachi Ace', amount: { value: 6.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Sorachi Ace', amount: { value: 6.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 6.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 6.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 3711 - French Saison™',
  },
  food_pairing: ['Pork chop with rosemary chips', 'Steak tartare', 'Belgian waffles'],
  brewers_tips: 'Ferment between 21 and 24°C to get this saison as dry as possible.',
  contributed_by: 'Matt Ball <GeordieMatt>',
}, {
  id: 85,
  name: 'Santa Paws',
  tagline: 'Christmas Scoth Ale.',
  first_brewed: '10/2010',
  description: 'A 4.5% decadent scotch ale brewed with Scottish heather honey. A robust malty beer packed with flavour, at a strength you can drink all (Christmas) day long. Santa Paws is our antidote to the chaos of the festive season. All the flavours of Christmas pudding in liquid form.',
  image_url: 'https://images.punkapi.com/v2/85.png',
  abv: 4.5,
  ibu: 35,
  target_fg: 1013,
  target_og: 1048,
  ebc: 44,
  srm: 22,
  ph: 4.4,
  attenuation_level: 72.9,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 1.75, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.44, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 0.56, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 0.56, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 3', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Amber', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Weyermann Beech Smoked', amount: { value: 0.63, unit: 'kilograms' } }],
    hops: [{
      name: 'First Gold', amount: { value: 18.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Willamette', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Hallertauer Mittelfrüh', amount: { value: 6.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['French onion soup', 'Braised pheasant', 'Caramel sauce and hot fudge'],
  brewers_tips: 'The addition of Weyermann Beech Smoked malt creates a beer with a delicate smoke character.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 86,
  name: 'Original Dogma (Née Speedball)',
  tagline: 'Strong Ale With Honey And Spices.',
  first_brewed: '07/2008',
  description: 'A strong ale, brewed with guarana, Californian poppy, kola nut and Scottish heather honey. A conspiracy of trans-continental ingredients infused with some devastatingly BrewDog imaginative thinking.',
  image_url: 'https://images.punkapi.com/v2/86.png',
  abv: 7.8,
  ibu: 60,
  target_fg: 1012,
  target_og: 1071.3,
  ebc: 31,
  srm: 15.5,
  ph: 4.3,
  attenuation_level: 83.2,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Herb and honey addition' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.5, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Amber', amount: { value: 0.05, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.08, unit: 'kilograms' } }],
    hops: [{
      name: 'Amarillo', amount: { value: 30, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 10, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Bobek', amount: { value: 10, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Guarana Powder', amount: { value: 6, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Kola Nut Powder', amount: { value: 6, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Poppy Seed', amount: { value: 6, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Heather Honey', amount: { value: 100, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Safale US-05',
  },
  food_pairing: ['Spicy seafood stew', 'French onion soup', 'Mexican wedding cake (cookies)'],
  brewers_tips: 'Get really good quality heather honey, the more aromatic the better. Honey is 100% fermentable, but it does have a huge influence on the ester profile of the beer – in this case high floral esters.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 87,
  name: 'Alpha Pop',
  tagline: 'Hoppy Rye Pale Ale.',
  first_brewed: '03/2014',
  description: 'A hoppy Rye Ale loaded with an avalanche of citrus and resinous flavours. Columbus, our high-alpha friend, lends a huge pithy citrus blast, with Ahtanum providing a punchy tropical fruit back-up. Brewing with rye adds a spiciness to the speciality malt caramel backbone, giving a warm ginger snap flavour, before slowly the hops, barley and rye combine and build to an orangey, biscuity, almost chocolatey crescendo.',
  image_url: 'https://images.punkapi.com/v2/87.png',
  abv: 4.5,
  ibu: 30,
  target_fg: 1011,
  target_og: 1045,
  ebc: 25,
  srm: 12.5,
  ph: 4.4,
  attenuation_level: 75.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 3.69, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.16, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.06, unit: 'kilograms' } }, { name: 'Rye', amount: { value: 0.31, unit: 'kilograms' } }],
    hops: [{
      name: 'Columbus', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Columbus', amount: { value: 7.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 125, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Columbus', amount: { value: 125, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Spicy lamb tikka masala', 'Spicy beef and Mexican black bean burger', 'Poached cinnamon apple muffins'],
  brewers_tips: 'Columbus and Ahtanum hop additions create a perfect blend of resin and lemon character.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 88,
  name: 'Bavarian Weizen',
  tagline: 'Unleash the Yeast Series.',
  first_brewed: '09/2013',
  description: 'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Bavarian Weizen yeast adds traditional weissbier notes of banana and clove.',
  image_url: 'https://images.punkapi.com/v2/88.png',
  abv: 6.3,
  ibu: 55,
  target_fg: 1012,
  target_og: 1060,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 80,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 22, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.58, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.06, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Centennial', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 10, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 10, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'WLP351 - Bavarian Weizen',
  },
  food_pairing: ['Spicy paella', 'German bratwurst with spicy mustard dip and vinaigrette salad', 'Creamy eggs benedict'],
  brewers_tips: 'Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.',
  contributed_by: 'Ali Skinner <AliSkinner>',
}, {
  id: 89,
  name: 'Citra',
  tagline: 'Single Hop IPA Series – 2011.',
  first_brewed: '01/2011',
  description: 'The Pacific North West of America is home to the Citra hop. America is not just about cheer leaders, a silly version of football, elastic top jeans and cheeseburgers. They grow remarkable hops and Citra is a killer example of this, embodying all that is good about American hops and then some. Fearfully hard to resist, this beer is loaded with brash citrus, grapefruit, orange, hints of resinous pine and touches of blackcurrant. Devilishly moreish.',
  image_url: 'https://images.punkapi.com/v2/89.png',
  abv: 7.5,
  ibu: 70,
  target_fg: 1013,
  target_og: 1068,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 82.1,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 6.38, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Citra', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Citra', amount: { value: 10, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Lemon and herb salmon', 'Sharp cheddar with mango chutney', 'Shredded chicken tacos with pico de gallo'],
  brewers_tips: 'Another hop to be treated with respect. Too much in the kettle or dry hop will turn the beer into a garlicky disaster.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 90,
  name: '#Mashtag 2015',
  tagline: 'US Hopped Black Barley Wine.',
  first_brewed: '05/2015',
  description: 'Democratically voted on by you and the BrewDog beer community. A wonderfully burnt toast malt backbone, loaded with American Hops for floral, citrus flavours and warm boozy vanilla and toasted oak.',
  image_url: 'https://images.punkapi.com/v2/90.png',
  abv: 10,
  ibu: 85,
  target_fg: 1020,
  target_og: 1098,
  ebc: 130,
  srm: 65,
  ph: 4.4,
  attenuation_level: 79.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Oak Chips: 38.5g at FV, Vanilla Pods at FV' },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 6.35, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.77, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.96, unit: 'kilograms' } }, { name: 'Special W', amount: { value: 0.29, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 0.38, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 3', amount: { value: 0.19, unit: 'kilograms' } }],
    hops: [{
      name: 'Nugget', amount: { value: 19, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Columbus', amount: { value: 38.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 19, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 19, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 19, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 19, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Willamette', amount: { value: 19, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 38.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 38.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Willamette', amount: { value: 38.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Charcuterie platter (featuring Italian salami)', 'Blue cheese wedge salad', 'Rich dark chocolate volcano cake'],
  brewers_tips: 'Steep the oak chips and vanilla in separate bags in the cold conditioning phase. Taste every 2 - 3 days and as soon as profile is desirable they can be removed easily.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 91,
  name: 'Dead Pony Club',
  tagline: 'West Coast Kicks. Citrusy. Zesty. Bright.',
  first_brewed: '03/2012',
  description: 'Our California style West Coast IPA has light toffee and caramel notes layered on biscuit malt, supporting a huge, fresh citrus aroma, with lemongrass, lime zest, grapefruit peel, alongside some tropical notes, courtesy of some heavy-hitting US hops.',
  image_url: 'https://images.punkapi.com/v2/91.png',
  abv: 3.8,
  ibu: 35,
  target_fg: 1012,
  target_og: 1040,
  ebc: 25,
  srm: 12.7,
  ph: 4.4,
  attenuation_level: 70,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 62, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 2.79, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.19, unit: 'kilograms' } }],
    hops: [{
      name: 'Simcoe', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Citra', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Simcoe', amount: { value: 5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Citra', amount: { value: 75, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Mosaic', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Baja style fish tacos', 'Jerk chicken', 'Apple crumble'],
  brewers_tips: 'It may be tempting to throw extra (extra) hops at Dead Pony Club, but try adding a little at a time to consecutive brews rather than cramming in loads extra on your first time.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 92,
  name: 'AB:09',
  tagline: 'Cranachan Imperial Stout.',
  first_brewed: '11/2010',
  description: 'This Cranachan Imperial Stout was inspired by the famous Scottish dessert, and brewed with a mountain of dark malts, loads of oats, Scottish heather honey and local raspberries. The beer was then transferred to oak casks to mature for 6 months.',
  image_url: 'https://images.punkapi.com/v2/92.png',
  abv: 11.6,
  ibu: 77,
  target_fg: 1022,
  target_og: 1110,
  ebc: 265,
  srm: 132.5,
  ph: 5.2,
  attenuation_level: 80,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 90 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Lactose: 125g, Scottish Heather Honey: 125g, Raspberries: 187.5g' },
  ingredients: {
    malt: [{ name: 'Maris Otter Extra Pale', amount: { value: 10, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 1.88, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 1.88, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.94, unit: 'kilograms' } }, { name: 'Dark Crystal 350-400', amount: { value: 0.94, unit: 'kilograms' } }],
    hops: [{
      name: 'Fuggles', amount: { value: 125, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Fuggles', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Champagne',
  },
  food_pairing: ['Aged cheddar with honey and raspberry chutney', 'Rich beef stew with winter vegetables and a dash of honey', 'Scottish raspberry cranachan parfait'],
  brewers_tips: 'Lactose - or milk sugar - is un-fermentable. It adds a creamy mouthfeel to the beer. Experiment by using different types of honey for altered flavour profiles.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 93,
  name: 'Mango Gose - B-Sides',
  tagline: 'Hoppy Mango Gose.',
  first_brewed: '07/2015',
  description: 'Kettle soured hoppy mango gose. A delicate balance of sweet, juicy mango, sour lime and salinity.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 6.4,
  ibu: 40,
  target_fg: 1000,
  target_og: 1057,
  ebc: 10,
  srm: 5,
  ph: 3.5,
  attenuation_level: 87,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Kettle Soured, 5 Mangoes pureed at FV' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 5.25, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 1.88, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.13, unit: 'kilograms' } }],
    hops: [{
      name: 'Sorachi Ace', amount: { value: 7.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 7.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Sorachi Ace', amount: { value: 15, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 15, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Okra fries', 'Sea bass ceviche', 'Sea salt fudge'],
  brewers_tips: 'Try to use the juiciest, ripest mangoes possible.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 94,
  name: 'Everday Anarchy',
  tagline: 'White Wine Barrel-Aged Imperial Red Saison.',
  first_brewed: '06/2013',
  description: 'This French white wine barrel aged Imperial Saison has a plethora of intertwining flavours. Huge aromas of peach, syrup, tangerine, sherry, toffee and raisin, followed by a dynamic bracing acidity.',
  image_url: 'https://images.punkapi.com/v2/94.png',
  abv: 10.5,
  ibu: 45,
  target_fg: 1005,
  target_og: 1081,
  ebc: 15,
  srm: 7.5,
  ph: 4.4,
  attenuation_level: 93.8,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 23, unit: 'celsius' } }, twist: 'Coriander seeds: 12.5g at End (WP), Orange: 25g at End (WP), Lemon: 25g at End (WP), Honey: 125g at End (WP), Pink Peppercorns: 3.5g at End (WP)' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 6.13, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.38, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Rye', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Motueka', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Saaz', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Bobek', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Saaz', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Bobek', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 3711 - French Saison™',
  },
  food_pairing: ['Spiced carrot and coriander soup', 'Spicy chilli king prawns', 'Orange zest tart'],
  brewers_tips: 'The honey addition will help to dry out the beer, as the saison yeast will continue to ferment long after most ale yeast.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 95,
  name: 'Peroxide Punk',
  tagline: 'Zesty Pale Ale.',
  first_brewed: '04/2007',
  description: 'A trashy blonde concession for those who felt that our original 6% Punk IPA recipe was too hard hitting. This was also the first time we experimented with dry hopping our beers, giving Peroxide Punk a depth of flavour that belies its modest ABV. Zesty, aromatic and thirst quenching.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 4,
  ibu: 40,
  target_fg: 1009,
  target_og: 1039,
  ebc: 18,
  srm: 9,
  ph: 4.4,
  attenuation_level: 76.9,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Maris Otter', amount: { value: 3.85, unit: 'kilograms' } }],
    hops: [{
      name: 'Amarillo', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Simcoe', amount: { value: 20, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Crystal', amount: { value: 20, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Liberty', amount: { value: 20, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Amarillo', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Sashimi', 'Pan roasted poussin with spring veg', 'Lemon and thyme panna cotta'],
  brewers_tips: "During the mashing process, try to mix the malt without 'turning' or splashing too much. This will cause more oxygen to be dissolved in the mash - and result in a beer that will taste a little like a cardboard box.",
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 96,
  name: 'Lumberjack Stout',
  tagline: 'Blueberry Bacon Stout.',
  first_brewed: '12/2013',
  description: 'Lumberjack Stout is an intense beast that took its inspriation from what an actual bona-fide lumberjack might have for breakfast. Flavours of molasses, chocolate, smoke, berry, coffee and more, with a low bitterness, leaning this beer firmly towards the malty side.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 15.2,
  ibu: 20,
  target_fg: 1020,
  target_og: 1110,
  ebc: 158,
  srm: 79,
  ph: 4.4,
  attenuation_level: 82,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 105 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Blueberries, maple syrup and coffee, then aged in ex Grain whisky casks. Maple Syrup: 50g at end. Blueberries: 100g at middle.' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 10.63, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 3', amount: { value: 1.25, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 2.19, unit: 'kilograms' } }, { name: 'Smoked Malt', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Crystal', amount: { value: 1.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Galena', amount: { value: 36, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Willamette', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Maple syrup drizzled chocolate chip pancakes', 'Fried bacon with crispy honeycomb bits', 'Coffee cake'],
  brewers_tips: 'Adding extra smoked malt will amp up the bacon character.',
  contributed_by: 'Ali Skinner <AliSkinner>',
}, {
  id: 97,
  name: "Bowman's Beard - B-Sides",
  tagline: 'English Barley Wine.',
  first_brewed: '03/2015',
  description: "Ice-distilled double barley wine brewed by Chris from Stone Brewing Co. (see Sunmaid Stout) and BrewDog's own brewers. As robust, resinous and badass as its eponymic beard.",
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 18.3,
  ibu: 50,
  target_fg: 1011,
  target_og: 1067,
  ebc: 15,
  srm: 8,
  ph: 5.3,
  attenuation_level: 84,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 90 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Ice-distilled after fermentation to get to 18.3%' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.5, unit: 'kilograms' } }, { name: 'Rye', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'CaraAroma', amount: { value: 0.04, unit: 'kilograms' } }, { name: 'Caramunich', amount: { value: 0.1, unit: 'kilograms' } }, { name: 'Brown', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Crystal', amount: { value: 0.07, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.11, unit: 'kilograms' } }],
    hops: [{
      name: 'Motueka', amount: { value: 10, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'First Gold', amount: { value: 10, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galena', amount: { value: 10, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Motueka', amount: { value: 5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'First Gold', amount: { value: 5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Galena', amount: { value: 10, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™ & Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Celery and stilton soup', 'Salted caramel soufflé'],
  brewers_tips: 'Ferment first with the American ale strain and after a week add the American Ale II to really push up the ABV. Use a starter to get the yeast raring and ready to go before the second addition.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 98,
  name: 'Pumpkin King',
  tagline: 'Spicy Citrus Pumpkin Ale.',
  first_brewed: '08/2015',
  description: "We're turning Hallowe’en inside out and upside down. Pumpkin King is not your usual unctuous, cloyingly sweet Hallowe’en pumpkin ale. Sure, there’s a huge heady hit of pungent spice on the nose, but it’s followed with bright and zesty citrus flavours, and a light mouthfeel. Spicy and sweet autumnal favourites like toasted marshmallow and toffee apple are just some of the complex notes you’ll find in our twisted take on a pumpkin ale, which weighs in at 5.4% ABV.",
  image_url: 'https://images.punkapi.com/v2/98.png',
  abv: 5.4,
  ibu: 20,
  target_fg: 1014,
  target_og: 1055,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 74.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Pumkin puree: 375g, Grains of Paradise: 2.5g at end, Star Anise: 1.5g at end, Cinnamon: 2.5g at end, Nutmeg: 2.5g at end, Allspice: 2.5g at end, Ginger: 2.5g at end, Clove: 2.5g at end' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 3.88, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Amber', amount: { value: 0.38, unit: 'kilograms' } }],
    hops: [{
      name: 'Magnum', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Willamette', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'First Gold', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Creamy maple syrup and bacon soup', 'Chunky chicken and vegetable spiced stew', 'Pumpkin pie'],
  brewers_tips: 'Experiment with the spice addition to find the correct balance to suit your taste. FYI star anise is a very strong flavour.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 99,
  name: 'Hello My Name Is Päivi',
  tagline: 'Sea Buckthorn Double IPA.',
  first_brewed: '05/2014',
  description: 'Brewed with sea buckthorn, a tart and bitter berry found on the Finnish coastline. Bright, vibrant aromas of tangerine, mandarin and peach, with zesty hits of lime, envelop the nutty, caramel malt backbone. The intense fruitiness gives a jammy quality to the nose. On the palate is a warm biscuity sweetness, with tropical fruits in a supporting role to a huge grapefruit and orange bitterness.',
  image_url: 'https://images.punkapi.com/v2/99.png',
  abv: 8.3,
  ibu: 70,
  target_fg: 1013,
  target_og: 1076,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 82.9,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Sea Buckthorn Puree: 375g at end, EXP 366: 37.5g at dry hop' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 6.13, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.88, unit: 'kilograms' } }],
    hops: [{
      name: 'Challenger', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Bravo', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Comet', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'EXP 366', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Comet', amount: { value: 25, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Centennial', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Citra', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Korvapuusti (cinnamon and cardamom buns)', 'Spicy orange chicken marmalade served with potato bread', 'Sea buckthorn cheesecake'],
  brewers_tips: 'Sea buckthorn characteristics can vary from its country or origin. Taste the berries before addition to determine the best usage.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 100,
  name: 'Elvis Juice V2.0 - Prototype Challenge',
  tagline: 'Citrus Infused IPA.',
  first_brewed: '12/2015',
  description: 'Punchy resinous hoppy aromas blast from the glass; light floral and citrus notes riff against huge piney character. Showcasing Citra, Simcoe and Amarillo at their absolute best. A huge dose of grapefruit peel brings swirls of fresh pithy zest, accentuating the dry hops and building on the dry, biscuit malt base.',
  image_url: 'https://images.punkapi.com/v2/100.png',
  abv: 6.5,
  ibu: 60,
  target_fg: 1010,
  target_og: 1060,
  ebc: 25,
  srm: 12.5,
  ph: 4.4,
  attenuation_level: 83.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Add grapefruit and orange peel into the boil and FV for extra citrus twist' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.5, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.88, unit: 'kilograms' } }],
    hops: [{
      name: 'Magnum', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Amarillo', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Mexican ceviche', 'Coriander and lime green thai curry', 'Grapefruit souffle'],
  brewers_tips: 'Shave of the surface of the citrus peel to unlock the highly aromatic compounds into the beer. Avoid putting any white pith into the brew as it will create an intense and unpleasant bitterness.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 101,
  name: 'Riptide',
  tagline: 'Twisted Merciless Stout.',
  first_brewed: '04/2007',
  description: "The original BrewDog, Bracken decided to make a beer that best reflected himself; this is the beer equivalent of the big, cute chocolate monster. Soft, smooth, dark, chocolatey and a force to be reckoned with. This gentle giant will never bite, but you'll still want to be on your best behaviour!",
  image_url: 'https://images.punkapi.com/v2/101.png',
  abv: 8,
  ibu: 45,
  target_fg: 1014,
  target_og: 1075,
  ebc: 240,
  srm: 120,
  ph: 4.4,
  attenuation_level: 81.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Dark muscavado sugar 285g 30mins pre boil end' },
  ingredients: {
    malt: [{ name: 'Maris Otter Extra Pale', amount: { value: 5.36, unit: 'kilograms' } }, { name: 'Dark Crystal 350-400', amount: { value: 0.71, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 3', amount: { value: 0.18, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.54, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 0.36, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 0.54, unit: 'kilograms' } }],
    hops: [{
      name: 'Columbus', amount: { value: 14.3, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galena', amount: { value: 14.3, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galena', amount: { value: 21.4, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Cascade', amount: { value: 21.4, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Columbus', amount: { value: 21.4, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Seared scallops', 'Pan seared venison with fruit salad side', 'Caramelised apple pie with vanilla ice cream'],
  brewers_tips: 'We recommend adding the chocolate malt at the start of the run off to ensure you extract the flavour and colour without imparting too much of the astringency of the malt into your wort. This will give the beer a really smooth mouthfeel, making this dangerously drinkable at 8% ABV.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 102,
  name: 'Peach Therapy',
  tagline: 'Tart Belgian Tripple.',
  first_brewed: '06/2015',
  description: '9% abv sour tripel, infused with peach and apricot in collaboration with some of our favourite beer writers Adrian Tierney-Jones, Matt Curtis and Jonny and Brad from The Craft Beer Channel.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 9,
  ibu: 30,
  target_fg: 1000,
  target_og: 1071,
  ebc: 12,
  srm: 6,
  ph: 3.6,
  attenuation_level: 87,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 14.5, unit: 'kilograms' } }],
    hops: [{
      name: 'Mandarina Bavaria', amount: { value: 7.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Strisselspalt', amount: { value: 7.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Mandarina Bavaria', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Strisselspalt', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 3522 - Belgian Ardennes™',
  },
  food_pairing: ['Summer salad with pickled veg', 'Sticky barbecue spare ribs', 'Blueberry and almond tart'],
  brewers_tips: '20% of the original volume of wort was brewed again, kettle soured and added during fermentation to give a tart finish to the beer.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 103,
  name: 'Clown King',
  tagline: 'US Style Barley Wine.',
  first_brewed: '12/2013',
  description: 'A heavy hitting combination of rich malt flavours and relentless, bitter hops. Aromas of caramel and toasted marshmallow, with raisin and dried fruit, alongside a spicy undercurrent of resin. With toasty malt and sweet dark fruit flavours, and a smooth, chewy mouthfeel, you’ll be lulled into a false sense of security, before the intense pine-sap resin draws out a huge bitter finish.',
  image_url: 'https://images.punkapi.com/v2/103.png',
  abv: 12,
  ibu: 85,
  target_fg: 1020,
  target_og: 1130,
  ebc: 24,
  srm: 12,
  ph: 4.4,
  attenuation_level: 102.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 90 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 9.5, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Brown', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.88, unit: 'kilograms' } }],
    hops: [{
      name: 'Magnum', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Simcoe', amount: { value: 18.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 18.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 18.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Ahtanum', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Aged Stilton', 'Flaky pastry beef pie and sweet potato mash', 'Chocolate pecan praline cake'],
  brewers_tips: 'Leave this beer to chill in the cellar for a few months to round off the flavour profile.',
  contributed_by: 'Ali Skinner <AliSkinner>',
}, {
  id: 104,
  name: 'India Pale Weizen (w/ Weihenstephan)',
  tagline: 'BrewDog Versus Weihenstephan.',
  first_brewed: '09/2014',
  description: ' BrewDog vs. Weihenstephan India Pale Weizen kicked off a new direction for our collaborations. We took a simple concept (by our standards) and teamed up with the oldest brewery in the world to brew a mash-up beer using the signature styles of both breweries. India Pale Weizen has classic base hefeweizen aromas and flavours of banana, clove and bubblegum, with a distinctive haziness. Layered on top of this is a tapestry of US citrus hop character. India Pale Weizen is a perfect symbiosis of traditional and modern brewing.',
  image_url: 'https://images.punkapi.com/v2/104.png',
  abv: 6.2,
  ibu: 50,
  target_fg: 1010,
  target_og: 1056,
  ebc: 35,
  srm: 17.5,
  ph: 4,
  attenuation_level: 85,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 3, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 2, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.08, unit: 'kilograms' } }],
    hops: [{
      name: 'Cascade', amount: { value: 6, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Cascade', amount: { value: 6, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Saaz', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Hersbrucker', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }],
    yeast: 'Wyeast 3638 - Bavarian Wheat™',
  },
  food_pairing: ['Korean barbecue nachos', 'Beef pho soup', 'Waffles with caramelised apple and powdered sugar'],
  brewers_tips: 'Let the fermentation temperature creep up a couple of degrees higher than normal to create the characteristic banana and bubblegum aromas.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 105,
  name: 'Hello My Name Is Beastie',
  tagline: 'Double IPA Brewed with Brambles.',
  first_brewed: '08/2012',
  description: 'A Scottish take on Hello My Name is Ingrid with added brambles. Caramel malt provides sweetness to balance the tart berry character, which loses sweetness during fermentation.',
  image_url: 'https://images.punkapi.com/v2/105.png',
  abv: 8.2,
  ibu: 42,
  target_fg: 1013,
  target_og: 1078,
  ebc: 90,
  srm: 45,
  ph: 4.4,
  attenuation_level: 83.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 90 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: '500g bramble addition in the FV' },
  ingredients: {
    malt: [{ name: 'Maris Otter Extra Pale', amount: { value: 6.86, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.93, unit: 'kilograms' } }],
    hops: [{
      name: 'Columbus', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Columbus', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Nelson Sauvin', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Bramling Cross/ First Gold', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Columbus', amount: { value: 71.43, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Centennial', amount: { value: 71.43, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Nelson Sauvin', amount: { value: 71.43, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Honey glazed ham with pineapple', 'Spicy wings with blue cheese sauce', 'Blackberry pie with vanilla ice cream'],
  brewers_tips: 'For easy addition, freeze the berries and then allow to defrost. The process will turn the berries to mush.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 106,
  name: 'Punk IPA 2010 - Current',
  tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
  first_brewed: '10/2010',
  description: 'Punk IPA. Amplified. In 2010 we finally got our paws on the equipment we needed to dry hop our beers. We focused all our energy on dry hopping, amping up the aroma and flavour of our flagship beer to create a relentless explosion of tropical fruits, and adding a hint of Caramalt to balance out the insane amount of hops.',
  image_url: 'https://images.punkapi.com/v2/106.png',
  abv: 5.6,
  ibu: 40,
  target_fg: 1011,
  target_og: 1055,
  ebc: 15,
  srm: 7.6,
  ph: 4.4,
  attenuation_level: 78,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 66, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.38, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Chinook', amount: { value: 20, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Ahtanum', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Chinook', amount: { value: 20, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 27.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Nelson Sauvin', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 47.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Ahtanum', amount: { value: 37.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 37.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Nelson Sauvin', amount: { value: 20, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Cascade', amount: { value: 37.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Amarillo', amount: { value: 10, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Spicy carne asada with a pico de gallo sauce', 'Shredded chicken tacos with a mango chilli lime salsa', 'Cheesecake with a passion fruit swirl sauce'],
  brewers_tips: 'To get the best possible profile from the dry hops we recommend dry hopping post fermentation for 5 days. Dry hops should be added at cellar temperature. We find 14°C results in the most aromatic dry hop profile.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 107,
  name: 'HBC 366 - IPA Is Dead',
  tagline: 'Single Hop India Pale Ale.',
  first_brewed: '02/2014',
  description: 'A new, at-the-time un-named American hop now known as Equinox. Piney, resinous with spicy fruit notes and biting grapefruit. Stewed orange and pineapple with a resinous edge.',
  image_url: 'https://images.punkapi.com/v2/107.png',
  abv: 7.2,
  ibu: 70,
  target_fg: 1012,
  target_og: 1067,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 82.1,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 5.65, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.31, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.06, unit: 'kilograms' } }],
    hops: [{
      name: 'HBC 366', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'HBC 366', amount: { value: 25, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'HBC 366', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'HBC 366', amount: { value: 250, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Spicy black bean and chicken tortilla soup', 'Spicy lamb tikka masala', 'Fruity bread pudding'],
  brewers_tips: 'With new hop varieties, growers are discovering flavour attributes completely unexpected from hops, which can add unique character to your brews.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 108,
  name: 'American Ale',
  tagline: 'Unleash the Yeast Series.',
  first_brewed: '09/2013',
  description: 'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. American Ale used a clean fermenting strain which provides some faint fruity notes.',
  image_url: 'https://images.punkapi.com/v2/108.png',
  abv: 6.3,
  ibu: 55,
  target_fg: 1012,
  target_og: 1060,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 80,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.58, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.06, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Centennial', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 10, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 10, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Fried brie bites', 'American cheese burger', 'Poached apple tart'],
  brewers_tips: 'Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.',
  contributed_by: 'Ali Skinner <AliSkinner>',
}, {
  id: 109,
  name: 'Cocoa Psycho',
  tagline: 'Russian Imperial Stout. Rich. Decadent. Mocha.',
  first_brewed: '11/2012',
  description: 'Vanilla pods and toasted oak chips add a rounded character to this massive Russian Imperial Stout, brewed with a hefty malt bill, cacao nibs and coffee beans. Dark malts combine with Cascade to add a punchy bitterness, strong enough to offset the big chocolate sweetness.',
  image_url: 'https://images.punkapi.com/v2/109.png',
  abv: 10,
  ibu: 85,
  target_fg: 1012,
  target_og: 1098,
  ebc: 30,
  srm: 15.25,
  ph: 4.4,
  attenuation_level: 70,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Coffee Beans: 25g at end, Cocoa Nibs: 25g at end, Cocoa Nibs: 25g at conditioning, Coffee Beans: 25g at conditioning, Oak Chips: 15g at conditioning' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 6.88, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 1, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Black Malt', amount: { value: 1.25, unit: 'kilograms' } }, { name: 'Roasted Barley', amount: { value: 1.5, unit: 'kilograms' } }, { name: 'Weyermann Smoked', amount: { value: 0.5, unit: 'kilograms' } }],
    hops: [{
      name: 'Cascade', amount: { value: 75, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Cascade', amount: { value: 25, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Smokey sweet pulled brisket', 'Espresso crusted venison with a dark cherry jus', 'Affogato with vanilla ice cream'],
  brewers_tips: 'Put coffee beans and cocoa nibs in a cheese cloth and dip in wort like a tea bag. Do multiple small additions for short lengths of time – the longer you leave them in the more heavy oils will be extracted.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 110,
  name: 'Truffle and Chocolate Stout - B-Sides',
  tagline: 'Gastronomic Session Stout.',
  first_brewed: '03/2015',
  description: "Pilot Brew - Truffle & Chocolate Stout. Deep, earthy roast notes make this a gastronome's dream.",
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 5.6,
  ibu: 30,
  target_fg: 1015,
  target_og: 1058,
  ebc: 54,
  srm: 27,
  ph: 4.4,
  attenuation_level: 74,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Use Perigold Truffles after fermentation' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 5, unit: 'kilograms' } }, { name: 'Special W', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Roasted Barley', amount: { value: 0.31, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.31, unit: 'kilograms' } }],
    hops: [{
      name: 'Sorachi Ace', amount: { value: 15, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Sorachi Ace', amount: { value: 10, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Sorachi Ace', amount: { value: 10, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Sorachi Ace', amount: { value: 1.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Mushroom pithivier', 'Roast pheasant with savoy cabbage', 'Dark chocolate ganache macaroons'],
  brewers_tips: 'A little truffle goes a long way. Add 5g, leave for a 2 days and add more if needed.',
  contributed_by: 'Iain Mullan <iainmullan>',
}, {
  id: 111,
  name: 'Vagabond Pilsner',
  tagline: 'Hoppy Pilsner.',
  first_brewed: '02/2013',
  description: 'Take the thirst-quenching crispness of a German Pilsner and combine it with lemon and honey to produce a rewarding modern twist on a beer classic.',
  image_url: 'https://images.punkapi.com/v2/111.png',
  abv: 4.5,
  ibu: 55,
  target_fg: 1012,
  target_og: 1046,
  ebc: 25,
  srm: 12.5,
  ph: 4.4,
  attenuation_level: 73.9,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 9, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 3.5, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.44, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Acidulated Malt', amount: { value: 0.63, unit: 'kilograms' } }],
    hops: [{
      name: 'Cascade', amount: { value: 6.25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 6.25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Cascade', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 7.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 7.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 2007 - Pilsen Lager™',
  },
  food_pairing: ['Jamaican jerk chicken', 'Hot dog with grilled onions and spicy ketchup', 'Shortbread and raspberry jam thumbprint cookie'],
  brewers_tips: 'The addition of the acidulated malt tweaks the pH down to aid the yeast fermentation, and helps to creates the crisp lager bite. Be careful not to use more than 10% in any grist, it will turn your mash into jelly!',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 112,
  name: 'Vote Sepp',
  tagline: 'Witbier With Hibiscus.',
  first_brewed: '05/2014',
  description: 'Vote Sepp is a single hop wheat beer brewed to a session strength, with hibiscus flower, which gives it an impressively vibrant shade of pink. What Vote Sepp lacks in complexity, it more than makes up for in a perfect balance of tartness, bitterness and body.',
  image_url: 'https://images.punkapi.com/v2/112.png',
  abv: 3.6,
  ibu: 20,
  target_fg: 1009,
  target_og: 1036,
  ebc: 8,
  srm: 4,
  ph: 4.1,
  attenuation_level: 75,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Hibiscus: 37.5g Tank' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 2.5, unit: 'kilograms' } }, { name: 'Torrified Wheat', amount: { value: 0.69, unit: 'kilograms' } }],
    hops: [{
      name: 'Motueka', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Motueka', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 3944 - Belgian Witbier™',
  },
  food_pairing: ['Crab roll sushi with strawberries', 'Artichoke hearts and chicken melt', 'Caprese salad (mozzarella, tomato, basil, black pepper and sea salt)'],
  brewers_tips: 'Load hibiscus in the hot wort in a tea bag.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 113,
  name: 'Hello My Name Is Ingrid',
  tagline: 'Sophisticated Bergmanesque Beer.',
  first_brewed: '12/2010',
  description: 'A Double IPA with cloudberries added to the conditioning tank. One thing is certain – this Swedish inspired Double IPA is not as innocent as she first appears. A seductive body of rich malts and a buxom amount of Citra, Nelson Sauvin and Bramling Cross hops have been added to fresh Scandinavian cloudberries to deliver this beer’s tart finish.',
  image_url: 'https://images.punkapi.com/v2/113.png',
  abv: 8.2,
  ibu: 42,
  target_fg: 1013,
  target_og: 1078,
  ebc: 70,
  srm: 35,
  ph: 4.4,
  attenuation_level: 83.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 22, unit: 'celsius' } }, twist: 'Cloudberries: 1kg' },
  ingredients: {
    malt: [{ name: 'Maris Otter Extra Pale', amount: { value: 6.86, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.93, unit: 'kilograms' } }],
    hops: [{
      name: 'Columbus', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Columbus', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Nelson Sauvin', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Bramling Cross/ First Gold', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'NZ Nelson Sauvin', amount: { value: 71.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Bramling Cross', amount: { value: 71.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 71.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Crayfish with a chilli, coriander infused butter dip', 'Smörgås with cream topping', 'Cardamom cake with powder sugar and cloudberry jam'],
  brewers_tips: 'Add the cloudberries to your beer when racking the beer after primary fermentation. Grind them into a paste to allow maximum flavour extraction.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 114,
  name: 'U-Boat (w/ Victory Brewing)',
  tagline: 'Smoked Porter Collab With Victory Brewing.',
  first_brewed: '07/2014',
  description: 'On the palate is a big dark malt sweetness, balanced by the blend of spicy Mittelfruh and citrussy Galena. Cocoa powder, rich dark chocolate, and ripe berries interplay with a toasty burnt sugar bitterness. The mouthfeel is thick and chewy with a treacly quality that doesn’t cloy, as it plays off against the hops and roast malt bitterness.',
  image_url: 'https://images.punkapi.com/v2/114.png',
  abv: 8.4,
  ibu: 50,
  target_fg: 1015,
  target_og: 1080,
  ebc: 200,
  srm: 100,
  ph: 4.4,
  attenuation_level: 81.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 14, unit: 'celsius' } }, twist: 'Try ageing on oak chips, infusing with rum raisins, or vanilla pods' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 6.35, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.48, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 0.48, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 0.48, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 1.92, unit: 'kilograms' } }, { name: 'Smoked Warminster', amount: { value: 0.48, unit: 'kilograms' } }],
    hops: [{
      name: 'Hallertauer Mittelfrüh', amount: { value: 7.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Hallertauer Mittelfrüh', amount: { value: 11.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Galena', amount: { value: 19, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }],
    yeast: 'Wyeast 2007 - Pilsen Lager™',
  },
  food_pairing: ['Smoked bratwurst and mustard', 'Chargrilled steak', 'Grilled pineapple'],
  brewers_tips: 'A good Porter is dependant on a long fermentation and cellaring process. Keep the temperature controlled as much as possible.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 115,
  name: 'Melon And Cucumber IPA - B-Sides',
  tagline: 'Fresh Melon IPA.',
  first_brewed: '03/2015',
  description: 'A Pilot Brew with 200Kg of fresh melon and 5Kg fresh cucumber added after fermentation to produce the perfect summer refreshment.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 6,
  ibu: 50,
  target_fg: 1010,
  target_og: 1050,
  ebc: 8,
  srm: 4,
  ph: 5.2,
  attenuation_level: 87,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Melon: 500g, Cucumber: 20g' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.38, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.63, unit: 'kilograms' } }],
    hops: [{
      name: 'Ahtanum', amount: { value: 7.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Chinook', amount: { value: 5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 7.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 7.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Nelson Sauvin', amount: { value: 6, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Beef carpaccio', 'Chilled beetroot soup', 'Korean watermelon salad'],
  brewers_tips: 'Have a good food proccesser to blend up all the melon and cucumber, also sieve out the seeds from the melon.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 116,
  name: "Morag's Mojito - B-Sides",
  tagline: 'Cocktail Meets Beer.',
  first_brewed: '08/2015',
  description: 'A cunning cocktail blend of grapefruit hops, ginger spice and refreshing mint.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 6.7,
  ibu: 40,
  target_fg: 1010,
  target_og: 1063,
  ebc: 15,
  srm: 7.5,
  ph: 5.2,
  attenuation_level: 84,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Fresh mint leaves after fermentation, Grains of Paradise: 6.5g at end, Fresh Limes: 50g at end.' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 5.63, unit: 'kilograms' } }, { name: 'Ginger Root', amount: { value: 0.13, unit: 'kilograms' } }],
    hops: [{
      name: 'Citra', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Citra', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Tamale', 'Salt cod croquettes', 'Mint cheesecake'],
  brewers_tips: 'Use more freshly grated ginger in the mash to get a real spicy nature to the beer.',
  contributed_by: 'Matt Ball <GeordieMatt>',
}, {
  id: 117,
  name: 'Hop Rocker',
  tagline: 'Hoppy Aggressive Lager',
  first_brewed: '04/2007',
  description: 'The first of our foray into lager beer, Hop Rocker is a high impact, hoppy behemoth made with 100% malt. Since 2007 we have been obsessive about quality, using only the best ingredients to ensure the flavour and craftsmanship of the beer in your glass. Hop Rocker is testament to that. The malt base gives this beer a sweet, balanced complexity while the combination of New Zealand and German hops merges new world tropical juiciness with old world peppery spice.',
  image_url: 'https://images.punkapi.com/v2/117.png',
  abv: 5.5,
  ibu: 40,
  target_fg: 1010,
  target_og: 1052,
  ebc: 25,
  srm: 12,
  ph: 4.2,
  attenuation_level: 80.7,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Maris Otter Extra Pale', amount: { value: 3.78, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.31, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.31, unit: 'kilograms' } }],
    hops: [{
      name: 'Cascade', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Saaz', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Cascade', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Saflager S189',
  },
  food_pairing: ['Cajun spiced chicken wings', 'Mild cheddar', 'Lemon tart'],
  brewers_tips: 'After the fermentation has finished, chill the beer to below 5°C (if you can), wait 10 days and then rack the beer off the yeast into another bucket. The yeast left in suspension will carry on working its magic to create really clean, crisp lager flavours.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 118,
  name: 'Bounty Hunter - Shareholder Brew',
  tagline: 'Beatnik Milk Stout.',
  first_brewed: '02/2015',
  description: 'Brewed with our Equity Punks this rich, smooth stout is brewed with a blend of six malts, resulting in a welcoming, resonant black beer. From start to finish it carries an intense roastiness reminiscent of dark chocolate intertwined with a delicate hint of coconut and caramel.',
  image_url: 'https://images.punkapi.com/v2/118.png',
  abv: 6.5,
  ibu: 35,
  target_fg: 1020,
  target_og: 1068,
  ebc: 250,
  srm: 125,
  ph: 4.2,
  attenuation_level: 70.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Cacao Nibs: 25g at end, Coconut Chips: 20g at end, Lactose (wk): 375g at end, Coconut Chips: 50g at FV' },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 2.13, unit: 'kilograms' } }, { name: 'Amber', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 0.38, unit: 'kilograms' } }, { name: 'Roasted Barley', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 3', amount: { value: 0.19, unit: 'kilograms' } }],
    hops: [{
      name: 'Galena', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Coconut beef red curry', 'Butternut squash soup with toasted almonds', 'Chocolate coated macaroons'],
  brewers_tips: 'Lightly toast the coconut chips to allow better interaction with the hot wort.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 119,
  name: 'Zeitgeist',
  tagline: 'Organic Black Lager.',
  first_brewed: '12/2008',
  description: 'Zeitgeist is an idiosyncratic alternative black lager. Its inspiration is found more than 200 years ago. Zeitgeist takes an age old classic, a forgotten masterpiece, and gives it relevance and an avant-garde edge.',
  image_url: 'https://images.punkapi.com/v2/119.png',
  abv: 4.9,
  ibu: 32,
  target_fg: 1010,
  target_og: 1047.5,
  ebc: 120,
  srm: 60,
  ph: 4.3,
  attenuation_level: 79,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 15, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Organic Lager', amount: { value: 1.13, unit: 'kilograms' } }, { name: 'Organic Caramalt', amount: { value: 0.28, unit: 'kilograms' } }, { name: 'Organic Munich', amount: { value: 2.7, unit: 'kilograms' } }, { name: 'Organic Chocolate', amount: { value: 0.23, unit: 'kilograms' } }],
    hops: [{
      name: 'Cascade', amount: { value: 27.2, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Cascade', amount: { value: 27.2, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Saflager S189',
  },
  food_pairing: ['Spicy cajun fried chicken', 'Pork dumplings with rich soy sauce', 'Cinnamon carrot cake with creamy cheese frosting'],
  brewers_tips: 'Inspect the colour of the wort during boiling. If it is not quite dark enough, extend the boil by 10 - 15 mins and check again. The wort will darken during the boiling process.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 120,
  name: 'AB:10',
  tagline: 'Imperial Brown Ale Aged In Spanish Red Wine Barrels.',
  first_brewed: '10/2011',
  description: 'A decadent, robust and encapsulating Imperial Ale. A rollercoaster of devilish berries, smooth vanilla, toasted marshmallow and wine gums; caramel malt balanced with moderate bitterness and a roasty edge.',
  image_url: 'https://images.punkapi.com/v2/120.png',
  abv: 11.5,
  ibu: 80,
  target_fg: 1020,
  target_og: 1096,
  ebc: 115,
  srm: 57.5,
  ph: 4.4,
  attenuation_level: 79.2,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 69, unit: 'celsius' }, duration: 45 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Age in red wine barrels' },
  ingredients: {
    malt: [{ name: 'Extra Pale - Spring Blend', amount: { value: 8.75, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.94, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.44, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 0.11, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 0.11, unit: 'kilograms' } }, { name: 'Brown', amount: { value: 0.37, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 0.94, unit: 'kilograms' } }],
    hops: [{
      name: 'Galena', amount: { value: 37.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Willamette', amount: { value: 50, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'First Gold', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ["Calves' liver with onion relish", 'Coq au vin', "S'mores"],
  brewers_tips: 'Be careful of sticking the run-off. There are a lot of specialty malts in this mash that can prove problematic if pulled onto the run-off plates.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 121,
  name: 'Punk Monk',
  tagline: 'Who Ordered The Belgian Yeast?',
  first_brewed: '07/2009',
  description: 'Old world meets new in this trans-atlantic mash up of brewing ingredients. Belgian funk incorporates itself into the pithy, resin and grapefruit, with pineapple and banana rounding out a rambunctious avalanche of fruity hops.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 6,
  ibu: 60,
  target_fg: 1010,
  target_og: 1056,
  ebc: 17,
  srm: 8.5,
  ph: 4.4,
  attenuation_level: 82.1,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 5.3, unit: 'kilograms' } }],
    hops: [{
      name: 'Ahtanum', amount: { value: 17.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Chinook', amount: { value: 15, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Crystal', amount: { value: 17.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 17.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 30, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 3522 - Belgian Ardennes™',
  },
  food_pairing: ['Moules frites', 'Thai green curry', 'Lemon posset'],
  brewers_tips: 'Bottle condition and prime with a little bit more sugar than usual to attain those authentic fine Belgian bubbles.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 122,
  name: 'Dog Fight (w/ Flying Dog)',
  tagline: 'Rye IPA - Flying Dog Collab.',
  first_brewed: '10/2012',
  description: 'A clash of kings. A spiced toffee malt backbone arranged against a tidal wave of US hops. Citrus, nectarine and juicy tropical fruits are layered into this complex beer.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 8.5,
  ibu: 65,
  target_fg: 1012,
  target_og: 1078,
  ebc: 31.2,
  srm: 15.6,
  ph: 4.4,
  attenuation_level: 84.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 50 }], fermentation: { temp: { value: 18, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale - Spring Blend', amount: { value: 6.79, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Rye', amount: { value: 1.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Chinook', amount: { value: 50, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 62.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 62.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 107.14, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Chinook', amount: { value: 142.86, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Black bean and avocado enchiladas with mole sauce', 'Mexican spiced cheddar cheese', 'Pancakes with maple syrup'],
  brewers_tips: 'Space the rye and caramalt out evenly in the mash. If it is all collected in one section, it can contribute to a sticky run-off.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 123,
  name: 'Candy Kaiser',
  tagline: 'NorDdeutsches Retro Altbier.',
  first_brewed: '08/2015',
  description: 'In this northern German style retro altbier, we’ve dialled down the dry-hops to zero, but cranked up the malt to create massive aromas. Toasty, toffee and floral notes duke it out for supremacy in the headspace of your glass. When this all hits your palate, the steely bitterness combines with the rich dry malt and the subtle alcohol warmth in a full throttle attack on your taste buds.',
  image_url: 'https://images.punkapi.com/v2/123.png',
  abv: 5.2,
  ibu: 45,
  target_fg: 1009,
  target_og: 1049,
  ebc: 45,
  srm: 22.5,
  ph: 4.2,
  attenuation_level: 81.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 14, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 3.94, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.44, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 0.13, unit: 'kilograms' } }],
    hops: [{
      name: 'Magnum', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Hersbrucker', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Aged gouda', 'German bratwurst sausage', 'Poached pear fritters'],
  brewers_tips: 'Make sure that the boil is vigorous enough to roll. This means that high flavours are active, and undesirable compounds like DMS are not left in the beer.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 124,
  name: 'Chaos Theory',
  tagline: 'Predictably Random IPA.',
  first_brewed: '10/2008',
  description: 'Chaos Theory is the most under- rated achievement of 20th Century science. This beer can only aspire to parallel to the mathematical use of the word chaos, which is at odds to the common parlance. The purest showcase of the magnificent hop that is Nelson Sauvin; grapefruit, pineapple and caramel sing above the chaos of life.',
  image_url: 'https://images.punkapi.com/v2/124.png',
  abv: 7.1,
  ibu: 90,
  target_fg: 1013,
  target_og: 1067,
  ebc: 15,
  srm: 7.5,
  ph: 4.4,
  attenuation_level: 80.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 5, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Nelson Sauvin', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Nelson Sauvin', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Nelson Sauvin', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Nelson Sauvin', amount: { value: 50, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Spicy mexican meatball stew', 'Habenero and mango pulled pork tacos', 'Spiced pumpkin pie with chocolate whipped cream'],
  brewers_tips: 'Get to know the guys in your local homebrew shop. They can give you a heads up when rare brewing materials – like Nelson Sauvin – are coming in.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 125,
  name: 'Juniper Wheat Beer',
  tagline: 'American Style Wheat Ale With Juniper Berries.',
  first_brewed: '06/2011',
  description: "A variant on the 2008 release of Bad Pixie, but hoppier. Substituting the lemon peel for Ahtanum provided a vibrant floral and lemon citrus hit, balancing the slight tartness from the wheat. This dry, effervescent brew is perfect on Scotland's one day of summer.",
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 5,
  ibu: 40,
  target_fg: 1008,
  target_og: 1047,
  ebc: 15,
  srm: 7.5,
  ph: 4.1,
  attenuation_level: 83,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 17, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 2.75, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 2.13, unit: 'kilograms' } }],
    hops: [{
      name: 'Ahtanum', amount: { value: 31.25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Ahtanum', amount: { value: 31.25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Juniper Berries', amount: { value: 25, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1010 - American Wheat™',
  },
  food_pairing: ['Herring rollmops', 'Chicken schnitzel', 'Gin & elderflower jelly'],
  brewers_tips: 'Give the juniper berries a quick blast in a food processor to break them up - otherwise they can jam up your fermenter.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 126,
  name: 'Jet Black Heart',
  tagline: 'Oatmeal Milk Stout. Dark. Roasty. Velvety.',
  first_brewed: '01/2016',
  description: 'Good things come to those who wait. This smooth and roasty oatmeal milk stout won our 2015 Prototype Challenge at a canter. Roasty coffee and chocolate lead to a decadent, full-bodied richness of near uncharted depths with a velvet mouthfeel from the addition of oatmeal and a touch of wheat. This is complemented at every turn by the Magnum and Sorachi Ace hops, with the latter bringing an intensity of smooth vanilla and dark berry fruit on the long, rewarding finish.',
  image_url: 'https://images.punkapi.com/v2/126.png',
  abv: 4.7,
  ibu: 45,
  target_fg: 1019,
  target_og: 1055,
  ebc: 200,
  srm: 100,
  ph: 4.4,
  attenuation_level: 70,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 2.75, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.19, unit: 'kilograms' } }, { name: 'Brown', amount: { value: 0.38, unit: 'kilograms' } }, { name: 'Black Malt', amount: { value: 0.19, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 0.19, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 0.38, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Lactose', amount: { value: 0.38, unit: 'kilograms' } }],
    hops: [{
      name: 'Magnum', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Sorachi Ace', amount: { value: 6.3, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Oyster beignets', 'Beef shin stew', "A Shakin' jesse"],
  brewers_tips: "There's a lot of speciality malt in the mash. Make sure you take the run off nice and steady – increase the flow too much and pull in the bed at your peril.",
  contributed_by: 'Sasha <SashaMasondeCaires>',
}, {
  id: 127,
  name: 'Galaxy',
  tagline: 'Single Hop India Pale Ale – 2012.',
  first_brewed: '02/2012',
  description: "With all the rich tropical flavour you'd expect from Australia's Galaxy, this beer backs up a strong citrus aroma and flavour with a mellow undercurrent of passion fruit and mango. Zingy and sweet but not too sweet, Galaxy has a soft and inviting fruity hop character.",
  image_url: 'https://images.punkapi.com/v2/127.png',
  abv: 6.7,
  ibu: 67,
  target_fg: 1064,
  target_og: 1013,
  ebc: 19,
  srm: 9.5,
  ph: 4.4,
  attenuation_level: 79.7,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 68, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale - Spring Blend', amount: { value: 5.87, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.37, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.19, unit: 'kilograms' } }],
    hops: [{
      name: 'Galaxy', amount: { value: 75.4, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galaxy', amount: { value: 75.4, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Galaxy', amount: { value: 250, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Spicy green chilli and lemongrass chicken thai curry', 'Sharp cheddar cheese and crackers', 'Ginger and orange zest cookies'],
  brewers_tips: 'Use fresh Galaxy for the best flavour profile.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 128,
  name: 'White Noise',
  tagline: 'White IPA with Motueka.',
  first_brewed: '07/2012',
  description: 'A White IPA; brewed with plenty of wheat, fermented with a Belgian yeast with some coriander thrown in for good measure. Oh and this one has mountains of Motueka hops. And then lots of dry hops too.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 6.8,
  ibu: 50,
  target_fg: 1012,
  target_og: 1060,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 80,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 67, unit: 'celsius' }, duration: 30 }], fermentation: { temp: { value: 18, unit: 'celsius' } }, twist: 'Coriander powder: 37.5g at end' },
  ingredients: {
    malt: [{ name: 'Extra Pale - Spring Blend', amount: { value: 2.81, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 2.81, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.94, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 0.31, unit: 'kilograms' } }],
    hops: [{
      name: 'Motueka', amount: { value: 50, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Motueka', amount: { value: 31.25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 250, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 3944 - Belgian Witbier™',
  },
  food_pairing: ['Huevos rancheros', 'Mild coriander and chilli chicken curry', 'Panna cotta with an orange and raspberry sauce'],
  brewers_tips: 'Coriander seed or powder can be added to either the boil, or after the fermentation has finished. They will both impact different characteristics to the beer.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 129,
  name: 'Hinterland',
  tagline: 'A Most Beguiling Brew.',
  first_brewed: '05/2015',
  description: 'Hinterland is a beer long in the creation, and even longer in the appreciation. On the aroma, deep reverberating roasty bitterness and sweet dark chocolate. Also in evidence, woodsmoke, rich vanilla, mocha and marzipan. When tasting, Hinterland reveals itself as the beer moves from cellar temperature to something warmer, yielding all of the above plus dried fruit, rich ganache and ending on a resoundingly warming finish redolent of chocolate liqueur or plum brandy.',
  image_url: 'https://images.punkapi.com/v2/129.png',
  abv: 9,
  ibu: 85,
  target_fg: 1025,
  target_og: 1094,
  ebc: 400,
  srm: 200,
  ph: 4.3,
  attenuation_level: 73.4,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Lactose (Milk Sugar): 500g at middle' },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 6.88, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 1, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 0.75, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 1, unit: 'kilograms' } }],
    hops: [{
      name: 'Bramling Cross', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Bramling Cross', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Sorachi Ace', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Sorachi Ace', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Willamette', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Mulled cheddar buffalo burger', 'Venison with warm spices (cardamom) and sweet potato', 'Pure vanilla bean ice cream'],
  brewers_tips: 'Towards the end of the fermentation allow the temperature to free rise. This will let the yeast finish off the fermentation and scour off-flavours from the beer.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 130,
  name: 'Spiced Cherry Sour - B-Sides',
  tagline: 'Alternative Festive.',
  first_brewed: '03/2015',
  description: 'Think bakewell tart with Christmas spices.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 6.5,
  ibu: 20,
  target_fg: 1010,
  target_og: 1060,
  ebc: null,
  srm: null,
  ph: 3.2,
  attenuation_level: 87,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 3.75, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Rye', amount: { value: 1.25, unit: 'kilograms' } }, { name: 'Acidulated Malt', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Special W', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.63, unit: 'kilograms' } }],
    hops: [{
      name: 'Citra', amount: { value: 3.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Sorachi Ace', amount: { value: 1.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Wild rice salad with wild mushrooms', 'Apple gingerbread pancakes', 'Christmas Pudding'],
  brewers_tips: 'In the boil: cinnamon, star anise, clove, guinea pepper. After fermentation add: raspberry puree, cherry concentrate, bitter almond extract, American oak chips and Tahitian vanilla beans.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 131,
  name: 'Motueka',
  tagline: 'Single Hop India Pale Ale – 2012.',
  first_brewed: '02/2012',
  description: "Lemon and lime rise to the top of this hoppy brew, with supporting acts of tropical fruit for a very rounded, thoroughly satisfying flavour. Motueka is a hop we've used in loads of recipes; it has enough resin to balance the intense fruity character.",
  image_url: 'https://images.punkapi.com/v2/131.png',
  abv: 6.7,
  ibu: 67,
  target_fg: 1064,
  target_og: 1013,
  ebc: 19,
  srm: 9.5,
  ph: 4.4,
  attenuation_level: 79.7,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 68, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale - Spring Blend', amount: { value: 5.87, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.37, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.19, unit: 'kilograms' } }],
    hops: [{
      name: 'Motueka', amount: { value: 75, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Motueka', amount: { value: 100, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 250, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Tofu pad Thai with fresh lime juice and coriander', 'Fish tacos with avocado', 'Key lime pie'],
  brewers_tips: 'Be careful with the Motueka additions. It has an intense citrus character that is often tempered by using in conjunction with other hops.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 132,
  name: '5am Saint',
  tagline: 'Bittersweet Chaos. Malty. Fruity. Bite.',
  first_brewed: '06/2009',
  description: 'Out of order and stability comes the rush of the pack. Berry and caramel riding alongside marmalade and chocolate. Spice and toast jostle with lychee and biscuit. The needle flicks to all points of the compass. It drives you towards the horizon, towards the vanishing point. And it keeps going...',
  image_url: 'https://images.punkapi.com/v2/132.png',
  abv: 5,
  ibu: 30,
  target_fg: 1012,
  target_og: 1050,
  ebc: 60,
  srm: 30.5,
  ph: 4.4,
  attenuation_level: 76,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 62, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 2.56, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.88, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.38, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.13, unit: 'kilograms' } }],
    hops: [{
      name: 'Cascade', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Nelson Sauvin', amount: { value: 2.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Nelson Sauvin', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 25, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Cascade', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Ahtanum', amount: { value: 25, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Nelson Sauvin', amount: { value: 12.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Centennial', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Amarillo', amount: { value: 25, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Cheddar cheese melt on crisp rye toast', 'Moroccan chicken tangine', 'Cheesecake topped with kiwi'],
  brewers_tips: 'Go easy on the crystal and dark crystal malt. Too much will skew the flavour profile away from lychees and citrus towards dried fruit.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 133,
  name: 'Black Eye Joe (w/ Stone Brewing Co)',
  tagline: 'Coffe Black IPA.',
  first_brewed: '11/2013',
  description: 'A fresh tropical hit from this Black IPA, with undertones of roasted coffee. A well balanced, drinkable yet complex beer.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 5.8,
  ibu: 40,
  target_fg: 1008,
  target_og: 1053,
  ebc: 177.3,
  srm: 88.7,
  ph: 4.4,
  attenuation_level: 84.9,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Fresh coffee in the boil.' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 2.7, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.7, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.64, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 0.06, unit: 'kilograms' } }],
    hops: [{
      name: 'Simcoe', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Coffee', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Coffee', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 125, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Amarillo', amount: { value: 125, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Spicy carne asada with black beans and Mexican Rice', 'Pork smothered in mole sauce', 'Chocolate covered espresso beans'],
  brewers_tips: 'Be careful to select the right coffee for this brew. For a fresh but fruity coffee hit, try to find lightly roasted Arabica beans.',
  contributed_by: 'Ali Skinner <Ali SKinner>',
}, {
  id: 134,
  name: "Mr.Miyagi's Wasabi Stout",
  tagline: 'Spicy Stout Brewed By Aberdeen Bar Staff.',
  first_brewed: '09/2011',
  description: 'Invented by and brewed by Dan Bloxham, no matter what anyone else says. A medium bodied, bitter, US style stout, with a wasabi warmth, a subtle earthiness and a hint of soy sauce.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 7.5,
  ibu: 90,
  target_fg: 1015,
  target_og: 1072,
  ebc: 200,
  srm: 102,
  ph: 4.4,
  attenuation_level: 79.2,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Wasabi Powder: 45g at end, Wasabi Paste: 75g at end' },
  ingredients: {
    malt: [{ name: 'Maris Otter Extra Pale', amount: { value: 6, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Crystal', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Black Malt', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Roasted Malt', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Chinook', amount: { value: 81.25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Sorachi Ace', amount: { value: 62.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['California sushi rolls with fresh crab and wasabi infused soy sauce', 'Spicy chilli and coriander Thai beef stew', 'Carrot and coriander rich cake'],
  brewers_tips: "During mashing in use only pale malts, add flaked oats during the second half of the mashing process. If you can't get real wasabi, substitute for some horseradish to get the peppery heat in the beer.",
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 135,
  name: 'Growler',
  tagline: 'Citra Hopped Pilsner',
  first_brewed: '03/2011',
  description: 'Brewed by Pivovar Group at BrewDog, specifically for thier bars, Pivo in Leeds, Sheffield Tap in Sheffield, and Euston Tap in Euston. It was then lagered for 2 months and dry hopped with citra.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 4.5,
  ibu: 38,
  target_fg: 1008,
  target_og: 1042.9,
  ebc: 18,
  srm: 9,
  ph: 4.4,
  attenuation_level: 81,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 10, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 4, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.13, unit: 'kilograms' } }],
    hops: [{
      name: 'Citra', amount: { value: 8.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Citra', amount: { value: 62.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 31.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 2007 - Pilsen Lager™',
  },
  food_pairing: ['Havarti cheese', 'Cajun spiced fried chicken', 'Lemon squares'],
  brewers_tips: 'Dry hop three days before you intend to package to get the freshest hop flavour possible.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 136,
  name: '#Mashtag 2014',
  tagline: 'Democratic Imperial Red Ale.',
  first_brewed: '05/2014',
  description: 'A slightly psychotic, orange-that- thinks-it’s-a-grapefruit character builds upon and intensifies the hop bitterness, squaring up against the rich sweet malt base. The result is a huge Red Ale with a drinkable quality you’d expect in a beer half this strength.',
  image_url: 'https://images.punkapi.com/v2/136.png',
  abv: 9,
  ibu: 50,
  target_fg: 1015,
  target_og: 1084,
  ebc: 20,
  srm: 10,
  ph: 4.4,
  attenuation_level: 82.1,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Blood Orange: 250g at end, Lemon Peel: 3.9g at end, Orange Peel: 7.7g at end' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 7.5, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.38, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.58, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 0.1, unit: 'kilograms' } }],
    hops: [{
      name: 'Motueka', amount: { value: 9.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Hallertauer Mittelfrüh', amount: { value: 19, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 19, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 19, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 19, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 28.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 57.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Centennial', amount: { value: 57.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 57.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Beetroot and blood orange salad', 'Coriander and mango grilled steak tacos', 'Orange sherbet ice cream'],
  brewers_tips: 'Experiment with different citrus juices to get a wide array of flavours and aromas in the beer.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 137,
  name: 'Sink The Bismarck!',
  tagline: 'IPA For The Dedicated.',
  first_brewed: '12/2009',
  description: 'This is IPA amplified, the most evocative style of the craft beer resistance with the volume cranked off the scale. Kettle hopped, dry hopped then freeze hopped for a deep fruit, resinous and spicy aroma. A full on attack on your taste buds ensues as the incredibly smooth liquid delivers a crescendo of malt, sweet honey, hop oils and a torpedo of hop bitterness that lasts and lasts.',
  image_url: 'https://images.punkapi.com/v2/137.png',
  abv: 41,
  ibu: 1085,
  target_fg: 1016,
  target_og: 1085,
  ebc: 40,
  srm: 20,
  ph: 4.4,
  attenuation_level: 81.2,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 7.4, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.38, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.29, unit: 'kilograms' } }],
    hops: [{
      name: 'Columbus Extract', amount: { value: 30.8, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Columbus', amount: { value: 19.2, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Columbus', amount: { value: 19.2, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 19.2, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 19.2, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Columbus', amount: { value: 19.2, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 19.2, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 19.2, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 115.4, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Columbus', amount: { value: 96.2, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 96.2, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Amarillo', amount: { value: 76.9, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Charred apricot salad', 'Whole baked reblochon', 'Salted caramel crème brûlée'],
  brewers_tips: 'Some serious investment in equipment will be required here to get the beer down to -40°C in order to remove enough water. Steep the final beer with a handful of your favourite American hops for 12 hours before bottling.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 138,
  name: 'Dog A',
  tagline: 'Cacao, Coffee, Chili Imperial Anniversary Stout.',
  first_brewed: '05/2012',
  description: "Our anniversary stout was based on AB:04, one of our most sought after beers ever. This beer is slightly different each year, with subtle variations coming into play purely down to environmental and fermentation factors. What doesn't change is the rich dark chocolate, bitter coffee and chili warmth of this monumental stout.",
  image_url: 'https://images.punkapi.com/v2/138.png',
  abv: 15,
  ibu: 90,
  target_fg: 1003,
  target_og: 1120,
  ebc: 100,
  srm: 50,
  ph: 4.4,
  attenuation_level: 98,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 90 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Based on AB:04, but with added vanilla and 3.5 times the chili.' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 8, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 1.38, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.88, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 3', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Honey', amount: { value: 0.7, unit: 'kilograms' } }],
    hops: [{
      name: 'Chinook', amount: { value: 50, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Cascade', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Fuggles', amount: { value: 25, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Coffee beans', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Fuggles', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Coffee beans', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'twist',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Blackened cajun beef', 'Cave-aged cheddar', 'Flourless chocolate chilli cake'],
  brewers_tips: 'Be really careful when mashing, as this amount of malt can get tough to sparge! Add honey into the boil, and naga chili and vanilla in maturation (soak them in some neutral spirit to sanitise)',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 139,
  name: 'Born To Die',
  tagline: 'Terminally Hoppy India Pale Ale.',
  first_brewed: '03/2015',
  description: 'Savagely bitter, exceptionally dry, this IPA is born to die on a predetermined day. It proudly displays its short-lived life span front and centre. There is no better time to drink this than the moment you get your paws on it. Awesome bitterness backed up by unrelenting aromas of resin, citrus, and juicy fruit. Born To Die is a eulogy to the hops that sacrificed themselves in its creation. An incredibly ambitious and satisfying small batch brew.',
  image_url: 'https://images.punkapi.com/v2/139.png',
  abv: 8.5,
  ibu: 85,
  target_fg: 1007,
  target_og: 1072,
  ebc: 15,
  srm: 7.5,
  ph: 4.4,
  attenuation_level: 90.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 18, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 5.5, unit: 'kilograms' } }, { name: 'Maris Otter Extra Pale', amount: { value: 1, unit: 'kilograms' } }],
    hops: [{
      name: 'C02 Extract', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Amarillo', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Mosaic', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Caramelised onion and lightly seared steak', 'Pulled barbecue brisket', 'Salted caramel cheesecake'],
  brewers_tips: 'Fresh is best with this beer. Use fresh hops in the brew and during dry hop stages. Condition just long enough to let the powerful grassy aroma cut back - and drink.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 140,
  name: 'Pioneer - IPA Is Dead',
  tagline: 'Single Hop India Pale Ale.',
  first_brewed: '03/2015',
  description: '2015 IPA is Dead Series. Pioneer hails from the hop gardens of Kent, and for those expecting something classically English, they surprise with an unforeseen blast of lemony citrus. Bookended with a herbal, cedar quality, these high alpha UK hops pack a pithy zing not often seen from these hop-growing isles.',
  image_url: 'https://images.punkapi.com/v2/140.png',
  abv: 7.2,
  ibu: 100,
  target_fg: 1010,
  target_og: 1064,
  ebc: 12,
  srm: 6,
  ph: 4.4,
  attenuation_level: 84,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 5.88, unit: 'kilograms' } }],
    hops: [{
      name: 'Pioneer', amount: { value: 41.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Pioneer', amount: { value: 41.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Pioneer', amount: { value: 41.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Fried teriyaki chicken', 'Chicken jalfrezi', 'Chocolate and toffee fondant'],
  brewers_tips: 'Ensure to get the dry hops in and out within 3 days to ensure you capture the best of the hop.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 141,
  name: 'Cap Dog (w/ Cap Brewery)',
  tagline: 'Black Cascara IPA.',
  first_brewed: '08/2014',
  description: 'A collaboration by BrewDog and CAP with Cascara green unroasted cherry coffee beans.',
  image_url: 'https://images.punkapi.com/v2/141.png',
  abv: 9,
  ibu: 80,
  target_fg: 1014,
  target_og: 1083,
  ebc: 180,
  srm: 90,
  ph: 5.2,
  attenuation_level: 83.1,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Cascara: 500g' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 7.02, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.19, unit: 'kilograms' } }, { name: 'Rye', amount: { value: 0.96, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 0.29, unit: 'kilograms' } }, { name: 'Cascara', amount: { value: 0.04, unit: 'kilograms' } }],
    hops: [{
      name: 'Centennial', amount: { value: 38.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 19, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 77, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Cascara', amount: { value: 38.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Chilli con carne', 'Pepper jack cheese burger on a brioche bun', 'Coffee cake'],
  brewers_tips: 'Split the Cascara evenly between the mash and end of boil to really get the most out of it.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 142,
  name: 'Orange Blossom - B-Sides',
  tagline: 'Citrus Wheat Braggot.',
  first_brewed: '08/2015',
  description: 'Orange blossom honey braggot. A floral easy drinker with a hint of citrus.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 3.8,
  ibu: 20,
  target_fg: 1000,
  target_og: 1039,
  ebc: 6,
  srm: 3,
  ph: 5.2,
  attenuation_level: 87,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Orange blossom honey: 1kg in FV.' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 2.5, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 1.25, unit: 'kilograms' } }, { name: 'Rye', amount: { value: 0.63, unit: 'kilograms' } }],
    hops: [{
      name: 'Citra', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Citra', amount: { value: 7.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 7.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Soy and honey glazed mackerel', 'Moroccan spice lamb shanks', 'Baklava'],
  brewers_tips: 'If possible use the orange blossom honey addition at the end of fermentation to carbonate the beer, this will keep the delicate blossom honey aroma from escaping.',
  contributed_by: 'Matt Ball <GeordieMatt>',
}, {
  id: 143,
  name: 'Lizard Bride - Prototype Challenge',
  tagline: 'Fruit Infused Sour IPA.',
  first_brewed: '07/2015',
  description: 'Wonderfully tart, bitter, piney and filled with the fruity elements from raspberries, blueberries and sour cherries. Oh, and it’s purple.',
  image_url: 'https://images.punkapi.com/v2/143.png',
  abv: 5.7,
  ibu: 35,
  target_fg: 1009,
  target_og: 1053,
  ebc: 25,
  srm: 12.5,
  ph: 4.4,
  attenuation_level: 79.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 17, unit: 'celsius' } }, twist: 'Blackcurrant: 65g at FV, Sour Cherry: 65g at FV, Blueberry: 65g at FV, Sea Buckthorn: 65g at FV, Cranberry: 65g at FV, Blackberry: 65g at FV, Sweet cherry: 65g at FV' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.25, unit: 'kilograms' } }, { name: 'Carared', amount: { value: 0.63, unit: 'kilograms' } }],
    hops: [{
      name: 'Citra', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Challenger', amount: { value: 6, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 10, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Bramling Cross', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Citra', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Bramling Cross', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Mosaic', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Nelson Sauvin', amount: { value: 12.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Roasted pumpkin and mozzarella', 'Black forrest gateaux'],
  brewers_tips: 'Try to find the ripest berries possible to impart as much juicy goodness as possible. These can be forzen until you have the full set.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 144,
  name: 'Tokyo*',
  tagline: 'Intergalactic Stout. Rich. Smoky. Fruity.',
  first_brewed: '06/2009',
  description: 'Our most involved beer, Tokyo* is an Imperial Stout brewed with copious amounts of specialty malts, jasmine and cranberries, dry-hopped with a bucket-load of our favourite hops and then carefully aged on toasted French oak chips. It’s all about moderation. Everything in moderation, including moderation itself...',
  image_url: 'https://images.punkapi.com/v2/144.png',
  abv: 16.2,
  ibu: 85,
  target_fg: 1028,
  target_og: 1157,
  ebc: 250,
  srm: 127,
  ph: 4.4,
  attenuation_level: 82.2,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: 'Cranberry: 25g at end, Jasmine: 25g at end, Muscovado sugar: 300g at middle, Oak chips: 15g at FV' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 11.25, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 1.75, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 0.5, unit: 'kilograms' } }, { name: 'Roasted Barley', amount: { value: 0.5, unit: 'kilograms' } }],
    hops: [{
      name: 'Chinook', amount: { value: 37.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galena', amount: { value: 37.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Chinook', amount: { value: 37.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galena', amount: { value: 37.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galena', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'First Gold', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'WLP099 - Super High Gravity Ale',
  },
  food_pairing: ['Herbal roast beef with a cranberry jus', 'Baked honey glazed ham with dark fruit sauce', 'Dark fruit cake'],
  brewers_tips: 'If in doubt, just split the malt bill in two and do a double mash. Mash and collect, clean out and mash and collect again. Don’t even bother sparging – you don’t want any more water in there. Keep the fermentation a little warmer than usual 21 - 23°C, and don’t panic if it takes a month to ferment...',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 145,
  name: 'Sorachi Bitter - B-Sides',
  tagline: 'Sorachi Ace Bitter.',
  first_brewed: '03/2015',
  description: 'Pilot Brew: A twist on an English Bitter style beer, using Sorachi Ace hops throughout making a showcase of the off the dill and lemon character.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 6.3,
  ibu: 130,
  target_fg: 1010,
  target_og: 1060,
  ebc: 14,
  srm: 7,
  ph: 5.2,
  attenuation_level: 83,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'This beer was unfiltered to give it a traditional ale appearance, Indian Coriander: 2.5g at end' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.38, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.16, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.16, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 1.25, unit: 'kilograms' } }, { name: 'Rye', amount: { value: 0.63, unit: 'kilograms' } }],
    hops: [{
      name: 'Galena', amount: { value: 17.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Sorachi Ace', amount: { value: 17.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Ella', amount: { value: 17.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galena', amount: { value: 17.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Sorachi Ace', amount: { value: 17.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Ella', amount: { value: 17.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Galena', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Sorachi Ace', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Ella', amount: { value: 17.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Galena', amount: { value: 10, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Sorachi Ace', amount: { value: 10, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Ella', amount: { value: 10, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Greek piroshki pies', 'Poached salmon with salsa verde', 'Strawberry filo tarts'],
  brewers_tips: 'The touch of rye adds a great touch of spice that plays off the hops really well.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 146,
  name: 'Nelson Sauvin',
  tagline: 'Single Hop IPA Series – 2011.',
  first_brewed: '01/2011',
  description: 'Nelson is a love it or hate it kinda hop. We are cool with that, if we wanted to keep everyone happy we would be brewing Fosters anyway. Sharp as a razor, this New Zealand hop slices its way through your taste buds and is brutally resinous, almost scraping the intense flavours of passion fruit along your poor tongue. There is a huge depth of tropical fruit flavour with astringent gooseberry balanced against the robust malt base. Throw another shrimp on the barbie mate and you are all set. New Zealand is near Austria, right?',
  image_url: 'https://images.punkapi.com/v2/146.png',
  abv: 7.5,
  ibu: 75,
  target_fg: 1013,
  target_og: 1068,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 82.1,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 6.38, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.13, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Nelson Sauvin', amount: { value: 37.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Nelson Sauvin', amount: { value: 50, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Grilled halloumi salad with orange and pomegranate vinaigrette', 'Baked Camembert with smoked garlic, and salt and pepper wheat crackers', 'Crab cakes with lemon cream and herb dipping sauce'],
  brewers_tips: 'Nelson is an amazing hop in the correct proportions. Too much and the beer will start to taste like onions and garlic.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 147,
  name: 'Hello My Name Is Little Ingrid',
  tagline: 'Cloudberry Session IPA.',
  first_brewed: '03/2015',
  description: 'This beer hits all the high-points of Hello My Name is Ingrid – with one important exception. Brewed at 4.4% abv, Little Ingrid is a session- strength version of our cloudberry- infused celebration of all that is epic about Sweden. The zesty balance of citrus from the four different hops is just as pronounced as in the original.',
  image_url: 'https://images.punkapi.com/v2/147.png',
  abv: 4.4,
  ibu: 35,
  target_fg: 1012,
  target_og: 1045,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 73.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Cloudberries: 27.5g at end' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 3.69, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.5, unit: 'kilograms' } }],
    hops: [{
      name: 'Columbus', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Columbus', amount: { value: 25, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 25, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Nelson Sauvin', amount: { value: 75, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Bramling Cross', amount: { value: 75, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Columbus', amount: { value: 75, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 75, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Nelson Sauvin', amount: { value: 75, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Bramling Cross', amount: { value: 75, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Nelson Sauvin', amount: { value: 70, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Bramling Cross', amount: { value: 70, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 70, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Scones with cloudberry jam', 'Oysters with a chilli and dill sauce', 'Rhubarb tart'],
  brewers_tips: 'Sourcing fresh cloudberries might involve a trip to Sweden but boy are they worth it.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 148,
  name: 'AB:02',
  tagline: 'Triple Dry Hopped Imperial Red Ale.',
  first_brewed: '05/2010',
  description: 'The second installation in the Abstrakt Concept beer line up. All the benefits of a malty biscuited red ale, layered with tons of hops. We recommend ageing this beer for 6 months. Try one now, and one for later.',
  image_url: 'https://images.punkapi.com/v2/148.png',
  abv: 18,
  ibu: 70,
  target_fg: 1010,
  target_og: 1150,
  ebc: 57,
  srm: 28.5,
  ph: 4.4,
  attenuation_level: 93.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 22, unit: 'celsius' } }, twist: 'Add white sugar to the fermentation to keep the yeast fermenting and produce more alcohol' },
  ingredients: {
    malt: [{ name: 'Maris Otter Extra Pale', amount: { value: 11.25, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.31, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.44, unit: 'kilograms' } }],
    hops: [{
      name: 'Chinook', amount: { value: 18.8, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 18.8, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Chinook', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Chinook', amount: { value: 62.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 62.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Ahtanum', amount: { value: 62.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 175, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Centennial', amount: { value: 175, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Ahtanum', amount: { value: 150, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Strong gorgonzola endive salad', 'Sirloin steak with fresh salad', 'Cinnamon poached pears'],
  brewers_tips: 'Leaving a large amount of hops in contact with the beer for extended periods will create some undesirable off flavours in the beer. If in doubt rack out to another vessel - then add more dry hops. Keep adding sugar until you hit the ABV.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 149,
  name: 'AB:03',
  tagline: 'Barrel-Aged Imperial Ale.',
  first_brewed: '09/2008',
  description: 'This Abstrakt started life as a simple imperial Ale, but upon the addition of fresh Scottish raspberries and strawberries, and left to mature for 2 years in Invergordon whisky casks that had held whisky for over 40 years, this beer transcended into something new.',
  image_url: 'https://images.punkapi.com/v2/149.png',
  abv: 10.5,
  ibu: 14,
  target_fg: 1013,
  target_og: 1093,
  ebc: null,
  srm: null,
  ph: 4.4,
  attenuation_level: 80,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 90 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Strawberries: 1kg, Raspberries: 1kg, Oak Chips: 75g' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 8, unit: 'kilograms' } }],
    hops: [{
      name: 'Magnum', amount: { value: 66.7, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Haggis spring rolls', 'Honey glazed duck breast', 'Cranachan'],
  brewers_tips: 'Add your hops with five minutes of the boil left in a nod to the great lambic producers of Belgium.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 150,
  name: 'AB:13',
  tagline: 'Cask-Aged Cherry Imperial Stout.',
  first_brewed: '01/2012',
  description: 'A cherry imperial stout aged in ex- sherry whisky barrels. Based on the classic German Schwarzwald (Black Forest) dessert. Intense dark fruit flavours of cherry, plum, raisin and currant, coupled with deep bitter chocolate, espresso and a full- bodied coffee and cream character.',
  image_url: 'https://images.punkapi.com/v2/150.png',
  abv: 11.3,
  ibu: 50,
  target_fg: 1020,
  target_og: 1098,
  ebc: 164,
  srm: 83,
  ph: 4.4,
  attenuation_level: 79.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: 'Lactose: 125g at middle, Sour cherries: 187.5g at middle' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 10, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 2', amount: { value: 1.88, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 1.88, unit: 'kilograms' } }],
    hops: [{
      name: 'Saaz', amount: { value: 125, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Saaz', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Pheasant paté', 'Roast duck in a cherry glaze', 'Chocolate torte with a dark fruit compote'],
  brewers_tips: 'To mimic the sherry cask ageing character, soak some oak chips in sherry for 48 hours then steep them in the beer after primary fermentation has finished.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 151,
  name: 'Rhubarb Saison - B-Sides',
  tagline: 'Spiced Rhubarb Saison.',
  first_brewed: '10/2015',
  description: 'Spiced peppercorn and rhubarb Saison.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 6.4,
  ibu: 25,
  target_fg: 1008,
  target_og: 1052,
  ebc: 10,
  srm: 5,
  ph: 5.2,
  attenuation_level: 87,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 3.75, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 0.42, unit: 'kilograms' } }],
    hops: [{
      name: 'Magnum', amount: { value: 10, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 3711 - French Saison™',
  },
  food_pairing: ['Lamb cutlets with cucumber raita', 'Pigeon pea dal', 'Set vanilla custard'],
  brewers_tips: 'Be prepared to give your Saison yeast plenty of time to do its thing. It’s not unheard of for Saison fermentation taking 6-8 weeks.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 152,
  name: 'Deaf Mermaid - B-Sides',
  tagline: 'Light Pale Ale.',
  first_brewed: '04/2015',
  description: 'A keg-only summer special, hop- bursted and dry-hopped to infinity.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 5.2,
  ibu: 65,
  target_fg: 1010,
  target_og: 1048,
  ebc: 16,
  srm: 8,
  ph: 5.2,
  attenuation_level: 79,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 90 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Most of the hops are added in the whirlpool and dry hop stages' },
  ingredients: {
    malt: [{ name: 'Pale Ale', amount: { value: 4.38, unit: 'kilograms' } }],
    hops: [{
      name: 'Chinook', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Chinook', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Chinook', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Mosaic', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Grilled fish tacos', 'Greek salad', "Goat's cheese"],
  brewers_tips: 'Make sure the dry hops get plenty of contact with the beer! Weigh them down in a muslin sack if using whole leaf.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 153,
  name: 'Hoppy Saison - B-Sides',
  tagline: 'Hop Yeast Synergy.',
  first_brewed: '03/2015',
  description: 'Hoppy citrus and tropical fruit Saison.',
  image_url: 'https://images.punkapi.com/v2/keg.png',
  abv: 6.4,
  ibu: 40,
  target_fg: 1010,
  target_og: 1059,
  ebc: 8,
  srm: 4,
  ph: 5.2,
  attenuation_level: 87,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 60, unit: 'celsius' }, duration: 10 }, { temp: { value: 65, unit: 'celsius' }, duration: 30 }, { temp: { value: 72, unit: 'celsius' }, duration: 10 }, { temp: { value: 78, unit: 'celsius' }, duration: 5 }], fermentation: { temp: { value: 20, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 5, unit: 'kilograms' } }, { name: 'Wheat Malt', amount: { value: 1.25, unit: 'kilograms' } }, { name: 'Rye', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Acidulated Malt', amount: { value: 0.63, unit: 'kilograms' } }],
    hops: [{
      name: 'Citra', amount: { value: 7.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Amarillo', amount: { value: 5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Citra', amount: { value: 7.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 7.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Sorachi Ace', amount: { value: 7.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Mosaic', amount: { value: 7.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 3724 - Belgian Saison™',
  },
  food_pairing: ['Pad Thai', 'Paella', 'Smoked dry-cured venison sausage'],
  brewers_tips: "The stepped mash really makes the most out the raw ingredients. If you can't achieve this mash for 60mins at 65°C.",
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 154,
  name: 'No Label',
  tagline: 'Dry Hopped Kölsch.',
  first_brewed: '10/2015',
  description: 'No Label is a postmodern, postgender non-binary brew; the world’s first beer made with transgender hops. Brewed with whole hop bines that have spontaneously changed from female to male, no label goes its own way. No Label balances a light, biscuity dryness from the malt base with delicate hints of fruity esters gifted by the fermentation. Finally, dry- hopping adds a layer of new world tropical & pine flavours that add a unique twist to this classic Kölsch style beer. All profits from the sales of this beer were donated to LGBTQI+ events organisers Queerest of the Queer.',
  image_url: 'https://images.punkapi.com/v2/154.png',
  abv: 4.5,
  ibu: 25,
  target_fg: 1009,
  target_og: 1043,
  ebc: 10,
  srm: 5,
  ph: 4.2,
  attenuation_level: 79.1,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 15, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Pilsner', amount: { value: 3.13, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Munich', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Mosaic', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Cascade', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Jester', amount: { value: 50, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Cascade', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Mosaic', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Strawberry and basil salad with feta', 'Lemon baked monkfish', 'Peach cobbler'],
  brewers_tips: 'Dry hop using a muslin bag in order to give you the best chance at getting the signature Kölsch clarity.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 155,
  name: 'Old World Russian Imperial Stout',
  tagline: 'Russian Imperial Stout.',
  first_brewed: '10/2011',
  description: 'This Old World Stout perfectly recreates the export stouts of years gone by; brewed to imperial strength to avoid freezing during its journey across the Baltic Sea to snowy Moscow. Full bodied with huge chocolate, coffee and roast flavours, this imperial stout employs a variety of hops to add enough bitterness and hop complexity to balance the huge malt sweetness and rich mocha and molasses flavours.',
  image_url: 'https://images.punkapi.com/v2/155.png',
  abv: 9.5,
  ibu: 80,
  target_fg: 1014,
  target_og: 1075,
  ebc: 195,
  srm: 97.5,
  ph: 4.5,
  attenuation_level: 81.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 64, unit: 'celsius' }, duration: 90 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 6.56, unit: 'kilograms' } }, { name: 'Dark Crystal 350', amount: { value: 0.66, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 3', amount: { value: 0.31, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.31, unit: 'kilograms' } }, { name: 'Chocolate', amount: { value: 0.07, unit: 'kilograms' } }],
    hops: [{
      name: 'Magnum', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galena', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Hercules', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Magnum', amount: { value: 6.25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Galena', amount: { value: 6.25, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Cascade', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Galena', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Seared steak with a peppercorn sauce', 'Strong blue cheese and oatcakes', 'Chocolate cheesecake'],
  brewers_tips: 'Add the chocolate malt after the mash is complete, at the start of sparging. This will extract flavour and colour, but will prevent the extraction of harsh tannins into the wort.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 156,
  name: 'Hoppy Christmas',
  tagline: 'Simcoe Single-Hop India Pale Ale.',
  first_brewed: '10/2012',
  description: 'Pineapple, citrus and papaya; single-hopped with Simcoe, Hoppy Christmas is an anti-festive IPA, redolent with summery flavours. Small caramel malt additions provide a touch of malt complexity. Simcoe, arguably our favourite hop, carries this beer - pine, tropical fruit and bitterness are its specialities.',
  image_url: 'https://images.punkapi.com/v2/156.png',
  abv: 7.2,
  ibu: 70,
  target_fg: 1012,
  target_og: 1067,
  ebc: 30,
  srm: 15,
  ph: 4.4,
  attenuation_level: 82.1,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 5.65, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Dark Crystal', amount: { value: 0.06, unit: 'kilograms' } }],
    hops: [{
      name: 'Simcoe', amount: { value: 2.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Simcoe', amount: { value: 25, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Simcoe', amount: { value: 187.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Spiced cranberry turkey', 'Sriracha covered brussel sprouts', 'Ginger rice pudding'],
  brewers_tips: 'Get the freshest Simcoe for the best profile.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 157,
  name: 'Edge',
  tagline: 'Dark Full-Bodied Cask Ale',
  first_brewed: '12/2007',
  description: "Low ABV, high flavour, this beer was brewed to show that a beer can have all the flavour without the drunken affects. Also this beer is one of BrewDog's original brews that made a rare appearance in cask. Spicy, malty biscuit and super drinkable.",
  image_url: 'https://images.punkapi.com/v2/cask.png',
  abv: 2.7,
  ibu: 36,
  target_fg: 1010,
  target_og: 1033,
  ebc: 57,
  srm: 29,
  ph: 4.4,
  attenuation_level: 70.8,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 75 }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 2.16, unit: 'kilograms' } }, { name: 'Wheat', amount: { value: 0.63, unit: 'kilograms' } }, { name: 'Crystal', amount: { value: 0.31, unit: 'kilograms' } }, { name: 'Roasted Barley', amount: { value: 0.19, unit: 'kilograms' } }, { name: 'CaraAroma', amount: { value: 0.13, unit: 'kilograms' } }],
    hops: [{
      name: 'Pacific Hallertau', amount: { value: 15.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Pacific Hallertau', amount: { value: 10.2, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Motueka', amount: { value: 6.1, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Pacific Hallertau', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 25, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Lamb and root vegetable stew', 'Warm goats cheese salad', 'Raisin rum cake'],
  brewers_tips: 'Don’t overcook the mash - 75 minutes only at 65°C to get the right amount of fermentable sugars. Leave it too long and the beer ends up really watery and unpleasant.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 158,
  name: 'Hello My Name Is Zé (w/ 2Cabeças)',
  tagline: 'Passionfruit IPA - 2Cabecas Collab.',
  first_brewed: '03/2014',
  description: 'Punk multiplied by Jack Hammer, divided by passionfruit with some Brazilian spirit factored in too. A well-rounded IPA, with bags of tropical flavour boosted by the addition of passionfruit, which unsurprisingly dominates the aroma of this summery IPA.',
  image_url: 'https://images.punkapi.com/v2/158.png',
  abv: 6.4,
  ibu: 50,
  target_fg: 1012,
  target_og: 1061,
  ebc: 20,
  srm: 10,
  ph: 4.4,
  attenuation_level: 80.3,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: null }], fermentation: { temp: { value: 19, unit: 'celsius' } }, twist: 'Passionfruit: 438g at End' },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.88, unit: 'kilograms' } }, { name: 'Caramalt', amount: { value: 0.75, unit: 'kilograms' } }],
    hops: [{
      name: 'Vic Secret', amount: { value: 12.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Centennial', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Kohatu', amount: { value: 16.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Vic Secret', amount: { value: 12.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Citra', amount: { value: 62.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Simcoe', amount: { value: 87.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Centennial', amount: { value: 37.5, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Amarillo', amount: { value: 50, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1056 - American Ale™',
  },
  food_pairing: ['Grilled lamb chops with a fruit reduction', 'Ginger and chilli beef stir fry', 'Passionfruit soufflé'],
  brewers_tips: 'Try adding some of the passionfruit in the cold conditioning phase.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 159,
  name: 'Black Tokyo Horizon (w/Nøgne Ø & Mikkeller)',
  tagline: 'Imperial Stout Collaboration.',
  first_brewed: '12/2010',
  description: 'Special Collaboration between Nøgne, Mikkeller and BrewDog which is a recipe based on all three brewers’ big stouts; Nøgne Ø Dark Horizon, Mikkeller Black and BrewDog Tokyo*.',
  image_url: 'https://images.punkapi.com/v2/159.png',
  abv: 17.2,
  ibu: 75,
  target_fg: 1030,
  target_og: 1156,
  ebc: 128,
  srm: 64,
  ph: 4.4,
  attenuation_level: 80.8,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 65, unit: 'celsius' }, duration: 120 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Extra Pale', amount: { value: 4.38, unit: 'kilograms' } }, { name: 'Carafa Special Malt Type 1', amount: { value: 1.5, unit: 'kilograms' } }, { name: 'Flaked Oats', amount: { value: 0.56, unit: 'kilograms' } }, { name: 'Smoked Malt', amount: { value: 0.25, unit: 'kilograms' } }, { name: 'Crystal 150', amount: { value: 0.25, unit: 'kilograms' } }],
    hops: [{
      name: 'Columbus', amount: { value: 37.5, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Columbus', amount: { value: 37.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'First Gold', amount: { value: 18.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'Hersbrucker', amount: { value: 12.5, unit: 'grams' }, add: 'middle', attribute: 'flavour',
    }, {
      name: 'First Gold', amount: { value: 18.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Motueka', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Hersbrucker', amount: { value: 12.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Truffle oil filet mignon', 'Sweet sticky beef brisket', 'Chocolate and dark cherry fondant'],
  brewers_tips: 'Extend the mash time as much as possible to create maximum fermentable sugars. Boil for longer in the kettle to help evaporate off the water, and make the sugar concentration stronger.',
  contributed_by: 'Sam Mason <samjbmason>',
}, {
  id: 160,
  name: 'Restorative Beverage For Invalids And Convalescents',
  tagline: 'An Extract Taken From "A Treatise on Food and Diet" By Dr Jonathan Pereira, 1843.',
  first_brewed: '02/2015',
  description: 'Brewed to 8.5%, light as a mass market Pilsner in colour, fermented to be as dry as a Lambic, but as bitter as any double IPA and loaded with as much hop aroma as we can get into a beer. The fermentables in this beer were Maris Otter Extra Pale along with plenty of sugar as we mashed at a very low temperature to ensure maximum fermentability and attenuation. This beer is fermented within an inch of its life making it dry, sheer and bright. Citra, Amarillo & Centennial were all used in abundance in the kettle and also fired extremely liberally at this beer with our high tech hop cannon.',
  image_url: 'https://images.punkapi.com/v2/160.png',
  abv: 8.5,
  ibu: 100,
  target_fg: 1003,
  target_og: 1068,
  ebc: 15,
  srm: 7.5,
  ph: 4.4,
  attenuation_level: 95.6,
  volume: { value: 20, unit: 'litres' },
  boil_volume: { value: 25, unit: 'litres' },
  method: { mash_temp: [{ temp: { value: 63, unit: 'celsius' }, duration: 90 }], fermentation: { temp: { value: 21, unit: 'celsius' } }, twist: null },
  ingredients: {
    malt: [{ name: 'Maris Otter Extra Pale', amount: { value: 5.25, unit: 'kilograms' } }, { name: 'White Cane Sugar', amount: { value: 0.88, unit: 'kilograms' } }],
    hops: [{
      name: 'C02 Extract', amount: { value: 10, unit: 'grams' }, add: 'start', attribute: 'bitter',
    }, {
      name: 'Citra', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Amarillo', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Centennial', amount: { value: 37.5, unit: 'grams' }, add: 'end', attribute: 'flavour',
    }, {
      name: 'Citra', amount: { value: 100, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Amarillo', amount: { value: 100, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }, {
      name: 'Centennial', amount: { value: 100, unit: 'grams' }, add: 'dry hop', attribute: 'aroma',
    }],
    yeast: 'Wyeast 1272 - American Ale II™',
  },
  food_pairing: ['Habanero spicy chicken wings with ranch sauce', 'Jalapeño chilli and chicken quesadillas', 'New York style cheesecake'],
  brewers_tips: 'Allow the mash to sit at lower temperatures for an extended period to convert the maximum amount of starch to fermetable sugars. This will give the beer a higher ABV and dry it out.',
  contributed_by: 'Sam Mason <samjbmason>',
}];
