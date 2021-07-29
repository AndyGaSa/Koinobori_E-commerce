const {
  getPokemonList,
  getPokemonFromApi,
  getPokemonFilter,
} = require('./storage.js');

describe('Given a getPokemonList function', () => {
  describe('When is invoked', () => {
    describe('And the promise resolves', () => {
      beforeEach(() => {
        global.fetch = jest.fn()
          .mockResolvedValue({
            json: jest.fn()
              .mockResolvedValue({
                count: 1118,
                next: 'https://pokeapi.co/api/v2/pokemon?offset=202&limit=2',
                previous: 'https://pokeapi.co/api/v2/pokemon?offset=198&limit=2',
                results: [
                  {
                    name: 'unown',
                    url: 'https://pokeapi.co/api/v2/pokemon/201/',
                  },
                  {
                    name: 'wobbuffet',
                    url: 'https://pokeapi.co/api/v2/pokemon/202/',
                  },
                ],
              }),
          });
      });
      test('Then should return an array.length = 2', () => getPokemonList().then((pokemons) => {
        expect(pokemons.results.length).toBe(2);
      }));
      test('Then pokemon name should be unown', () => getPokemonList().then((pokemons) => {
        expect(pokemons.results[0].name).toBe('unown');
      }));
    });
  });
});

