// (c) 2017 Michael Gienger (from the book "Healing Crystals")
// I'm allowed to use the following data by the author. 
// This data is not public domain!

var data=[
  {
    "name": "Black Agate",
    "chakra": 1,
    "spirit": "Reformation, reflection, maturity",
  },
  {
    "name": "Black Obsidian",
    "chakra": 1,
    "spirit": "Resolution",
  },
  {
    "name": "Jet",
    "chakra": 1,
    "spirit": "Hope",
  },
  {
    "name": "Mookaite",
    "chakra": 1,
    "spirit": "Experience",
  },
  {
    "name": "Red Jasper",
    "chakra": 1,
    "spirit": "Willpower",
  },
  {
    "name": "Red Tiger Eye",
    "chakra": 1,
    "spirit": "Enhances composure, reserve",
  },
  {
    "name": "Smoky Quartz",
    "chakra": 1,
    "spirit": "Withstand exertion",
  },
  {
    "name": "Snowflake Obsidian",
    "chakra": 1,
    "spirit": "Awakening",
  },
  {
    "name": "Carnelian",
    "chakra": 2,
    "spirit": "Courage, willpower",
  },
  {
    "name": "Grey Agate",
    "chakra": 2,
    "spirit": "Inner stability, composure, maturity",
  },
  {
    "name": "Moonstone",
    "chakra": 2,
    "spirit": "Intuition",
  },
  {
    "name": "Peach Moonstone",
    "chakra": 2,
    "spirit": "Intuition",
  },
  {
    "name": "Amber",
    "chakra": 3,
    "spirit": "Makes carefree",
  },
  {
    "name": "Citrine",
    "chakra": 3,
    "spirit": "Gives courage to face life.",
  },
  {
    "name": "Tiger Eye",
    "chakra": 3,
    "spirit": "Gives overview; reserve",
  },
  {
    "name": "Amazonite",
    "chakra": 4,
    "spirit": "Self-determination",
  },
  {
    "name": "Aventurine",
    "chakra": 4,
    "spirit": "Easy-goingness",
  },
  {
    "name": "Chrysocolla",
    "chakra": 4,
    "spirit": "Balance",
  },
  {
    "name": "Green Jade",
    "chakra": 4,
    "spirit": "Resistance and harmony",
  },
  {
    "name": "Malachite",
    "chakra": 4,
    "spirit": "Promotes adventurous intensive life",
  },
  {
    "name": "Rose Quartz",
    "chakra": 4,
    "spirit": "Sensitivity",
  },
  {
    "name": "Unakite",
    "chakra": 4,
    "spirit": "Recovery",
  },
  {
    "name": "Angelite",
    "chakra": 5,
    "spirit": "Stability, stamina",
  },
  {
    "name": "Aquamarine",
    "chakra": 5,
    "spirit": "Farsightedness, foresight",
  },
  {
    "name": "Blue Lace Agate",
    "chakra": 5,
    "spirit": "Elegance, mental agility, dynamism",
  },
  {
    "name": "Blue Quartz",
    "chakra": 5,
    "spirit": "Imperturbability",
  },
  {
    "name": "Kyanite",
    "chakra": 5,
    "spirit": "Identity, life-fullfilling vocation",
  },
  {
    "name": "Turquoise",
    "chakra": 5,
    "spirit": "Fate",
  },
  {
    "name": "Denim Lapis",
    "chakra": 6,
    "spirit": "Enhances sense of personal responsability",
  },
  {
    "name": "Lapis Lazuli",
    "chakra": 6,
    "spirit": "Truth",
  },
  {
    "name": "Pietersite",
    "chakra": 6,
    "spirit": "Change",
  },
  {
    "name": "Sodalite",
    "chakra": 6,
    "spirit": "Search for truth",
  },
  {
    "name": "Amethyst",
    "chakra": 7,
    "spirit": "Alertness, justice, inner peace",
    "body": "Good for the skin; alleviates pain, tension and lowers high blood pressure."
  },
  {
    "name": "Aragonite",
    "chakra": 7,
    "spirit": "Stable development",
  },
  {
    "name": "Clear Calcite",
    "chakra": 7,
    "spirit": "Development",
  },
  {
    "name": "Howlite",
    "chakra": 7,
    "spirit": "Independence, care",
  },
  {
    "name": "Labradorite",
    "chakra": 7,
    "spirit": "Reflection, truth",
  },
  {
    "name": "Light Amethyst",
    "chakra": 7,
    "spirit": "Peace, spirituality, clarification, meditation",
  }
].sort(function (a, b) {
  return a.name.localeCompare(b.name);
}).map(function(d, idx){
  return {
    name: d.name,
    idx:idx,
    chakra:d.chakra,
    spirit:d.spirit
  }
})
