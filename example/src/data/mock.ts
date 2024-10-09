import { AnimatedDrawerNavigationType } from "animated-drawer-navigation"

export const NAVIGATION: AnimatedDrawerNavigationType = {
  id: "",
  label: "The Known World",
  children: [
    {
      id: "0",
      label: "Westeros",
      children: [
        {
          id: "1",
          label: "The North",
          children: [
            {
              id: "2",
              label: "House Stark",
              children: [
                {
                  id: "3",
                  label: "Eddard Stark",
                  extra: { route: "eddard-stark" },
                },
                {
                  id: "4",
                  label: "Catelyn Stark",
                  extra: { route: "catelyn-stark" },
                },
                {
                  id: "5",
                  label: "Sansa Stark",
                  extra: { route: "sansa-stark" },
                },
                {
                  id: "6",
                  label: "Arya Stark",
                  extra: { route: "arya-stark" },
                },
                {
                  id: "7",
                  label: "Bran Stark",
                  extra: { route: "bran-stark" },
                },
                {
                  id: "8",
                  label: "Jon Snow",
                  extra: { route: "jon-snow" },
                },
                {
                  id: "9",
                  label: "Robb Stark",
                  extra: { route: "robb-stark" },
                },
                {
                  id: "10",
                  label: "Rickon Stark",
                  extra: { route: "rickon-stark" },
                },
              ],
            },
            {
              id: "11",
              label: "House Bolton",
              children: [
                {
                  id: "12",
                  label: "Roose Bolton",
                  extra: { route: "roose-bolton" },
                },
                {
                  id: "13",
                  label: "Ramsay Bolton",
                  extra: { route: "ramsay-bolton" },
                },
              ],
            },
            {
              id: "14",
              label: "House Mormont",
              children: [
                {
                  id: "15",
                  label: "Jeor Mormont",
                  extra: { route: "jeor-mormont" },
                },
                {
                  id: "16",
                  label: "Jorah Mormont",
                  extra: { route: "jorah-mormont" },
                },
                {
                  id: "17",
                  label: "Lyanna Mormont",
                  extra: { route: "lyanna-mormont" },
                },
              ],
            },
          ],
        },
        {
          id: "18",
          label: "The Riverlands",
          children: [
            {
              id: "19",
              label: "House Tully",
              children: [
                {
                  id: "20",
                  label: "Hoster Tully",
                  extra: { route: "hoster-tully" },
                },
                {
                  id: "21",
                  label: "Edmure Tully",
                  extra: { route: "edmure-tully" },
                },
                {
                  id: "22",
                  label: "Brynden Tully",
                  extra: { route: "brynden-tully" },
                },
                {
                  id: "23",
                  label: "Catelyn Stark (Tully)",
                  extra: { route: "catelyn-stark" },
                },
              ],
            },
            {
              id: "24",
              label: "House Frey",
              children: [
                {
                  id: "25",
                  label: "Walder Frey",
                  extra: { route: "walder-frey" },
                },
                {
                  id: "26",
                  label: "Lothar Frey",
                  extra: { route: "lothar-frey" },
                },
                {
                  id: "27",
                  label: "Black Walder",
                  extra: { route: "black-walder" },
                },
              ],
            },
          ],
        },
        {
          id: "28",
          label: "The Vale",
          children: [
            {
              id: "29",
              label: "House Arryn",
              children: [
                {
                  id: "30",
                  label: "Jon Arryn",
                  extra: { route: "jon-arryn" },
                },
                {
                  id: "31",
                  label: "Lysa Arryn",
                  extra: { route: "lysa-arryn" },
                },
                {
                  id: "32",
                  label: "Robin Arryn",
                  extra: { route: "robin-arryn" },
                },
              ],
            },
            {
              id: "33",
              label: "House Royce",
              children: [
                {
                  id: "34",
                  label: "Yohn Royce",
                  extra: { route: "yohn-royce" },
                },
                {
                  id: "35",
                  label: "Robar Royce",
                  extra: { route: "robar-royce" },
                },
                {
                  id: "36",
                  label: "Waymar Royce",
                  extra: { route: "waymar-royce" },
                },
              ],
            },
            {
              id: "37",
              label: "House Hunter",
              children: [
                {
                  id: "38",
                  label: "Eon Hunter",
                  extra: { route: "eon-hunter" },
                },
                {
                  id: "39",
                  label: "Gilbert Hunter",
                  extra: { route: "gilbert-hunter" },
                },
              ],
            },
            {
              id: "40",
              label: "House Corbray",
              children: [
                {
                  id: "41",
                  label: "Lyonel Corbray",
                  extra: { route: "lyonel-corbray" },
                },
                {
                  id: "42",
                  label: "Ser Lyn Corbray",
                  extra: { route: "ser-lyn-corbray" },
                },
              ],
            },
          ],
        },
        {
          id: "43",
          label: "The Westerlands",
          children: [
            {
              id: "44",
              label: "House Lannister",
              children: [
                {
                  id: "45",
                  label: "Tywin Lannister",
                  extra: { route: "tywin-lannister" },
                },
                {
                  id: "46",
                  label: "Cersei Lannister",
                  extra: { route: "cersei-lannister" },
                },
                {
                  id: "47",
                  label: "Jaime Lannister",
                  extra: { route: "jaime-lannister" },
                },
                {
                  id: "48",
                  label: "Tyrion Lannister",
                  extra: { route: "tyrion-lannister" },
                },
              ],
            },
            {
              id: "49",
              label: "House Reyne",
              children: [
                {
                  id: "50",
                  label: "Roger Reyne",
                  extra: { route: "roger-reyne" },
                },
                {
                  id: "51",
                  label: "Robb Reyne",
                  extra: { route: "robb-reyne" },
                },
              ],
            },
            {
              id: "52",
              label: "House Crakehall",
              children: [
                {
                  id: "53",
                  label: "Roland Crakehall",
                  extra: { route: "roland-crakehall" },
                },
                {
                  id: "54",
                  label: "Tybolt Crakehall",
                  extra: { route: "tybolt-crakehall" },
                },
              ],
            },
            {
              id: "55",
              label: "House Lefford",
              children: [
                {
                  id: "56",
                  label: "Alfred Lefford",
                  extra: { route: "alfred-lefford" },
                },
                {
                  id: "57",
                  label: "Jason Lefford",
                  extra: { route: "jason-lefford" },
                },
              ],
            },
          ],
        },
        {
          id: "58",
          label: "The Reach",
          children: [
            {
              id: "59",
              label: "House Tyrell",
              children: [
                {
                  id: "60",
                  label: "Mace Tyrell",
                  extra: { route: "mace-tyrell" },
                },
                {
                  id: "61",
                  label: "Olenna Tyrell",
                  extra: { route: "olenna-tyrell" },
                },
                {
                  id: "62",
                  label: "Margaery Tyrell",
                  extra: { route: "margaery-tyrell" },
                },
                {
                  id: "63",
                  label: "Loras Tyrell",
                  extra: { route: "loras-tyrell" },
                },
              ],
            },
            {
              id: "64",
              label: "House Hightower",
              children: [
                {
                  id: "65",
                  label: "Leyton Hightower",
                  extra: { route: "leyton-hightower" },
                },
                {
                  id: "66",
                  label: "Baelor Hightower",
                  extra: { route: "baelor-hightower" },
                },
                {
                  id: "67",
                  label: "Garth Hightower",
                  extra: { route: "garth-hightower" },
                },
              ],
            },
            {
              id: "68",
              label: "House Florent",
              children: [
                {
                  id: "69",
                  label: "Axell Florent",
                  extra: { route: "axell-florent" },
                },
                {
                  id: "70",
                  label: "Melessa Florent (Tarly)",
                  extra: { route: "melessa-florent" },
                },
              ],
            },
            {
              id: "71",
              label: "House Redwyne",
              children: [
                {
                  id: "72",
                  label: "Paxter Redwyne",
                  extra: { route: "paxter-redwyne" },
                },
                {
                  id: "73",
                  label: "Hobber Redwyne",
                  extra: { route: "hobber-redwyne" },
                },
                {
                  id: "74",
                  label: "Horace Redwyne",
                  extra: { route: "horace-redwyne" },
                },
              ],
            },
            {
              id: "75",
              label: "House Tarly",
              children: [
                {
                  id: "76",
                  label: "Randyl Tarly",
                  extra: { route: "randyl-tarly" },
                },
                {
                  id: "77",
                  label: "Melessa Tarly",
                  extra: { route: "melessa-tarly" },
                },
                {
                  id: "78",
                  label: "Samwell Tarly",
                  extra: { route: "samwell-tarly" },
                },
                {
                  id: "79",
                  label: "Dickon Tarly",
                  extra: { route: "dickon-tarly" },
                },
                {
                  id: "80",
                  label: "Talla Tarly",
                  extra: { route: "talla-tarly" },
                },
              ],
            },
          ],
        },
        {
          id: "81",
          label: "Dorne",
          children: [
            {
              id: "82",
              label: "House Martell",
              children: [
                {
                  id: "83",
                  label: "Oberyn Martell",
                  extra: { route: "oberyn-martell" },
                },
                {
                  id: "84",
                  label: "Ellaria Sand",
                  extra: { route: "ellaria-sand" },
                },
                {
                  id: "85",
                  label: "Trystane Martell",
                  extra: { route: "trystane-martell" },
                },
                {
                  id: "86",
                  label: "Doran Martell",
                  extra: { route: "doran-martell" },
                },
              ],
            },
            {
              id: "87",
              label: "House Dayne",
              children: [
                {
                  id: "88",
                  label: "Arthur Dayne",
                  extra: { route: "arthur-dayne" },
                },
                {
                  id: "89",
                  label: "Ashara Dayne",
                  extra: { route: "ashara-dayne" },
                },
                {
                  id: "90",
                  label: "Edric Dayne",
                  extra: { route: "edric-dayne" },
                },
              ],
            },
            {
              id: "91",
              label: "House Yronwood",
              children: [
                {
                  id: "92",
                  label: "Anders Yronwood",
                  extra: { route: "anders-yronwood" },
                },
                {
                  id: "93",
                  label: "Archibald Yronwood",
                  extra: { route: "archibald-yronwood" },
                },
              ],
            },
            {
              id: "94",
              label: "House Fowler",
              children: [
                {
                  id: "95",
                  label: "Franklyn Fowler",
                  extra: { route: "franklyn-fowler" },
                },
                {
                  id: "96",
                  label: "Nymella Fowler",
                  extra: { route: "nymella-fowler" },
                },
              ],
            },
          ],
        },
        {
          id: "97",
          label: "The Stormlands",
          children: [
            {
              id: "98",
              label: "House Baratheon",
              children: [
                {
                  id: "99",
                  label: "Robert Baratheon",
                  extra: { route: "robert-baratheon" },
                },
                {
                  id: "100",
                  label: "Stannis Baratheon",
                  extra: { route: "stannis-baratheon" },
                },
                {
                  id: "101",
                  label: "Renly Baratheon",
                  extra: { route: "renly-baratheon" },
                },
                {
                  id: "102",
                  label: "Shireen Baratheon",
                  extra: { route: "shireen-baratheon" },
                },
                {
                  id: "103",
                  label: "Joffrey Baratheon",
                  extra: { route: "joffrey-baratheon" },
                },
                {
                  id: "104",
                  label: "Tommen Baratheon",
                  extra: { route: "tommen-baratheon" },
                },
                {
                  id: "105",
                  label: "Myrcella Baratheon",
                  extra: { route: "myrcella-baratheon" },
                },
              ],
            },
            {
              id: "106",
              label: "House Tarth",
              children: [
                {
                  id: "107",
                  label: "Brienne of Tarth",
                  extra: { route: "brienne-of-tarth" },
                },
                {
                  id: "108",
                  label: "Selwyn Tarth",
                  extra: { route: "selwyn-tarth" },
                },
              ],
            },
            {
              id: "109",
              label: "House Caron",
              children: [
                {
                  id: "110",
                  label: "Bryce Caron",
                  extra: { route: "bryce-caron" },
                },
                {
                  id: "111",
                  label: "Edwyn Caron",
                  extra: { route: "edwyn-caron" },
                },
              ],
            },
            {
              id: "112",
              label: "House Dondarrion",
              children: [
                {
                  id: "113",
                  label: "Beric Dondarrion",
                  extra: { route: "beric-dondarrion" },
                },
              ],
            },
          ],
        },
        {
          id: "114",
          label: "Iron Islands",
          children: [
            {
              id: "115",
              label: "House Greyjoy",
              children: [
                {
                  id: "116",
                  label: "Balon Greyjoy",
                  extra: { route: "balon-greyjoy" },
                },
                {
                  id: "117",
                  label: "Theon Greyjoy",
                  extra: { route: "theon-greyjoy" },
                },
                {
                  id: "118",
                  label: "Yara Greyjoy",
                  extra: { route: "yara-greyjoy" },
                },
              ],
            },
            {
              id: "119",
              label: "House Harlaw",
              children: [
                {
                  id: "120",
                  label: "Rodrik Harlaw",
                  extra: { route: "rodrik-harlaw" },
                },
                {
                  id: "121",
                  label: "Asha Greyjoy (Harlaw)",
                  extra: { route: "asha-greyjoy" },
                },
              ],
            },
            {
              id: "122",
              label: "House Botley",
              children: [
                {
                  id: "123",
                  label: "Sawane Botley",
                  extra: { route: "sawane-botley" },
                },
                {
                  id: "124",
                  label: "Tristifer Botley",
                  extra: { route: "tristifer-botley" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "125",
      label: "Essos",
      children: [
        {
          id: "126",
          label: "Slaver's Bay",
          children: [
            {
              id: "127",
              label: "House Targaryen",
              children: [
                {
                  id: "128",
                  label: "Daenerys Targaryen",
                  extra: { route: "daenerys-targaryen" },
                },
                {
                  id: "129",
                  label: "Viserys Targaryen",
                  extra: { route: "viserys-targaryen" },
                },
                {
                  id: "130",
                  label: "Aemon Targaryen",
                  extra: { route: "aemon-targaryen" },
                },
              ],
            },
          ],
        },
        {
          id: "131",
          label: "Dothraki Sea",
          children: [
            {
              id: "132",
              label: "Dothraki Horde",
              children: [
                {
                  id: "133",
                  label: "Drogo",
                  extra: { route: "drogo" },
                },
                {
                  id: "134",
                  label: "Rakharo",
                  extra: { route: "rakharo" },
                },
              ],
            },
          ],
        },
        {
          id: "135",
          label: "Qarth",
          children: [
            {
              id: "136",
              label: "The Thirteen",
              children: [
                {
                  id: "137",
                  label: "Xaro Xhoan Daxos",
                  extra: { route: "xaro-xhoan-daxos" },
                },
              ],
            },
          ],
        },
        {
          id: "138",
          label: "Braavos",
          children: [
            {
              id: "139",
              label: "Faceless Men",
              children: [
                {
                  id: "140",
                  label: "Jaqen H'ghar",
                  extra: { route: "jaqen-h'ghar" },
                },
              ],
            },
          ],
        },
        {
          id: "141",
          label: "Lys",
          children: [
            {
              id: "142",
              label: "House Rogare",
              children: [
                {
                  id: "143",
                  label: "Larra Rogare",
                  extra: { route: "larra-rogaire" },
                },
              ],
            },
          ],
        },
        {
          id: "145",
          label: "Pentos",
          children: [
            {
              id: "146",
              label: "Council of Magisters",
              children: [
                {
                  id: "147",
                  label: "Illyrio Mopatis",
                  extra: { route: "illyrio-mopatis" },
                },
              ],
            },
          ],
        },
        {
          id: "148",
          label: "Tyrosh",
          children: [
            {
              id: "149",
              label: "Stormcrows",
              children: [
                {
                  id: "150",
                  label: "Daario Naharis",
                  extra: { route: "daario-naharis" },
                },
              ],
            },
          ],
        },
        {
          id: "151",
          label: "Volantis",
          children: [
            {
              id: "152",
              label: "House Vhassar",
              children: [
                {
                  id: "153",
                  label: "Nyessos Vhassar",
                  extra: { route: "nyessos-vhassar" },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export const CHARACTERS: { [key: string]: { description: string; image?: string } } = {
  "3": {
    description: "Warden of the North, head of House Stark, honorable and just.",
    image: "https://thronesapi.com/assets/images/ned-stark.jpg",
  },
  "4": {
    description: "Wife of Eddard Stark, from House Tully, fiercely protective of her family.",
    image: "https://thronesapi.com/assets/images/catelyn-stark.jpg",
  },
  "5": {
    description:
      "Eldest daughter, dreams of being a queen, later grows into a strong political player.",
    image: "https://thronesapi.com/assets/images/sansa-stark.jpeg",
  },
  "6": {
    description: "Young and rebellious, trains as an assassin, determined to avenge her family.",
    image: "https://thronesapi.com/assets/images/arya-stark.jpg",
  },
  "7": {
    description: "Youngest son, becomes the Three-Eyed Raven with mystical abilities.",
    image: "https://thronesapi.com/assets/images/bran-stark.jpg",
  },
  "8": {
    description:
      "Bastard son of Eddard Stark, raised at Winterfell, later becomes a key figure in the war against the Night King.",
    image: "https://thronesapi.com/assets/images/jon-snow.jpg",
  },
  "9": {
    description: "Eldest Stark son, King in the North, leads a rebellion after his father's death.",
    image: "https://thronesapi.com/assets/images/robb-stark.jpg",
  },
  "10": {
    description: "Youngest Stark child, captured and killed during the Battle of the Bastards.",
    image: "https://thronesapi.com/assets/images/rickon.jpg",
  },
  "12": {
    description: "Warden of the North after betraying Robb Stark, known for his cruelty.",
    image: "https://thronesapi.com/assets/images/roose-bolton.jpg",
  },
  "13": {
    description: "Sadistic son of Roose Bolton, infamous for torturing Theon Greyjoy.",
    image: "https://thronesapi.com/assets/images/ramsey-bolton.jpg",
  },
  "15": {
    description: "Lord Commander of the Night's Watch, father to Jorah Mormont.",
    image: "https://thronesapi.com/assets/images/lord-commander-mormont.jpg",
  },
  "16": {
    description: "Exiled knight, loyal to Daenerys Targaryen, falls in love with her.",
    image: "https://thronesapi.com/assets/images/jorah-mormont.jpg",
  },
  "17": {
    description: "Young Lady of Bear Island, fiercely loyal to the Starks, known for her bravery.",
  },
  "20": {
    description: "Lord of Riverrun, father of Catelyn Stark, a respected leader in the Riverlands.",
  },
  "21": {
    description: "Catelyn's younger brother, often seen as ineffective but well-meaning.",
  },
  "22": {
    description: "The Blackfish, a skilled warrior and commander, uncle to Catelyn Stark.",
  },
  "25": {
    description: "Lord of the Twins, orchestrator of the Red Wedding, known for his treachery.",
  },
  "29": {
    description: "Former Hand of the King, his death sparks the events of the series.",
  },
  "30": {
    description: "Widow of Jon Arryn, mother of Robin, unstable and obsessed with her son.",
  },
  "32": {
    description: "Sickly and spoiled Lord of the Eyrie, heavily dependent on his mother.",
  },
  "45": {
    description: "Head of House Lannister, ruthless strategist, Hand of the King.",
    image: "https://thronesapi.com/assets/images/tywin-lannister.jpg",
  },
  "46": {
    description: "Queen, ambitious and fiercely protective of her children, known for her cunning.",
    image: "https://thronesapi.com/assets/images/cersei.jpg",
  },
  "47": {
    description:
      "Twin brother of Cersei, known as the Kingslayer, undergoes a complex redemption arc.",
    image: "https://thronesapi.com/assets/images/jaime-lannister.jpg",
  },
  "48": {
    description:
      "The dwarf brother, sharp-witted and strategic, often underestimated by his family.",
    image: "https://thronesapi.com/assets/images/tyrion-lannister.jpg",
  },
  "60": {
    description: "Lord of Highgarden, jovial but not a particularly skilled strategist.",
  },
  "61": {
    description: "The Queen of Thorns, a sharp-tongued political mastermind.",
    image: "https://thronesapi.com/assets/images/olenna-tyrell.jpg",
  },
  "62": {
    description: "Daughter of Mace, seeks to become Queen of Westeros, manipulative yet charming.",
    image: "https://thronesapi.com/assets/images/margaery-tyrell.jpg",
  },
  "83": {
    description:
      "The Red Viper, known for his charisma and combat skills, seeks revenge for his sister's death.",
    image: "https://thronesapi.com/assets/images/red-viper.jpg",
  },
  "84": {
    description: "Oberyn's paramour, seeks vengeance after his death, mother to the Sand Snakes.",
    image: "https://thronesapi.com/assets/images/ellaria-sand.jpg",
  },
  "86": {
    description: "Ruler of Dorne, patient and deliberate in his pursuit of justice for his family.",
  },
  "99": {
    description:
      "The first king after the Targaryens' fall, known for his strength in battle but disinterested in ruling.",
    image: "https://thronesapi.com/assets/images/robert-baratheon.jpeg",
  },
  "100": {
    description: "Robert's brother, rigid and disciplined, believes he is the rightful king.",
    image: "https://thronesapi.com/assets/images/stannis.jpg",
  },
  "101": {
    description:
      "Youngest Baratheon brother, charismatic and popular, rival claimant to the throne.",
  },
  "116": {
    description: "Lord of the Iron Islands, leads a failed rebellion against the Iron Throne.",
  },
  "117": {
    description:
      "Balon's son, raised as a ward of the Starks, later struggles with loyalty and identity.",
    image: "https://thronesapi.com/assets/images/theon.jpg",
  },
  "118": {
    description: "Theon's sister, a fierce warrior and leader of the Ironborn.",
    image: "https://thronesapi.com/assets/images/yara-greyjoy.jpg",
  },
  "128": {
    description:
      "The last surviving Targaryen, mother of dragons, seeks to reclaim the Iron Throne.",
    image: "https://thronesapi.com/assets/images/daenerys.jpg",
  },
  "129": {
    description:
      "Daenerys's brother, driven by a desire to reclaim the throne, but blinded by ambition.",
    image: "https://thronesapi.com/assets/images/viserys-targaryan.jpg",
  },
  "130": {
    description:
      "A Maester of the Night's Watch, wise and compassionate, reveals his Targaryen lineage later.",
  },
  "133": {
    description:
      "A powerful Dothraki Khal, husband of Daenerys, known for his fearsome reputation in battle.",
    image: "https://thronesapi.com/assets/images/khal-drogo.jpg",
  },
  "140": {
    description: "A Faceless Man, mysterious and skilled in the art of assassination.",
    image: "https://thronesapi.com/assets/images/jaqen-hghar.jpg",
  },
}