describe('Given a getPokemonFromApi function', () => {
  describe('When is invoked', () => {
    describe('And the promise resolves', () => {
      beforeEach(() => {
        global.fetch = jest.fn()
          .mockResolvedValue({
            json: jest.fn()
              .mockResolvedValue({
                abilities: [
                  {
                    ability: {
                      name: 'limber',
                      url: 'https://pokeapi.co/api/v2/ability/7/',
                    },
                    is_hidden: false,
                    slot: 1,
                  },
                  {
                    ability: {
                      name: 'imposter',
                      url: 'https://pokeapi.co/api/v2/ability/150/',
                    },
                    is_hidden: true,
                    slot: 3,
                  },
                ],
                base_experience: 101,
                forms: [
                  {
                    name: 'ditto',
                    url: 'https://pokeapi.co/api/v2/pokemon-form/132/',
                  },
                ],
                game_indices: [
                  {
                    game_index: 76,
                    version: {
                      name: 'red',
                      url: 'https://pokeapi.co/api/v2/version/1/',
                    },
                  },
                  {
                    game_index: 76,
                    version: {
                      name: 'blue',
                      url: 'https://pokeapi.co/api/v2/version/2/',
                    },
                  },
                  {
                    game_index: 76,
                    version: {
                      name: 'yellow',
                      url: 'https://pokeapi.co/api/v2/version/3/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'gold',
                      url: 'https://pokeapi.co/api/v2/version/4/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'silver',
                      url: 'https://pokeapi.co/api/v2/version/5/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'crystal',
                      url: 'https://pokeapi.co/api/v2/version/6/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'ruby',
                      url: 'https://pokeapi.co/api/v2/version/7/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'sapphire',
                      url: 'https://pokeapi.co/api/v2/version/8/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'emerald',
                      url: 'https://pokeapi.co/api/v2/version/9/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'firered',
                      url: 'https://pokeapi.co/api/v2/version/10/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'leafgreen',
                      url: 'https://pokeapi.co/api/v2/version/11/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'diamond',
                      url: 'https://pokeapi.co/api/v2/version/12/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'pearl',
                      url: 'https://pokeapi.co/api/v2/version/13/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'platinum',
                      url: 'https://pokeapi.co/api/v2/version/14/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'heartgold',
                      url: 'https://pokeapi.co/api/v2/version/15/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'soulsilver',
                      url: 'https://pokeapi.co/api/v2/version/16/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'black',
                      url: 'https://pokeapi.co/api/v2/version/17/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'white',
                      url: 'https://pokeapi.co/api/v2/version/18/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'black-2',
                      url: 'https://pokeapi.co/api/v2/version/21/',
                    },
                  },
                  {
                    game_index: 132,
                    version: {
                      name: 'white-2',
                      url: 'https://pokeapi.co/api/v2/version/22/',
                    },
                  },
                ],
                height: 3,
                held_items: [
                  {
                    item: {
                      name: 'metal-powder',
                      url: 'https://pokeapi.co/api/v2/item/234/',
                    },
                    version_details: [
                      {
                        rarity: 5,
                        version: {
                          name: 'ruby',
                          url: 'https://pokeapi.co/api/v2/version/7/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'sapphire',
                          url: 'https://pokeapi.co/api/v2/version/8/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'emerald',
                          url: 'https://pokeapi.co/api/v2/version/9/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'firered',
                          url: 'https://pokeapi.co/api/v2/version/10/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'leafgreen',
                          url: 'https://pokeapi.co/api/v2/version/11/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'diamond',
                          url: 'https://pokeapi.co/api/v2/version/12/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'pearl',
                          url: 'https://pokeapi.co/api/v2/version/13/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'platinum',
                          url: 'https://pokeapi.co/api/v2/version/14/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'heartgold',
                          url: 'https://pokeapi.co/api/v2/version/15/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'soulsilver',
                          url: 'https://pokeapi.co/api/v2/version/16/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'black',
                          url: 'https://pokeapi.co/api/v2/version/17/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'white',
                          url: 'https://pokeapi.co/api/v2/version/18/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'black-2',
                          url: 'https://pokeapi.co/api/v2/version/21/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'white-2',
                          url: 'https://pokeapi.co/api/v2/version/22/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'x',
                          url: 'https://pokeapi.co/api/v2/version/23/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'y',
                          url: 'https://pokeapi.co/api/v2/version/24/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'omega-ruby',
                          url: 'https://pokeapi.co/api/v2/version/25/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'alpha-sapphire',
                          url: 'https://pokeapi.co/api/v2/version/26/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'sun',
                          url: 'https://pokeapi.co/api/v2/version/27/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'moon',
                          url: 'https://pokeapi.co/api/v2/version/28/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'ultra-sun',
                          url: 'https://pokeapi.co/api/v2/version/29/',
                        },
                      },
                      {
                        rarity: 5,
                        version: {
                          name: 'ultra-moon',
                          url: 'https://pokeapi.co/api/v2/version/30/',
                        },
                      },
                    ],
                  },
                  {
                    item: {
                      name: 'quick-powder',
                      url: 'https://pokeapi.co/api/v2/item/251/',
                    },
                    version_details: [
                      {
                        rarity: 50,
                        version: {
                          name: 'diamond',
                          url: 'https://pokeapi.co/api/v2/version/12/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'pearl',
                          url: 'https://pokeapi.co/api/v2/version/13/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'platinum',
                          url: 'https://pokeapi.co/api/v2/version/14/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'heartgold',
                          url: 'https://pokeapi.co/api/v2/version/15/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'soulsilver',
                          url: 'https://pokeapi.co/api/v2/version/16/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'black',
                          url: 'https://pokeapi.co/api/v2/version/17/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'white',
                          url: 'https://pokeapi.co/api/v2/version/18/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'black-2',
                          url: 'https://pokeapi.co/api/v2/version/21/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'white-2',
                          url: 'https://pokeapi.co/api/v2/version/22/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'x',
                          url: 'https://pokeapi.co/api/v2/version/23/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'y',
                          url: 'https://pokeapi.co/api/v2/version/24/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'omega-ruby',
                          url: 'https://pokeapi.co/api/v2/version/25/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'alpha-sapphire',
                          url: 'https://pokeapi.co/api/v2/version/26/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'sun',
                          url: 'https://pokeapi.co/api/v2/version/27/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'moon',
                          url: 'https://pokeapi.co/api/v2/version/28/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'ultra-sun',
                          url: 'https://pokeapi.co/api/v2/version/29/',
                        },
                      },
                      {
                        rarity: 50,
                        version: {
                          name: 'ultra-moon',
                          url: 'https://pokeapi.co/api/v2/version/30/',
                        },
                      },
                    ],
                  },
                ],
                id: 132,
                is_default: true,
                location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/132/encounters',
                moves: [
                  {
                    move: {
                      name: 'transform',
                      url: 'https://pokeapi.co/api/v2/move/144/',
                    },
                    version_group_details: [
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'red-blue',
                          url: 'https://pokeapi.co/api/v2/version-group/1/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'yellow',
                          url: 'https://pokeapi.co/api/v2/version-group/2/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'gold-silver',
                          url: 'https://pokeapi.co/api/v2/version-group/3/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'crystal',
                          url: 'https://pokeapi.co/api/v2/version-group/4/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'ruby-sapphire',
                          url: 'https://pokeapi.co/api/v2/version-group/5/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'emerald',
                          url: 'https://pokeapi.co/api/v2/version-group/6/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'firered-leafgreen',
                          url: 'https://pokeapi.co/api/v2/version-group/7/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'diamond-pearl',
                          url: 'https://pokeapi.co/api/v2/version-group/8/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'platinum',
                          url: 'https://pokeapi.co/api/v2/version-group/9/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'heartgold-soulsilver',
                          url: 'https://pokeapi.co/api/v2/version-group/10/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'black-white',
                          url: 'https://pokeapi.co/api/v2/version-group/11/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'colosseum',
                          url: 'https://pokeapi.co/api/v2/version-group/12/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'xd',
                          url: 'https://pokeapi.co/api/v2/version-group/13/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'black-2-white-2',
                          url: 'https://pokeapi.co/api/v2/version-group/14/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'x-y',
                          url: 'https://pokeapi.co/api/v2/version-group/15/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'omega-ruby-alpha-sapphire',
                          url: 'https://pokeapi.co/api/v2/version-group/16/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'sun-moon',
                          url: 'https://pokeapi.co/api/v2/version-group/17/',
                        },
                      },
                      {
                        level_learned_at: 1,
                        move_learn_method: {
                          name: 'level-up',
                          url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                        },
                        version_group: {
                          name: 'ultra-sun-ultra-moon',
                          url: 'https://pokeapi.co/api/v2/version-group/18/',
                        },
                      },
                    ],
                  },
                ],
                name: 'ditto',
                order: 203,
                past_types: [],
                species: {
                  name: 'ditto',
                  url: 'https://pokeapi.co/api/v2/pokemon-species/132/',
                },
                sprites: {
                  back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png',
                  back_female: null,
                  back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png',
                  back_shiny_female: null,
                  front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
                  front_female: null,
                  front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png',
                  front_shiny_female: null,
                  other: {
                    dream_world: {
                      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg',
                      front_female: null,
                    },
                    'official-artwork': {
                      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
                    },
                  },
                  versions: {
                    'generation-i': {
                      'red-blue': {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/132.png',
                        back_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/132.png',
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png',
                        front_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/132.png',
                      },
                      yellow: {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/132.png',
                        back_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/132.png',
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/132.png',
                        front_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/132.png',
                      },
                    },
                    'generation-ii': {
                      crystal: {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/132.png',
                        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/132.png',
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/132.png',
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/132.png',
                      },
                      gold: {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/132.png',
                        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/132.png',
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/132.png',
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/132.png',
                      },
                      silver: {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/132.png',
                        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/132.png',
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/132.png',
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/132.png',
                      },
                    },
                    'generation-iii': {
                      emerald: {
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/132.png',
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/132.png',
                      },
                      'firered-leafgreen': {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/132.png',
                        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/132.png',
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png',
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/132.png',
                      },
                      'ruby-sapphire': {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/132.png',
                        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/132.png',
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/132.png',
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/132.png',
                      },
                    },
                    'generation-iv': {
                      'diamond-pearl': {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/132.png',
                        back_female: null,
                        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/132.png',
                        back_shiny_female: null,
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/132.png',
                        front_female: null,
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/132.png',
                        front_shiny_female: null,
                      },
                      'heartgold-soulsilver': {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/132.png',
                        back_female: null,
                        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/132.png',
                        back_shiny_female: null,
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/132.png',
                        front_female: null,
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/132.png',
                        front_shiny_female: null,
                      },
                      platinum: {
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/132.png',
                        back_female: null,
                        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/132.png',
                        back_shiny_female: null,
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/132.png',
                        front_female: null,
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png',
                        front_shiny_female: null,
                      },
                    },
                    'generation-v': {
                      'black-white': {
                        animated: {
                          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif',
                          back_female: null,
                          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/132.gif',
                          back_shiny_female: null,
                          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif',
                          front_female: null,
                          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif',
                          front_shiny_female: null,
                        },
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/132.png',
                        back_female: null,
                        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/132.png',
                        back_shiny_female: null,
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/132.png',
                        front_female: null,
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/132.png',
                        front_shiny_female: null,
                      },
                    },
                    'generation-vi': {
                      'omegaruby-alphasapphire': {
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/132.png',
                        front_female: null,
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/132.png',
                        front_shiny_female: null,
                      },
                      'x-y': {
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/132.png',
                        front_female: null,
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/132.png',
                        front_shiny_female: null,
                      },
                    },
                    'generation-vii': {
                      icons: {
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png',
                        front_female: null,
                      },
                      'ultra-sun-ultra-moon': {
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/132.png',
                        front_female: null,
                        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/132.png',
                        front_shiny_female: null,
                      },
                    },
                    'generation-viii': {
                      icons: {
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/132.png',
                        front_female: null,
                      },
                    },
                  },
                },
                stats: [
                  {
                    base_stat: 48,
                    effort: 1,
                    stat: {
                      name: 'hp',
                      url: 'https://pokeapi.co/api/v2/stat/1/',
                    },
                  },
                  {
                    base_stat: 48,
                    effort: 0,
                    stat: {
                      name: 'attack',
                      url: 'https://pokeapi.co/api/v2/stat/2/',
                    },
                  },
                  {
                    base_stat: 48,
                    effort: 0,
                    stat: {
                      name: 'defense',
                      url: 'https://pokeapi.co/api/v2/stat/3/',
                    },
                  },
                  {
                    base_stat: 48,
                    effort: 0,
                    stat: {
                      name: 'special-attack',
                      url: 'https://pokeapi.co/api/v2/stat/4/',
                    },
                  },
                  {
                    base_stat: 48,
                    effort: 0,
                    stat: {
                      name: 'special-defense',
                      url: 'https://pokeapi.co/api/v2/stat/5/',
                    },
                  },
                  {
                    base_stat: 48,
                    effort: 0,
                    stat: {
                      name: 'speed',
                      url: 'https://pokeapi.co/api/v2/stat/6/',
                    },
                  },
                ],
                types: [
                  {
                    slot: 1,
                    type: {
                      name: 'normal',
                      url: 'https://pokeapi.co/api/v2/type/1/',
                    },
                  },
                ],
                weight: 40,
              }),
          });
      });
      test('Then should return an object with property name = ditto', () => getPokemonFromApi().then((pokemon) => {
        expect(pokemon.forms[0].name).toBe('ditto');
      }));
      test('Then pokemon type should be normal', () => getPokemonFromApi().then((pokemons) => {
        expect(pokemons.types[0].type.name).toBe('normal');
      }));
    });
  });
});

