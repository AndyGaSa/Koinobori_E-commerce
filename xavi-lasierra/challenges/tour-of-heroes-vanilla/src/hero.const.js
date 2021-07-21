const heroes = [
  {
    id: 1,
    name: 'A-Bomb',
    slug: '1-a-bomb',
    powerstats: {
      intelligence: 38,
      strength: 100,
      speed: 17,
      durability: 80,
      power: 24,
      combat: 64
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'8", '203 cm'],
      weight: ['980 lb', '441 kg'],
      eyeColor: 'Yellow',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Richard Milhouse Jones',
      alterEgos: 'No alter egos found.',
      aliases: ['Rick Jones'],
      placeOfBirth: 'Scarsdale, Arizona',
      firstAppearance: 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
      publisher: 'Marvel Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Musician, adventurer, author; formerly talk show host',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
      relatives: 'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother, unconfirmed)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg'
    }
  },
  {
    id: 2,
    name: 'Abe Sapien',
    slug: '2-abe-sapien',
    powerstats: {
      intelligence: 88,
      strength: 28,
      speed: 35,
      durability: 65,
      power: 100,
      combat: 85
    },
    appearance: {
      gender: 'Male',
      race: 'Icthyo Sapien',
      height: ["6'3", '191 cm'],
      weight: ['145 lb', '65 kg'],
      eyeColor: 'Blue',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Abraham Sapien',
      alterEgos: 'No alter egos found.',
      aliases: ['Langdon Everett Caul', 'Abraham Sapien', 'Langdon Caul'],
      placeOfBirth: '-',
      firstAppearance: 'Hellboy: Seed of Destruction (1993)',
      publisher: 'Dark Horse Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Paranormal Investigator',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Bureau for Paranormal Research and Defense',
      relatives: 'Edith Howard (wife - deceased)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/2-abe-sapien.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/2-abe-sapien.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/2-abe-sapien.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/2-abe-sapien.jpg'
    }
  },
  {
    id: 3,
    name: 'Abin Sur',
    slug: '3-abin-sur',
    powerstats: {
      intelligence: 50,
      strength: 90,
      speed: 53,
      durability: 64,
      power: 99,
      combat: 65
    },
    appearance: {
      gender: 'Male',
      race: 'Ungaran',
      height: ["6'1", '185 cm'],
      weight: ['200 lb', '90 kg'],
      eyeColor: 'Blue',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: '',
      alterEgos: 'No alter egos found.',
      aliases: ['Lagzia'],
      placeOfBirth: 'Ungara',
      firstAppearance: 'Showcase #22 (October, 1959)',
      publisher: 'DC Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Green Lantern, former history professor',
      base: 'Oa'
    },
    connections: {
      groupAffiliation: 'Green Lantern Corps, Black Lantern Corps',
      relatives: 'Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/3-abin-sur.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/3-abin-sur.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/3-abin-sur.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/3-abin-sur.jpg'
    }
  },
  {
    id: 4,
    name: 'Abomination',
    slug: '4-abomination',
    powerstats: {
      intelligence: 63,
      strength: 80,
      speed: 53,
      durability: 90,
      power: 62,
      combat: 95
    },
    appearance: {
      gender: 'Male',
      race: 'Human / Radiation',
      height: ["6'8", '203 cm'],
      weight: ['980 lb', '441 kg'],
      eyeColor: 'Green',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Emil Blonsky',
      alterEgos: 'No alter egos found.',
      aliases: ['Agent R-7', 'Ravager of Worlds'],
      placeOfBirth: 'Zagreb, Yugoslavia',
      firstAppearance: 'Tales to Astonish #90',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: 'Ex-Spy',
      base: 'Mobile'
    },
    connections: {
      groupAffiliation: 'former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten',
      relatives: 'Nadia Dornova Blonsky (wife, separated)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/4-abomination.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/4-abomination.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/4-abomination.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/4-abomination.jpg'
    }
  },
  {
    id: 5,
    name: 'Abraxas',
    slug: '5-abraxas',
    powerstats: {
      intelligence: 88,
      strength: 63,
      speed: 83,
      durability: 100,
      power: 100,
      combat: 55
    },
    appearance: {
      gender: 'Male',
      race: 'Cosmic Entity',
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      eyeColor: 'Blue',
      hairColor: 'Black'
    },
    biography: {
      fullName: 'Abraxas',
      alterEgos: 'No alter egos found.',
      aliases: ['-'],
      placeOfBirth: 'Within Eternity',
      firstAppearance: 'Fantastic Four Annual #2001',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: 'Dimensional destroyer',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Cosmic Beings',
      relatives: 'Eternity ("Father")'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/5-abraxas.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/5-abraxas.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/5-abraxas.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/5-abraxas.jpg'
    }
  },
  {
    id: 6,
    name: 'Absorbing Man',
    slug: '6-absorbing-man',
    powerstats: {
      intelligence: 38,
      strength: 80,
      speed: 25,
      durability: 100,
      power: 98,
      combat: 64
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'4", '193 cm'],
      weight: ['270 lb', '122 kg'],
      eyeColor: 'Blue',
      hairColor: 'No Hair'
    },
    biography: {
      fullName: 'Carl Creel',
      alterEgos: 'No alter egos found.',
      aliases: [
        'Greithoth',
        '"Crusher" Creel',
        'Rocky Davis',
        'Dynamite Davis',
        'Lightningbolt',
        'Prisoner #24957'
      ],
      placeOfBirth: 'New York City, New York',
      firstAppearance: 'Daredevil #1 (April, 1964) (As Rocky Davis)',
      publisher: 'Marvel Comics',
      alignment: 'bad'
    },
    work: {
      occupation: 'Professional criminal; former professional boxer',
      base: '-'
    },
    connections: {
      groupAffiliation: 'Masters of Evil, Lethal Legion; formerly Worthy, Frightful Four: former agent of Loki and They Who Wield Power',
      relatives: 'Mary MacPherran (Titania) (wife); Jerry Sledge (son); Rockwell "Rocky" Davis (Hi-Llite) (cousin)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/6-absorbing-man.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/6-absorbing-man.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/6-absorbing-man.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/6-absorbing-man.jpg'
    }
  },
  {
    id: 7,
    name: 'Adam Monroe',
    slug: '7-adam-monroe',
    powerstats: {
      intelligence: 63,
      strength: 10,
      speed: 12,
      durability: 100,
      power: 100,
      combat: 64
    },
    appearance: {
      gender: 'Male',
      race: null,
      height: ['-', '0 cm'],
      weight: ['- lb', '0 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: '',
      alterEgos: 'No alter egos found.',
      aliases: ['Takezo Kensei', 'Richard Sanders'],
      placeOfBirth: '-',
      firstAppearance: 'Heroes S02E01 - Four Months Later...',
      publisher: 'NBC - Heroes',
      alignment: 'good'
    },
    work: {
      occupation: 'former samurai swordsman, former British mercenary commander, former soldier in the Confederate Army',
      base: 'U.S.; formerly Diedenshausen, Germany; Milan, Italy; Paris, France; Japan; England; Atlanta, GA; Montreal, Canada'
    },
    connections: {
      groupAffiliation: '-',
      relatives: '-'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/7-adam-monroe.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/7-adam-monroe.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/7-adam-monroe.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/7-adam-monroe.jpg'
    }
  },
  {
    id: 8,
    name: 'Adam Strange',
    slug: '8-adam-strange',
    powerstats: {
      intelligence: 69,
      strength: 10,
      speed: 33,
      durability: 40,
      power: 37,
      combat: 50
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'1", '185 cm'],
      weight: ['195 lb', '88 kg'],
      eyeColor: 'Blue',
      hairColor: 'Blond'
    },
    biography: {
      fullName: 'Adam Strange',
      alterEgos: 'No alter egos found.',
      aliases: ['Warrior of Two Worlds', 'Savior of Rann'],
      placeOfBirth: 'Chicago, Illinois',
      firstAppearance: 'Outsiders #6 (April, 1986)',
      publisher: 'DC Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Adventurer, archaelogist, ambassador',
      base: 'Rann, Alpha Centauri System'
    },
    connections: {
      groupAffiliation: 'Omega Men, L.E.G.I.O.N., R.E.B.E.L.S., formerly Seven Soldiers of Victory',
      relatives: 'Alanna Strange (wife); Aleea Strange (daughter); Sardath (father-in-law); Janey Strange (sister); Todd Strange (brother, deceased); Bantteir (mother-in-law); Adam Strange II (descendent)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/8-adam-strange.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/8-adam-strange.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/8-adam-strange.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/8-adam-strange.jpg'
    }
  },
  {
    id: 10,
    name: 'Agent Bob',
    slug: '10-agent-bob',
    powerstats: {
      intelligence: 10,
      strength: 8,
      speed: 13,
      durability: 5,
      power: 5,
      combat: 20
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["5'10", '178 cm'],
      weight: ['181 lb', '81 kg'],
      eyeColor: 'Brown',
      hairColor: 'Brown'
    },
    biography: {
      fullName: 'Bob',
      alterEgos: 'No alter egos found.',
      aliases: ['Bob', 'agent of Hydra', 'Bob', 'agent of A.I.M'],
      placeOfBirth: '-',
      firstAppearance: 'Cable & Deadpool #38 (May, 2007)',
      publisher: 'Marvel Comics',
      alignment: 'good'
    },
    work: {
      occupation: 'Mercenary, janitor; former pirate, terrorist',
      base: 'Mobile; formerly Manhattan, Hellcarrier'
    },
    connections: {
      groupAffiliation: 'A.I.M., Deadpool; formerly Agency X, Hydra',
      relatives: 'Allison (ex-wife); Terry and Howie (sons)'
    },
    images: {
      xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/10-agent-bob.jpg',
      sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/10-agent-bob.jpg',
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/10-agent-bob.jpg',
      lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/10-agent-bob.jpg'
    }
  }
];
