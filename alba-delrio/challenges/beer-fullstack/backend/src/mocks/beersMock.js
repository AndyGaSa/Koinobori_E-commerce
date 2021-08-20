module.exports = [
  {
    id: 1,
    name: 'Buzz',
    tagline: 'A Real Bitter Experience.',
    first_brewed: '09/2007',
    description: 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1044,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    attenuation_level: 75,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 64,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 3.3,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.2,
            unit: 'kilograms'
          }
        },
        {
          name: 'Munich',
          amount: {
            value: 0.4,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Fuggles',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'First Gold',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Fuggles',
          amount: {
            value: 37.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'First Gold',
          amount: {
            value: 37.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Cascade',
          amount: {
            value: 37.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Spicy chicken tikka masala',
      'Grilled chicken quesadilla',
      'Caramel toffee cake'
    ],
    brewers_tips: 'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 2,
    name: 'Trashy Blonde',
    tagline: "You Know You Shouldn't",
    first_brewed: '04/2008',
    description: 'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
    image_url: 'https://images.punkapi.com/v2/2.png',
    abv: 4.1,
    ibu: 41.5,
    target_fg: 1010,
    target_og: 1041.7,
    ebc: 15,
    srm: 15,
    ph: 4.4,
    attenuation_level: 76,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 69,
            unit: 'celsius'
          },
          duration: null
        }
      ],
      fermentation: {
        temp: {
          value: 18,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 3.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.2,
            unit: 'kilograms'
          }
        },
        {
          name: 'Munich',
          amount: {
            value: 0.4,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Amarillo',
          amount: {
            value: 13.8,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 13.8,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 26.3,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Motueka',
          amount: {
            value: 18.8,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Fresh crab with lemon',
      'Garlic butter dipping sauce',
      'Goats cheese salad',
      'Creamy lemon bar doused in powdered sugar'
    ],
    brewers_tips: 'Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 3,
    name: 'Berliner Weisse With Yuzu - B-Sides',
    tagline: 'Japanese Citrus Berliner Weisse.',
    first_brewed: '11/2015',
    description: 'Japanese citrus fruit intensifies the sour nature of this German classic.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4.2,
    ibu: 8,
    target_fg: 1007,
    target_og: 1040,
    ebc: 8,
    srm: 4,
    ph: 3.2,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 60,
            unit: 'celsius'
          },
          duration: 10
        },
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 30
        },
        {
          temp: {
            value: 72,
            unit: 'celsius'
          },
          duration: 10
        },
        {
          temp: {
            value: 78,
            unit: 'celsius'
          },
          duration: 5
        }
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius'
        }
      },
      twist: 'Soured naturally using the kettle souring technique, Yuzu fruit: 50g at middle, Yuzu juice: 200ml at FV'
    },
    ingredients: {
      malt: [
        {
          name: 'Propino Pale Malt',
          amount: {
            value: 1.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Wheat Malt',
          amount: {
            value: 1.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Propino Pale Malt for kettle souring',
          amount: {
            value: 0.03,
            unit: 'kilograms'
          }
        },
        {
          name: 'Acidulated Malt for kettle souring',
          amount: {
            value: 0.03,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Bramling Cross',
          amount: {
            value: 10,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'bitter'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Smoked chicken wings',
      'Miso ramen',
      'Yuzu cheesecake'
    ],
    brewers_tips: 'Clean everything twice. All you want is the clean sourness of lactobacillus.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 4,
    name: 'Pilsen Lager',
    tagline: 'Unleash the Yeast Series.',
    first_brewed: '09/2013',
    description: 'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.',
    image_url: 'https://images.punkapi.com/v2/4.png',
    abv: 6.3,
    ibu: 55,
    target_fg: 1012,
    target_og: 1060,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 80,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: null
        }
      ],
      fermentation: {
        temp: {
          value: 9,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 4.58,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.06,
            unit: 'kilograms'
          }
        },
        {
          name: 'Munich',
          amount: {
            value: 0.25,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Centennial',
          amount: {
            value: 5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Centennial',
          amount: {
            value: 10,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 10,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Centennial',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™'
    },
    food_pairing: [
      'Spicy crab cakes',
      'Spicy cucumber and carrot Thai salad',
      'Sweet filled dumplings'
    ],
    brewers_tips: 'Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.',
    contributed_by: 'Ali Skinner <AliSkinner>'
  },
  {
    id: 5,
    name: 'Avery Brown Dredge',
    tagline: "Bloggers' Imperial Pilsner.",
    first_brewed: '02/2011',
    description: 'An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.',
    image_url: 'https://images.punkapi.com/v2/5.png',
    abv: 7.2,
    ibu: 59,
    target_fg: 1027,
    target_og: 1069,
    ebc: 10,
    srm: 5,
    ph: 4.4,
    attenuation_level: 67,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 66,
            unit: 'celsius'
          },
          duration: 70
        }
      ],
      fermentation: {
        temp: {
          value: 10,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Lager Malt',
          amount: {
            value: 6.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Wheat',
          amount: {
            value: 0.38,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Saaz',
          amount: {
            value: 60,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Saaz',
          amount: {
            value: 60,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Saaz',
          amount: {
            value: 60,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™'
    },
    food_pairing: [
      'Vietnamese squid salad',
      'Chargrilled corn on the cob with paprika butter',
      'Strawberry and rhubarb pie'
    ],
    brewers_tips: 'Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 6,
    name: 'Electric India',
    tagline: 'Vibrant Hoppy Saison.',
    first_brewed: '05/2013',
    description: 'Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.',
    image_url: 'https://images.punkapi.com/v2/6.png',
    abv: 5.2,
    ibu: 38,
    target_fg: 1005,
    target_og: 1045,
    ebc: 15,
    srm: 7.5,
    ph: 4.4,
    attenuation_level: 88.9,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 22,
          unit: 'celsius'
        }
      },
      twist: 'Honey: 62.5g at End (WP), Coriander Seeds: 8.5g at 45mins'
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 3.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Munich',
          amount: {
            value: 0.13,
            unit: 'kilograms'
          }
        },
        {
          name: 'Wheat',
          amount: {
            value: 0.25,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Amarillo',
          amount: {
            value: 2.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Peppercorns',
          amount: {
            value: 2.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 20,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 3711 - French Saison™'
    },
    food_pairing: [
      'Mussels with a garlic and herb sauce',
      'Crab melt sandwich',
      'Shortbread cookies'
    ],
    brewers_tips: 'Source some really good heather honey to get the right spicy esters in the beer.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 7,
    name: 'AB:12',
    tagline: 'Imperial Black Belgian Ale.',
    first_brewed: '07/2012',
    description: 'An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.',
    image_url: 'https://images.punkapi.com/v2/7.png',
    abv: 11.2,
    ibu: 35,
    target_fg: 1017,
    target_og: 1108,
    ebc: 80,
    srm: 40,
    ph: 5.3,
    attenuation_level: 84,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 69,
            unit: 'celsius'
          },
          duration: 105
        }
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius'
        }
      },
      twist: 'Aged in whisky barrels with raspberries, tayberries and blackberries'
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 9.69,
            unit: 'kilograms'
          }
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.19,
            unit: 'kilograms'
          }
        },
        {
          name: 'Carafa Special Malt Type 3',
          amount: {
            value: 0.44,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Tomahawk',
          amount: {
            value: 31.25,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Magnum',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Magnum',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Tomahawk',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Centennial',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Centennial',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Tomahawk',
          amount: {
            value: 37.5,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        }
      ],
      yeast: 'Wyeast 3522 - Belgian Ardennes™'
    },
    food_pairing: [
      'Tandoori lamb with pomegranate',
      'Beef Wellington with a red wine jus',
      'Raspberry chocolate torte'
    ],
    brewers_tips: "Don't worry too much about controlling the temperature with the Belgian yeast strain - just make sure it doesn't rise above 30°C!",
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 8,
    name: 'Fake Lager',
    tagline: 'Bohemian Pilsner.',
    first_brewed: '03/2013',
    description: 'Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.',
    image_url: 'https://images.punkapi.com/v2/8.png',
    abv: 4.7,
    ibu: 40,
    target_fg: 1010,
    target_og: 1046,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    attenuation_level: 78,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 10,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 3.33,
            unit: 'kilograms'
          }
        },
        {
          name: 'Munich',
          amount: {
            value: 0.42,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.28,
            unit: 'kilograms'
          }
        },
        {
          name: 'Acidulated Malt',
          amount: {
            value: 0.07,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 7.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Magnum',
          amount: {
            value: 5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Hersbrucker',
          amount: {
            value: 6.25,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Saaz',
          amount: {
            value: 6.25,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Hersbrucker',
          amount: {
            value: 18.75,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Saaz',
          amount: {
            value: 18.75,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™'
    },
    food_pairing: [
      'Fried crab cakes with avocado salsa',
      'Spicy shredded pork roll with hot dipping sauce',
      'Key lime pie'
    ],
    brewers_tips: "Once the primary fermentation is complete get this beer as cold as you can and let it mature for as long as you've got.",
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 9,
    name: 'AB:07',
    tagline: 'Whisky Cask-Aged Scotch Ale.',
    first_brewed: '03/2010',
    description: 'Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.',
    image_url: 'https://images.punkapi.com/v2/9.png',
    abv: 12.5,
    ibu: 30,
    target_fg: 1020,
    target_og: 1106,
    ebc: 84,
    srm: 42,
    ph: 5.6,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 105
        }
      ],
      fermentation: {
        temp: {
          value: 11,
          unit: 'celsius'
        }
      },
      twist: 'Scottish Heather Honey: 62.5g at middle, Add honey during the boil. After fermentation, age in a Scottish whisky cask'
    },
    ingredients: {
      malt: [
        {
          name: 'Munich',
          amount: {
            value: 5.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 1.88,
            unit: 'kilograms'
          }
        },
        {
          name: 'Wheat',
          amount: {
            value: 1.88,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 1.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal',
          amount: {
            value: 0.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.31,
            unit: 'kilograms'
          }
        },
        {
          name: 'Peated Malt',
          amount: {
            value: 0.13,
            unit: 'kilograms'
          }
        },
        {
          name: 'Amber',
          amount: {
            value: 0.13,
            unit: 'kilograms'
          }
        },
        {
          name: 'Brown',
          amount: {
            value: 0.13,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Saaz',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'First Gold',
          amount: {
            value: 31.3,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        }
      ],
      yeast: 'Saflager S189'
    },
    food_pairing: [
      'Kedgeree',
      'Scotch broth with sourdough bread',
      'Clootie dumpling'
    ],
    brewers_tips: 'Authentic heather honey adds a beautiful floral top note that is unachievable any other way.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 10,
    name: 'Bramling X',
    tagline: 'Single Hop IPA Series - 2011.',
    first_brewed: '01/2011',
    description: 'Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.',
    image_url: 'https://images.punkapi.com/v2/10.png',
    abv: 7.5,
    ibu: 75,
    target_fg: 1013,
    target_og: 1068,
    ebc: 22,
    srm: 11,
    ph: 4.4,
    attenuation_level: 80.9,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 6.38,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.13,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.25,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Bramling Cross',
          amount: {
            value: 60,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Bramling Cross',
          amount: {
            value: 50,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Warm blackberry pie',
      'Vinegar doused fish and chips',
      'Aromatic korma curry with lemon and garlic naan'
    ],
    brewers_tips: 'Getting good Bramling Cross is key. Most English hops are in leaf form (not pelletised), so getting fresh hops close to harvest (September) will give this beer the right amount of dark berry intensity.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 11,
    name: 'Misspent Youth',
    tagline: 'Milk & Honey Scotch Ale.',
    first_brewed: '04/2013',
    description: 'The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 7.3,
    ibu: 30,
    target_fg: 1020,
    target_og: 1079,
    ebc: 120,
    srm: 60,
    ph: 4.4,
    attenuation_level: 74.7,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 67,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: 'See honey and lactose additions'
    },
    ingredients: {
      malt: [
        {
          name: 'Pale Ale',
          amount: {
            value: 2.18,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.3,
            unit: 'kilograms'
          }
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.3,
            unit: 'kilograms'
          }
        },
        {
          name: 'Smoked Weyermann',
          amount: {
            value: 1.8,
            unit: 'kilograms'
          }
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 0.6,
            unit: 'kilograms'
          }
        },
        {
          name: 'Brown',
          amount: {
            value: 0.6,
            unit: 'kilograms'
          }
        },
        {
          name: 'Amber',
          amount: {
            value: 0.1,
            unit: 'kilograms'
          }
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.05,
            unit: 'kilograms'
          }
        },
        {
          name: 'Munich',
          amount: {
            value: 0.6,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.2,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'First Gold',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Fuggles',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Honey',
          amount: {
            value: 250,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'Flavour'
        },
        {
          name: 'Lactose',
          amount: {
            value: 375,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'Flavour'
        },
        {
          name: 'First Gold',
          amount: {
            value: 10,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'aroma'
        },
        {
          name: 'Fuggles',
          amount: {
            value: 10,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'aroma'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Roasted garlic and chilli infused camembert cheese',
      'Korean style chicken wings',
      'Chocolate milk shake'
    ],
    brewers_tips: 'Lots of malt in this one. Mash-in in stages, and spread the pale ale malt throughout the mash to provide stability. If the mash starts to sink, stop, wait a few minutes while mixing, then start again.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 12,
    name: 'Arcade Nation',
    tagline: 'Seasonal Black IPA.',
    first_brewed: '12/2015',
    description: 'Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.',
    image_url: 'https://images.punkapi.com/v2/12.png',
    abv: 5.3,
    ibu: 60,
    target_fg: 1012,
    target_og: 1052,
    ebc: 200,
    srm: 100,
    ph: 4.2,
    attenuation_level: 77,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: null
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Pale Ale',
          amount: {
            value: 3.13,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.18,
            unit: 'kilograms'
          }
        },
        {
          name: 'Carafa Special Malt Type 1',
          amount: {
            value: 0.25,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 19,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Citra',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 62.5,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 62.5,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Citra',
          amount: {
            value: 62.5,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'King prawn kebabs',
      'Halibut with a mango and tomato salad',
      'Mint chocloate ice cream'
    ],
    brewers_tips: 'Be as accurate as possible when weighing out your malts to ensure you strike the right balance.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 13,
    name: 'Movember',
    tagline: 'Moustache-Worthy Beer.',
    first_brewed: '11/2009',
    description: 'A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops.',
    image_url: 'https://images.punkapi.com/v2/13.png',
    abv: 4.5,
    ibu: 50,
    target_fg: 1012,
    target_og: 1047,
    ebc: 140,
    srm: 70,
    ph: 5.2,
    attenuation_level: 74.5,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 68,
            unit: 'celsius'
          },
          duration: 50
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 3.44,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.31,
            unit: 'kilograms'
          }
        },
        {
          name: 'Carafa Special Malt Type 1',
          amount: {
            value: 0.31,
            unit: 'kilograms'
          }
        },
        {
          name: 'Carafa Special Malt Type 3',
          amount: {
            value: 0.31,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Cascade',
          amount: {
            value: 43.8,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Cascade',
          amount: {
            value: 81.3,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Cascade',
          amount: {
            value: 250,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Vegetable egg scramble',
      'Margherita pizza',
      'Fresh berry crisp tart'
    ],
    brewers_tips: 'If you can’t find really fresh cascade, substitute it for Amarillo or Ahtanum.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 14,
    name: 'Alpha Dog',
    tagline: 'Existential Red Ale.',
    first_brewed: '02/2010',
    description: 'A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.',
    image_url: 'https://images.punkapi.com/v2/14.png',
    abv: 4.5,
    ibu: 42,
    target_fg: 1025,
    target_og: 1046,
    ebc: 62,
    srm: 31,
    ph: 4.4,
    attenuation_level: 72.8,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 25
        }
      ],
      fermentation: {
        temp: {
          value: 22,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 2.5,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 1.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Munich',
          amount: {
            value: 0.61,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.28,
            unit: 'kilograms'
          }
        },
        {
          name: 'Dark Crystal 350-400',
          amount: {
            value: 0.2,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 15,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 10,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 30,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Pastrami',
      'Swiss and horseradish sandwich',
      'Sharp cheddar cheese and onion/ raisin chutney',
      'Peanut brittle'
    ],
    brewers_tips: 'Crush the malt as close to brewing time as possible. The fresher the malt, the more intense caramel flavours will be released in the wort.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 15,
    name: 'Mixtape 8',
    tagline: 'An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.',
    first_brewed: '01/2012',
    description: 'This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.',
    image_url: 'https://images.punkapi.com/v2/15.png',
    abv: 14.5,
    ibu: 50,
    target_fg: 1014,
    target_og: 1093,
    ebc: 40,
    srm: 20,
    ph: 4.4,
    attenuation_level: 85,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 40
        }
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius'
        }
      },
      twist: 'Barrel aged and blended with Anarchist Alchemist'
    },
    ingredients: {
      malt: [
        {
          name: 'Pale Ale - Tipple',
          amount: {
            value: 11.1,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.94,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal',
          amount: {
            value: 0.44,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Columbus Extract',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Centennial',
          amount: {
            value: 37.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Cascade',
          amount: {
            value: 37.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 37.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 3522 - Belgian Ardennes™'
    },
    food_pairing: [
      'Coriander & chilli crab cakes',
      'Goats cheese salad with walnuts, radish and blood orange',
      'Pistachio cake'
    ],
    brewers_tips: "Brew twice as much Belgian Tripel as you were planning on ageing - it's awesome on its own too!",
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 16,
    name: 'Libertine Porter',
    tagline: 'Dry-Hopped Aggressive Porter.',
    first_brewed: '01/2012',
    description: 'An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke.',
    image_url: 'https://images.punkapi.com/v2/16.png',
    abv: 6.1,
    ibu: 45,
    target_fg: 1020,
    target_og: 1067,
    ebc: 219,
    srm: 109.5,
    ph: 4.4,
    attenuation_level: 70.1,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 68,
            unit: 'celsius'
          },
          duration: 35
        }
      ],
      fermentation: {
        temp: {
          value: 18,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale - Spring Blend',
          amount: {
            value: 5,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 1.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Roasted Barley',
          amount: {
            value: 0.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Wheat',
          amount: {
            value: 0.31,
            unit: 'kilograms'
          }
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 0.31,
            unit: 'kilograms'
          }
        },
        {
          name: 'Smoked Malt',
          amount: {
            value: 0.06,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Columbus',
          amount: {
            value: 31.25,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Columbus',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'bitter'
        },
        {
          name: 'Willamette',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Galena',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Columbus',
          amount: {
            value: 75,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Galena',
          amount: {
            value: 75,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 100,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Blue cheese beef burger',
      'Glazed short ribs',
      'Chocolate cake'
    ],
    brewers_tips: 'Mash in at a higher temperature to leave more unfermentable sugars in the wort. This gives the beer a sweeter porter profile.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 17,
    name: 'AB:06',
    tagline: 'Imperial Black IPA.',
    first_brewed: '04/2011',
    description: 'Our sixth Abstrakt, this imperial black IPA combined dark malts with a monumental triple dry-hop, using an all-star team of some of our favourite American hops. Roasty and resinous.',
    image_url: 'https://images.punkapi.com/v2/17.png',
    abv: 11.2,
    ibu: 150,
    target_fg: 1013,
    target_og: 1098,
    ebc: 70,
    srm: 35,
    ph: null,
    attenuation_level: 87,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 90
        }
      ],
      fermentation: {
        temp: {
          value: 17,
          unit: 'celsius'
        }
      },
      twist: 'White cane sugar: 150g at middle'
    },
    ingredients: {
      malt: [
        {
          name: 'Pale Ale',
          amount: {
            value: 6.13,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.38,
            unit: 'kilograms'
          }
        },
        {
          name: 'Carafa Special Malt Type 1',
          amount: {
            value: 0.13,
            unit: 'kilograms'
          }
        },
        {
          name: 'Carafa Special Malt Type 3',
          amount: {
            value: 0.13,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Hop Extract',
          amount: {
            value: 20,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Chinook',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Cascade',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Centennial',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Columbus',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Chinook',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Cascade',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Centennial',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Columbus',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        }
      ],
      yeast: 'Wyeast 1272 - American Ale II™'
    },
    food_pairing: [
      'Coffee dusted venison loin',
      'Memphis-style beef short ribs',
      'Chocolate orange brownies'
    ],
    brewers_tips: 'Boil down to desired OG (about 17 litres).',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 18,
    name: 'Russian Doll – India Pale Ale',
    tagline: 'Nesting Hop Bomb.',
    first_brewed: '08/2014',
    description: 'The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each',
    image_url: 'https://images.punkapi.com/v2/18.png',
    abv: 6,
    ibu: 70,
    target_fg: 1012,
    target_og: 1058,
    ebc: 25,
    srm: 12.5,
    ph: 5.2,
    attenuation_level: 79.3,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 5.06,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.06,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Cascade',
          amount: {
            value: 2.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Citra',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 75,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Cascade',
          amount: {
            value: 75,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Centennial',
          amount: {
            value: 75,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Citra',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Spicy chicken skewers',
      'Fish tacos with hot sauce',
      'Lemon pound cake with a ice sugar glaze'
    ],
    brewers_tips: 'Create balance through experimentation with the hop amounts and malt backbone.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 19,
    name: 'Hello My Name Is Mette-Marit',
    tagline: 'Lingonberry Double IPA.',
    first_brewed: '06/2013',
    description: "We sent this beer to Norway where it was known as 'Hello, my name is Censored’. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.",
    image_url: 'https://images.punkapi.com/v2/19.png',
    abv: 8.2,
    ibu: 70,
    target_fg: 1013,
    target_og: 1076,
    ebc: null,
    srm: null,
    ph: 4.4,
    attenuation_level: 83,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 66,
            unit: 'celsius'
          },
          duration: 90
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: 'Infusion of lingonberries alongside the dry hops, Cranberry Juice: 5.5g at 30mins, Lingonberries: 10g Twist'
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 6.12,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.8,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Tomahawk',
          amount: {
            value: 7,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Motueka',
          amount: {
            value: 5.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Galena',
          amount: {
            value: 2.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Mt.Hood',
          amount: {
            value: 2.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Challenger',
          amount: {
            value: 15,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Galena',
          amount: {
            value: 15,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 20,
            unit: 'grams'
          },
          add: 'dry hop',
          attribute: 'aroma'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Fårikål (mutton stew) with a spicy twist',
      'Fenalår (salted cured lamb)',
      'Krumkake with lingonberry jam'
    ],
    brewers_tips: 'Using crushed cranberries will dry out the beer further, drawing out their natural astringent character.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 20,
    name: 'Rabiator',
    tagline: 'Imperial Wheat Beer',
    first_brewed: '03/2011',
    description: 'Imperial Wheat beer / Weizenbock brewed by a homesick German in leather trousers. Think banana bread, bubble gum and David Hasselhoff.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 10.27,
    ibu: 26,
    target_fg: 1014,
    target_og: 1092,
    ebc: 24,
    srm: 12,
    ph: 4.4,
    attenuation_level: 85,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 64,
            unit: 'celsius'
          },
          duration: 60
        }
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 5.63,
            unit: 'kilograms'
          }
        },
        {
          name: 'Wheat',
          amount: {
            value: 0.69,
            unit: 'kilograms'
          }
        },
        {
          name: 'Crystal',
          amount: {
            value: 0.63,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Columbus',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Hersbrucker',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 3333 - German Wheat™'
    },
    food_pairing: [
      'Grilled portabello mushroom burger',
      'Chicken sausages with creamy mash',
      'Caramel and banana meringue pie'
    ],
    brewers_tips: 'If you are struggling to get that authentic head retention increase your mash temperature to about 70°C.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 21,
    name: 'Vice Bier',
    tagline: 'Hoppy Wheat Bier.',
    first_brewed: '04/2013',
    description: 'Our take on the classic German Kristallweizen. A clear German wheat beer, layers of bubblegum and vanilla perfectly balanced with the American and New Zealand hops.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4.3,
    ibu: 25,
    target_fg: 1010,
    target_og: 1043,
    ebc: 30,
    srm: 15,
    ph: 4,
    attenuation_level: 81.8,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 22,
          unit: 'celsius'
        }
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 2.69,
            unit: 'kilograms'
          }
        },
        {
          name: 'Wheat',
          amount: {
            value: 1.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.38,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Waimea',
          amount: {
            value: 2.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 2.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 2.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Motueka',
          amount: {
            value: 2.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Simcoe',
          amount: {
            value: 6,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Citra',
          amount: {
            value: 6,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Waimea',
          amount: {
            value: 6,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 3638 - Bavarian Wheat™'
    },
    food_pairing: [
      'Citrus salad with balsamic dressing',
      'Lobster',
      'Ginger and orange cookies'
    ],
    brewers_tips: 'Ferment at higher or lower temperatures to select the esters that will create clove- like or banana-like flavours.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 22,
    name: 'Devine Rebel (w/ Mikkeller)',
    tagline: 'Oak-aged Barley Wine.',
    first_brewed: '12/2008',
    description: "Two of Europe's most experimental, boundary-pushing brewers, BrewDog and Mikkeller, combined forces to produce a rebellious beer that combined their respective talents and brewing skills. The 12.5% Barley Wine fermented well, and the champagne yeast drew it ever closer to 12.5%. The beer was brewed with a single hop variety and was going to be partially aged in oak casks.",
    image_url: 'https://images.punkapi.com/v2/22.png',
    abv: 12.5,
    ibu: 100,
    target_fg: 1030,
    target_og: 1093,
    ebc: 36,
    srm: 18,
    ph: 4.4,
    attenuation_level: 68,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 90
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: 'Part-aged in oak barrels, finished with champagne yeast'
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 10,
            unit: 'kilograms'
          }
        },
        {
          name: 'Caramalt',
          amount: {
            value: 1.88,
            unit: 'kilograms'
          }
        },
        {
          name: 'Munich',
          amount: {
            value: 1.25,
            unit: 'kilograms'
          }
        },
        {
          name: 'Amber',
          amount: {
            value: 0.63,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 100,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 100,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Stilton on gingerbread biscuits',
      'Pot roasted artichokes',
      'Lamb chops with caramelised figs'
    ],
    brewers_tips: 'Rack off to a secondary fermenter before pitching in some champagne.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 23,
    name: 'Storm',
    tagline: 'Islay Whisky Aged IPA.',
    first_brewed: '12/2007',
    description: 'Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base, we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay.',
    image_url: 'https://images.punkapi.com/v2/23.png',
    abv: 8,
    ibu: 60,
    target_fg: 1010,
    target_og: 1082,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    attenuation_level: 86,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: 'Oak chips soaked in Islay whisky 50g'
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 5.8,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Ahtanum',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Chinook',
          amount: {
            value: 15,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Crystal',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Chinook',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'middle',
          attribute: 'flavour'
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Chinook',
          amount: {
            value: 27.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Crystal',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Motueka',
          amount: {
            value: 17.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Oysters',
      'Hickory smoked ham',
      'Rocky Road'
    ],
    brewers_tips: 'After primary fermentation is complete, rack off into a secondary fermeter and add the oak chips to replicate the authentic Islay barrel experience.',
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 24,
    name: 'The End Of History',
    tagline: "The World's Strongest Beer.",
    first_brewed: '06/2011',
    description: 'The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.',
    image_url: 'https://images.punkapi.com/v2/24.png',
    abv: 55,
    ibu: null,
    target_fg: 1000,
    target_og: 1112,
    ebc: null,
    srm: null,
    ph: 4.4,
    attenuation_level: 100,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 20,
          unit: 'celsius'
        }
      },
      twist: 'Nettles: 25g at end, Juniper: 25g at end'
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 12.5,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 6.25,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Amarillo',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 3522 - Belgian Ardennes™'
    },
    food_pairing: [
      'Roasted wood pigeon with black pudding',
      'Pan seared venison fillet with juniper sauce',
      'Apricot coconut cake'
    ],
    brewers_tips: "You'll have to get this one all the way down to -70°C. Taxidermy is not optional.",
    contributed_by: 'Sam Mason <samjbmason>'
  },
  {
    id: 25,
    name: 'Bad Pixie',
    tagline: 'Spiced Wheat Beer.',
    first_brewed: '10/2008',
    description: '2008 Prototype beer, a 4.7% wheat ale with crushed juniper berries and citrus peel.',
    image_url: 'https://images.punkapi.com/v2/25.png',
    abv: 4.7,
    ibu: 45,
    target_fg: 1010,
    target_og: 1047,
    ebc: 8,
    srm: 4,
    ph: 4.4,
    attenuation_level: 79,
    volume: {
      value: 20,
      unit: 'litres'
    },
    boil_volume: {
      value: 25,
      unit: 'litres'
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 67,
            unit: 'celsius'
          },
          duration: 75
        }
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius'
        }
      },
      twist: 'Crushed juniper berries: 12.5g, Lemon peel: 18.8g'
    },
    ingredients: {
      malt: [
        {
          name: 'Wheat',
          amount: {
            value: 2.5,
            unit: 'kilograms'
          }
        },
        {
          name: 'Extra Pale',
          amount: {
            value: 2.06,
            unit: 'kilograms'
          }
        }
      ],
      hops: [
        {
          name: 'First Gold',
          amount: {
            value: 18.75,
            unit: 'grams'
          },
          add: 'start',
          attribute: 'bitter'
        },
        {
          name: 'First Gold',
          amount: {
            value: 25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        },
        {
          name: 'Sorachi Ace',
          amount: {
            value: 16.25,
            unit: 'grams'
          },
          add: 'end',
          attribute: 'flavour'
        }
      ],
      yeast: 'Wyeast 1056 - American Ale™'
    },
    food_pairing: [
      'Poached sole fillet with capers',
      'Summer fruit salad',
      'Banana split'
    ],
    brewers_tips: 'Make sure you have plenty of room in the fermenter. Beers containing wheat can often foam aggressively during fermentation.',
    contributed_by: 'Sam Mason <samjbmason>'
  }
];