describe('Given a getPokemonFilter function', () => {
  describe('When is invoked', () => {
    describe('And the promise resolves', () => {
      beforeEach(() => {
        global.fetch = jest.fn()
          .mockResolvedValue({
            json: jest.fn()
              .mockResolvedValue({
                damage_relations: {
                  double_damage_from: [
                    {
                      name: 'rock',
                      url: 'https://pokeapi.co/api/v2/type/6/',
                    },
                    {
                      name: 'electric',
                      url: 'https://pokeapi.co/api/v2/type/13/',
                    },
                    {
                      name: 'ice',
                      url: 'https://pokeapi.co/api/v2/type/15/',
                    },
                  ],
                  double_damage_to: [
                    {
                      name: 'fighting',
                      url: 'https://pokeapi.co/api/v2/type/2/',
                    },
                    {
                      name: 'bug',
                      url: 'https://pokeapi.co/api/v2/type/7/',
                    },
                    {
                      name: 'grass',
                      url: 'https://pokeapi.co/api/v2/type/12/',
                    },
                  ],
                  half_damage_from: [
                    {
                      name: 'fighting',
                      url: 'https://pokeapi.co/api/v2/type/2/',
                    },
                    {
                      name: 'bug',
                      url: 'https://pokeapi.co/api/v2/type/7/',
                    },
                    {
                      name: 'grass',
                      url: 'https://pokeapi.co/api/v2/type/12/',
                    },
                  ],
                  half_damage_to: [
                    {
                      name: 'rock',
                      url: 'https://pokeapi.co/api/v2/type/6/',
                    },
                    {
                      name: 'steel',
                      url: 'https://pokeapi.co/api/v2/type/9/',
                    },
                    {
                      name: 'electric',
                      url: 'https://pokeapi.co/api/v2/type/13/',
                    },
                  ],
                  no_damage_from: [
                    {
                      name: 'ground',
                      url: 'https://pokeapi.co/api/v2/type/5/',
                    },
                  ],
                  no_damage_to: [],
                },
                game_indices: [
                  {
                    game_index: 2,
                    generation: {
                      name: 'generation-i',
                      url: 'https://pokeapi.co/api/v2/generation/1/',
                    },
                  },
                  {
                    game_index: 2,
                    generation: {
                      name: 'generation-ii',
                      url: 'https://pokeapi.co/api/v2/generation/2/',
                    },
                  },
                  {
                    game_index: 2,
                    generation: {
                      name: 'generation-iii',
                      url: 'https://pokeapi.co/api/v2/generation/3/',
                    },
                  },
                  {
                    game_index: 2,
                    generation: {
                      name: 'generation-iv',
                      url: 'https://pokeapi.co/api/v2/generation/4/',
                    },
                  },
                  {
                    game_index: 2,
                    generation: {
                      name: 'generation-v',
                      url: 'https://pokeapi.co/api/v2/generation/5/',
                    },
                  },
                  {
                    game_index: 2,
                    generation: {
                      name: 'generation-vi',
                      url: 'https://pokeapi.co/api/v2/generation/6/',
                    },
                  },
                ],
                generation: {
                  name: 'generation-i',
                  url: 'https://pokeapi.co/api/v2/generation/1/',
                },
                id: 3,
                move_damage_class: {
                  name: 'physical',
                  url: 'https://pokeapi.co/api/v2/move-damage-class/2/',
                },
                moves: [
                  {
                    name: 'gust',
                    url: 'https://pokeapi.co/api/v2/move/16/',
                  },
                  {
                    name: 'wing-attack',
                    url: 'https://pokeapi.co/api/v2/move/17/',
                  },
                  {
                    name: 'fly',
                    url: 'https://pokeapi.co/api/v2/move/19/',
                  },
                  {
                    name: 'peck',
                    url: 'https://pokeapi.co/api/v2/move/64/',
                  },
                  {
                    name: 'drill-peck',
                    url: 'https://pokeapi.co/api/v2/move/65/',
                  },
                  {
                    name: 'mirror-move',
                    url: 'https://pokeapi.co/api/v2/move/119/',
                  },
                  {
                    name: 'sky-attack',
                    url: 'https://pokeapi.co/api/v2/move/143/',
                  },
                  {
                    name: 'aeroblast',
                    url: 'https://pokeapi.co/api/v2/move/177/',
                  },
                  {
                    name: 'feather-dance',
                    url: 'https://pokeapi.co/api/v2/move/297/',
                  },
                  {
                    name: 'air-cutter',
                    url: 'https://pokeapi.co/api/v2/move/314/',
                  },
                  {
                    name: 'aerial-ace',
                    url: 'https://pokeapi.co/api/v2/move/332/',
                  },
                  {
                    name: 'bounce',
                    url: 'https://pokeapi.co/api/v2/move/340/',
                  },
                  {
                    name: 'roost',
                    url: 'https://pokeapi.co/api/v2/move/355/',
                  },
                  {
                    name: 'pluck',
                    url: 'https://pokeapi.co/api/v2/move/365/',
                  },
                  {
                    name: 'tailwind',
                    url: 'https://pokeapi.co/api/v2/move/366/',
                  },
                  {
                    name: 'air-slash',
                    url: 'https://pokeapi.co/api/v2/move/403/',
                  },
                  {
                    name: 'brave-bird',
                    url: 'https://pokeapi.co/api/v2/move/413/',
                  },
                  {
                    name: 'defog',
                    url: 'https://pokeapi.co/api/v2/move/432/',
                  },
                  {
                    name: 'chatter',
                    url: 'https://pokeapi.co/api/v2/move/448/',
                  },
                  {
                    name: 'sky-drop',
                    url: 'https://pokeapi.co/api/v2/move/507/',
                  },
                  {
                    name: 'acrobatics',
                    url: 'https://pokeapi.co/api/v2/move/512/',
                  },
                  {
                    name: 'hurricane',
                    url: 'https://pokeapi.co/api/v2/move/542/',
                  },
                  {
                    name: 'oblivion-wing',
                    url: 'https://pokeapi.co/api/v2/move/613/',
                  },
                  {
                    name: 'dragon-ascent',
                    url: 'https://pokeapi.co/api/v2/move/620/',
                  },
                  {
                    name: 'supersonic-skystrike--physical',
                    url: 'https://pokeapi.co/api/v2/move/626/',
                  },
                  {
                    name: 'supersonic-skystrike--special',
                    url: 'https://pokeapi.co/api/v2/move/627/',
                  },
                  {
                    name: 'beak-blast',
                    url: 'https://pokeapi.co/api/v2/move/690/',
                  },
                  {
                    name: 'floaty-fall',
                    url: 'https://pokeapi.co/api/v2/move/731/',
                  },
                  {
                    name: 'max-airstream',
                    url: 'https://pokeapi.co/api/v2/move/766/',
                  },
                  {
                    name: 'dual-wingbeat',
                    url: 'https://pokeapi.co/api/v2/move/814/',
                  },
                ],
                name: 'flying',
                names: [
                  {
                    language: {
                      name: 'ja-Hrkt',
                      url: 'https://pokeapi.co/api/v2/language/1/',
                    },
                    name: 'ひこう',
                  },
                  {
                    language: {
                      name: 'ko',
                      url: 'https://pokeapi.co/api/v2/language/3/',
                    },
                    name: '비행',
                  },
                  {
                    language: {
                      name: 'fr',
                      url: 'https://pokeapi.co/api/v2/language/5/',
                    },
                    name: 'Vol',
                  },
                  {
                    language: {
                      name: 'de',
                      url: 'https://pokeapi.co/api/v2/language/6/',
                    },
                    name: 'Flug',
                  },
                  {
                    language: {
                      name: 'es',
                      url: 'https://pokeapi.co/api/v2/language/7/',
                    },
                    name: 'Volador',
                  },
                  {
                    language: {
                      name: 'it',
                      url: 'https://pokeapi.co/api/v2/language/8/',
                    },
                    name: 'Volante',
                  },
                  {
                    language: {
                      name: 'en',
                      url: 'https://pokeapi.co/api/v2/language/9/',
                    },
                    name: 'Flying',
                  },
                ],
                pokemon: [
                  {
                    pokemon: {
                      name: 'charizard',
                      url: 'https://pokeapi.co/api/v2/pokemon/6/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'butterfree',
                      url: 'https://pokeapi.co/api/v2/pokemon/12/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'pidgey',
                      url: 'https://pokeapi.co/api/v2/pokemon/16/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'pidgeotto',
                      url: 'https://pokeapi.co/api/v2/pokemon/17/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'pidgeot',
                      url: 'https://pokeapi.co/api/v2/pokemon/18/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'spearow',
                      url: 'https://pokeapi.co/api/v2/pokemon/21/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'fearow',
                      url: 'https://pokeapi.co/api/v2/pokemon/22/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'zubat',
                      url: 'https://pokeapi.co/api/v2/pokemon/41/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'golbat',
                      url: 'https://pokeapi.co/api/v2/pokemon/42/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'farfetchd',
                      url: 'https://pokeapi.co/api/v2/pokemon/83/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'doduo',
                      url: 'https://pokeapi.co/api/v2/pokemon/84/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'dodrio',
                      url: 'https://pokeapi.co/api/v2/pokemon/85/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'scyther',
                      url: 'https://pokeapi.co/api/v2/pokemon/123/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'gyarados',
                      url: 'https://pokeapi.co/api/v2/pokemon/130/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'aerodactyl',
                      url: 'https://pokeapi.co/api/v2/pokemon/142/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'articuno',
                      url: 'https://pokeapi.co/api/v2/pokemon/144/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'zapdos',
                      url: 'https://pokeapi.co/api/v2/pokemon/145/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'moltres',
                      url: 'https://pokeapi.co/api/v2/pokemon/146/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'dragonite',
                      url: 'https://pokeapi.co/api/v2/pokemon/149/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'hoothoot',
                      url: 'https://pokeapi.co/api/v2/pokemon/163/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'noctowl',
                      url: 'https://pokeapi.co/api/v2/pokemon/164/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'ledyba',
                      url: 'https://pokeapi.co/api/v2/pokemon/165/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'ledian',
                      url: 'https://pokeapi.co/api/v2/pokemon/166/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'crobat',
                      url: 'https://pokeapi.co/api/v2/pokemon/169/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'togetic',
                      url: 'https://pokeapi.co/api/v2/pokemon/176/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'natu',
                      url: 'https://pokeapi.co/api/v2/pokemon/177/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'xatu',
                      url: 'https://pokeapi.co/api/v2/pokemon/178/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'hoppip',
                      url: 'https://pokeapi.co/api/v2/pokemon/187/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'skiploom',
                      url: 'https://pokeapi.co/api/v2/pokemon/188/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'jumpluff',
                      url: 'https://pokeapi.co/api/v2/pokemon/189/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'yanma',
                      url: 'https://pokeapi.co/api/v2/pokemon/193/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'murkrow',
                      url: 'https://pokeapi.co/api/v2/pokemon/198/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'gligar',
                      url: 'https://pokeapi.co/api/v2/pokemon/207/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'delibird',
                      url: 'https://pokeapi.co/api/v2/pokemon/225/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'mantine',
                      url: 'https://pokeapi.co/api/v2/pokemon/226/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'skarmory',
                      url: 'https://pokeapi.co/api/v2/pokemon/227/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'lugia',
                      url: 'https://pokeapi.co/api/v2/pokemon/249/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'ho-oh',
                      url: 'https://pokeapi.co/api/v2/pokemon/250/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'beautifly',
                      url: 'https://pokeapi.co/api/v2/pokemon/267/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'taillow',
                      url: 'https://pokeapi.co/api/v2/pokemon/276/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'swellow',
                      url: 'https://pokeapi.co/api/v2/pokemon/277/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'wingull',
                      url: 'https://pokeapi.co/api/v2/pokemon/278/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'pelipper',
                      url: 'https://pokeapi.co/api/v2/pokemon/279/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'masquerain',
                      url: 'https://pokeapi.co/api/v2/pokemon/284/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'ninjask',
                      url: 'https://pokeapi.co/api/v2/pokemon/291/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'swablu',
                      url: 'https://pokeapi.co/api/v2/pokemon/333/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'altaria',
                      url: 'https://pokeapi.co/api/v2/pokemon/334/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'tropius',
                      url: 'https://pokeapi.co/api/v2/pokemon/357/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'salamence',
                      url: 'https://pokeapi.co/api/v2/pokemon/373/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'rayquaza',
                      url: 'https://pokeapi.co/api/v2/pokemon/384/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'starly',
                      url: 'https://pokeapi.co/api/v2/pokemon/396/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'staravia',
                      url: 'https://pokeapi.co/api/v2/pokemon/397/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'staraptor',
                      url: 'https://pokeapi.co/api/v2/pokemon/398/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'mothim',
                      url: 'https://pokeapi.co/api/v2/pokemon/414/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'combee',
                      url: 'https://pokeapi.co/api/v2/pokemon/415/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'vespiquen',
                      url: 'https://pokeapi.co/api/v2/pokemon/416/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'drifloon',
                      url: 'https://pokeapi.co/api/v2/pokemon/425/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'drifblim',
                      url: 'https://pokeapi.co/api/v2/pokemon/426/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'honchkrow',
                      url: 'https://pokeapi.co/api/v2/pokemon/430/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'chatot',
                      url: 'https://pokeapi.co/api/v2/pokemon/441/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'mantyke',
                      url: 'https://pokeapi.co/api/v2/pokemon/458/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'togekiss',
                      url: 'https://pokeapi.co/api/v2/pokemon/468/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'yanmega',
                      url: 'https://pokeapi.co/api/v2/pokemon/469/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'gliscor',
                      url: 'https://pokeapi.co/api/v2/pokemon/472/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'pidove',
                      url: 'https://pokeapi.co/api/v2/pokemon/519/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'tranquill',
                      url: 'https://pokeapi.co/api/v2/pokemon/520/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'unfezant',
                      url: 'https://pokeapi.co/api/v2/pokemon/521/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'woobat',
                      url: 'https://pokeapi.co/api/v2/pokemon/527/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'swoobat',
                      url: 'https://pokeapi.co/api/v2/pokemon/528/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'sigilyph',
                      url: 'https://pokeapi.co/api/v2/pokemon/561/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'archen',
                      url: 'https://pokeapi.co/api/v2/pokemon/566/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'archeops',
                      url: 'https://pokeapi.co/api/v2/pokemon/567/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'ducklett',
                      url: 'https://pokeapi.co/api/v2/pokemon/580/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'swanna',
                      url: 'https://pokeapi.co/api/v2/pokemon/581/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'emolga',
                      url: 'https://pokeapi.co/api/v2/pokemon/587/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'rufflet',
                      url: 'https://pokeapi.co/api/v2/pokemon/627/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'braviary',
                      url: 'https://pokeapi.co/api/v2/pokemon/628/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'vullaby',
                      url: 'https://pokeapi.co/api/v2/pokemon/629/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'mandibuzz',
                      url: 'https://pokeapi.co/api/v2/pokemon/630/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'tornadus-incarnate',
                      url: 'https://pokeapi.co/api/v2/pokemon/641/',
                    },
                    slot: 1,
                  },
                  {
                    pokemon: {
                      name: 'thundurus-incarnate',
                      url: 'https://pokeapi.co/api/v2/pokemon/642/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'landorus-incarnate',
                      url: 'https://pokeapi.co/api/v2/pokemon/645/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'fletchling',
                      url: 'https://pokeapi.co/api/v2/pokemon/661/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'fletchinder',
                      url: 'https://pokeapi.co/api/v2/pokemon/662/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'talonflame',
                      url: 'https://pokeapi.co/api/v2/pokemon/663/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'vivillon',
                      url: 'https://pokeapi.co/api/v2/pokemon/666/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'hawlucha',
                      url: 'https://pokeapi.co/api/v2/pokemon/701/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'noibat',
                      url: 'https://pokeapi.co/api/v2/pokemon/714/',
                    },
                    slot: 1,
                  },
                  {
                    pokemon: {
                      name: 'noivern',
                      url: 'https://pokeapi.co/api/v2/pokemon/715/',
                    },
                    slot: 1,
                  },
                  {
                    pokemon: {
                      name: 'yveltal',
                      url: 'https://pokeapi.co/api/v2/pokemon/717/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'rowlet',
                      url: 'https://pokeapi.co/api/v2/pokemon/722/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'dartrix',
                      url: 'https://pokeapi.co/api/v2/pokemon/723/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'pikipek',
                      url: 'https://pokeapi.co/api/v2/pokemon/731/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'trumbeak',
                      url: 'https://pokeapi.co/api/v2/pokemon/732/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'toucannon',
                      url: 'https://pokeapi.co/api/v2/pokemon/733/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'oricorio-baile',
                      url: 'https://pokeapi.co/api/v2/pokemon/741/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-red-meteor',
                      url: 'https://pokeapi.co/api/v2/pokemon/774/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'celesteela',
                      url: 'https://pokeapi.co/api/v2/pokemon/797/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'rookidee',
                      url: 'https://pokeapi.co/api/v2/pokemon/821/',
                    },
                    slot: 1,
                  },
                  {
                    pokemon: {
                      name: 'corvisquire',
                      url: 'https://pokeapi.co/api/v2/pokemon/822/',
                    },
                    slot: 1,
                  },
                  {
                    pokemon: {
                      name: 'corviknight',
                      url: 'https://pokeapi.co/api/v2/pokemon/823/',
                    },
                    slot: 1,
                  },
                  {
                    pokemon: {
                      name: 'cramorant',
                      url: 'https://pokeapi.co/api/v2/pokemon/845/',
                    },
                    slot: 1,
                  },
                  {
                    pokemon: {
                      name: 'shaymin-sky',
                      url: 'https://pokeapi.co/api/v2/pokemon/10006/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'rotom-fan',
                      url: 'https://pokeapi.co/api/v2/pokemon/10011/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'tornadus-therian',
                      url: 'https://pokeapi.co/api/v2/pokemon/10019/',
                    },
                    slot: 1,
                  },
                  {
                    pokemon: {
                      name: 'thundurus-therian',
                      url: 'https://pokeapi.co/api/v2/pokemon/10020/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'landorus-therian',
                      url: 'https://pokeapi.co/api/v2/pokemon/10021/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'charizard-mega-y',
                      url: 'https://pokeapi.co/api/v2/pokemon/10035/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'pinsir-mega',
                      url: 'https://pokeapi.co/api/v2/pokemon/10040/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'aerodactyl-mega',
                      url: 'https://pokeapi.co/api/v2/pokemon/10042/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'pidgeot-mega',
                      url: 'https://pokeapi.co/api/v2/pokemon/10073/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'rayquaza-mega',
                      url: 'https://pokeapi.co/api/v2/pokemon/10079/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'salamence-mega',
                      url: 'https://pokeapi.co/api/v2/pokemon/10089/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'oricorio-pom-pom',
                      url: 'https://pokeapi.co/api/v2/pokemon/10123/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'oricorio-pau',
                      url: 'https://pokeapi.co/api/v2/pokemon/10124/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'oricorio-sensu',
                      url: 'https://pokeapi.co/api/v2/pokemon/10125/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-orange-meteor',
                      url: 'https://pokeapi.co/api/v2/pokemon/10130/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-yellow-meteor',
                      url: 'https://pokeapi.co/api/v2/pokemon/10131/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-green-meteor',
                      url: 'https://pokeapi.co/api/v2/pokemon/10132/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-blue-meteor',
                      url: 'https://pokeapi.co/api/v2/pokemon/10133/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-indigo-meteor',
                      url: 'https://pokeapi.co/api/v2/pokemon/10134/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-violet-meteor',
                      url: 'https://pokeapi.co/api/v2/pokemon/10135/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-red',
                      url: 'https://pokeapi.co/api/v2/pokemon/10136/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-orange',
                      url: 'https://pokeapi.co/api/v2/pokemon/10137/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-yellow',
                      url: 'https://pokeapi.co/api/v2/pokemon/10138/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-green',
                      url: 'https://pokeapi.co/api/v2/pokemon/10139/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-blue',
                      url: 'https://pokeapi.co/api/v2/pokemon/10140/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-indigo',
                      url: 'https://pokeapi.co/api/v2/pokemon/10141/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'minior-violet',
                      url: 'https://pokeapi.co/api/v2/pokemon/10142/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'articuno-galar',
                      url: 'https://pokeapi.co/api/v2/pokemon/10166/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'zapdos-galar',
                      url: 'https://pokeapi.co/api/v2/pokemon/10167/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'moltres-galar',
                      url: 'https://pokeapi.co/api/v2/pokemon/10168/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'charizard-gmax',
                      url: 'https://pokeapi.co/api/v2/pokemon/10187/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'butterfree-gmax',
                      url: 'https://pokeapi.co/api/v2/pokemon/10189/',
                    },
                    slot: 2,
                  },
                  {
                    pokemon: {
                      name: 'corviknight-gmax',
                      url: 'https://pokeapi.co/api/v2/pokemon/10203/',
                    },
                    slot: 1,
                  },
                ],
              }),
          });
      });
      test('Then should return an object with 135 pokemons', () => getPokemonFilter().then((pokemon) => {
        expect(pokemon.pokemon.length).toBe(135);
      }));
      test('Then pokemon 0 should be charizard', () => getPokemonFilter().then((pokemons) => {
        expect(pokemons.pokemon[0].pokemon.name).toBe('charizard');
      }));
    });
  });
});
