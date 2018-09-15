const characters = {
  player: [
    {
      name: "Artiti Baumk",
      player: "Goss",
      race: "Human",
      class: "Ranger",
      level: 3,
      kills: 11,
      img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/17/415/60/60/636377885173419481.jpeg",
      content: `<h2>Content to be added</h2>`
    },
    {
      name: "Belrim Bennar",
      player: "Luke",
      race: "Dwarf",
      class: "Bard",
      level: 3,
      kills: 0,
      img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/10/71/60/60/636339380148524382.png",
      content: `<h2>Content to be added</h2>`
    },
    {
      name: "Hieronymus Botch",
      player: "Alex",
      race: "Human",
      class: "Monk",
      level: 3,
      kills: 10,
      img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/17/424/60/60/636377886749285983.jpeg",
      content: `<h2>Content to be added</h2>`
    },
    {
      name: "Oriande Mallorn",
      player: "Phoebe",
      race: "Human",
      class: "Cleric",
      level: 3,
      kills: 2,
      img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/4352/195/60/81/636698777743138344.jpeg",
      content: `<h2>Content to be added</h2>`
    },
    {
      name: "Orthon Anatole",
      player: "James",
      race: "Dragonborn",
      class: "Paladin",
      level: 3,
      kills: 1,
      img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/17/407/60/60/636377883694580108.jpeg",
      content: `<p>A black, horned dragonborn who stands at 6 feet tall. He has emerald green eyes that peek out from his dark scaled head. He wears well maintained silver chain mail armour, which has gold highlights and the holy symbol of <span class='bold '>Uxen</span> in the center. He also wields a shield with the same holy symbol embraised onto it, as well as a simple mace in his right hand.</p>
      <p>He will often try to avoid violence whenever he can, but understands that it is at times the only way for though who are too far gone down the path of evil.</p>
      <p>Those who have spent some time with him will know the deep respect he has for the priest whom he trained under - <span class='bold '>Niccolò</span>.</p>`
    },
    {
      name: "Shay Coulltree",
      player: "Rachel",
      race: "Gnome",
      class: "Rogue",
      level: 3,
      kills: 4,
      img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/22/60/60/636378979102191003.jpeg",
      content: `<h2>Content to be added</h2>`
    },
    {
      name: "Tieron Malathrar",
      player: "Nick",
      race: "Half-Elf",
      class: "Sorcerer",
      level: 3,
      kills: 9,
      img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/17/932/60/60/636378855806248172.png",
      content: `<h2>Content to be added</h2>`
    },
    {
      name: "Varic",
      player: "Zac",
      race: "Goliath",
      class: "Blood Hunter",
      level: 3,
      kills: 9,
      img: "https://media-waterdeep.cursecdn.com/avatars/thumbnails/17/452/60/60/636377890039744108.jpeg",
      content: `<p>Towering grey skinned Goliath. Both face and hair are clean shaved. A strong furrowed brow shades eyes of deep crimson colouration. His powerful build and skin tone give him the impression of the mountains that he calls home. Something about the way he holds himself betrays a concealed animosity straining to be let free. Across his whole torso and head tribal tattoos of what look like stylized blue flames cover large portions of his skin. If you stare at them for long enough they almost look like they are swirling and dancing across his skin.</p>
      <p>Varic currently wields a glaive of a fairly ornate design. The shaft is ebony and slightly gilded with a pattern that runs up to and along the slightly curved blade. The weapon is in a stark contrast to his general appearance which is far more rugged.</p>
      <p>Varic wears a thick hide armour finished with the pelt of a great white bear native to the glass peaks which he wears draped around his shoulders.</p>
      <p>Whilst awaiting passage on the ship from Mondalton Varic mentioned the hunt for the bear that he wears over drinks. During his story he mentioned that he used to hunt with his brother but as of yet he has not mentioned his brothers name. Varic seems to look upon his past life favourably and during the story, although his telling was jovial, there was a hint of sadness in his voice.</p>
      <p>Varic also mentioned his clan name upon meeting Shay, Thumkallah. Those of you who know anything about the customs of the Goliaths (if you know of them at all as they are a rare and often forgotten people to those who do not live near the Glass Peaks) you know that Goliaths operate in Clans that are nomadic in nature. Every goliath has three names: a birth name assigned by the newborn’s mother and father, a nickname assigned by the tribal chief, and a family or clan name. As of yet Varic has not revealed what his nickname was/is.</p>
      <p>Varic has a good relationship with Gidor Firestout, the dwarvern innkeep at the large tavern complex in Marisberg. Upon leaving Marisberg Varic gave the dwarf 20gp in exchange with the kindness Gidor had shown him during his 4 weeks in Marisberg.</p>`
    }
  ],
  npc: [
    {
      name: "Corollas",
      race: "Human",
      profession: "Museum Owner",
      content: `<p>He is the proud owner of the local quirky museum in Marisberg. As the museum doesn't get many donations, he got involved with some less favourable people to try and get by.</p>
      <p>The man who originally sent us on the quest for the black glass square. He has also suggested that we try going to the Shadewoods after hearing our tale from the recovery of the black glass square.</p>`
    },
    {
      name: "Nellis",
      race: "Unknown",
      profession: "Shady Dude extradonaire",
      content: `<p>Runs the crime dens and other ilegal ventures in Marisberg. The party has yet to meet him.</p>`
    },
    {
      name: "Perin",
      race: "Dwarf",
      profession: "High class Hiesterer",
      content: `<p>A dwarf who we believe stole Corollas' black glass, but was killed by Artiti before we could talk to him. He was both well spoken and dressed, and seemed to rely mostly on the men he hired from Nelis for his dirty work.</p>`
    },
    {
      name: "Egridian",
      race: "Human",
      profession: "Magical boat man",
      content: `<p>A man who took us from Mondalton to Bucliff on a magical paddle boat powered by magic. When he was running said boat, his eyes rolled back into his head and he seemed to go blind. Pretty nice chap overall.</p>`
    },
    {
      name: "Aggy",
      race: "Dwarf",
      profession: "Magical boat man's friend/Bartender",
      content: `<p>The Bartender at Mondalton. A good friend of Egridian and a very cheery dwarf who we shared a few drinks and stories with.</p>`
    },
    {
      name: "Belmont",
      race: "Skeleton Man Construct?",
      profession: "Butler/Cleaner for the spooky manour",
      content: `<p>A skeleton construct that we found underneath our mansion who claimed that he serves whoever owned the dead to the mansion, which we currently held.</p>
      <p>He was extremely insistent on us getting a deed sent off to confirm a guild that we seem to now be creating.</p>
      <p>He has an incredible ability to clean, managing to clean the manour rooms in just a couple hours. (Possibly has a link to a linen dimension)</p>`
    }
  ]
};
