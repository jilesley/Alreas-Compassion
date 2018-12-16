const locations = [
  {
    name: "Albion",
    curLocation: false,
    content: `<p>Subartic island climate (similar to Iceland). Suffers particularly harsh winters, and has had to be resettled by the Kingdom of Almaund twice.</p>`
  },
  {
    name: "Alton",
    curLocation: false,
    content: `<p>Beach town, popular with the nobles of The Great Bay, as it is the warm port in winter. Semi-arid climate.</p>`
  },
  {
    name: "Ansachz",
    curLocation: false,
    content: `<p>Large trade town on the Elmaund coast. Similar architecture to Inphis. Cool, temperate climate.</p>`
  },
  {
    name: "Antarbott",
    curLocation: false,
    content: `<p>Home to the most southern Node. A medium sized town, surrounded by large stone walls and one of the densest forests in the world.</p>`
  },
  {
    name: "Arris",
    curLocation: false,
    content: `<p>Sat atop a rocky outcrop on the edge of the Great Bay, it is known for producing the toughest sailors in the land at the Marine’s Guild. Some say that sailors from the guild are even capable of sailing in winter.</p>`
  },
  {
    name: "Barris",
    curLocation: false,
    content: `<p>Competes with Emery annually for the largest fishing haul every Autumn, the winning town earning the Golden Net to display for the next year. Average sized town.</p>`
  },
  {
    name: "Bjer",
    curLocation: false,
    content: `<p>A small village surrounded by a small palisade, but notable for being the only town to survive in the Shadewoods and has its own Node for this reason.</p>`
  },
  {
    name: "Bram",
    curLocation: false,
    content: `<p>Medium sized trade city, often living in the shadow of Marisberg but profits healthily from being one of the few locations in the world capable of growing sugar beet. Tropical climate</p>`
  },
  {
    name: "Brandig",
    curLocation: false,
    content: `<p>Settled on the edge between tundra and temperate forests, Brandig is near the coast but not on the coast due to the frequent erosion of the cliff face. Due to said erosion, the nearby walled port has had to be reconstructed several times.</p>`
  },
  {
    name: "Bucliff",
    curLocation: false,
    content: `<p>A small coastal fishing village, but has seen increased trade since The Inphisian Princess started to run between Mondalton and Bucliff when most other ships dock for the winter.</p>`
  },
  {
    name: "Certano",
    curLocation: false,
    content: `<p>Another of the large trade towns on the Elmaund coast. Similar architecture to Inphis. Cool, temperate climate.</p>`
  },
  {
    name: "Colvilla",
    curLocation: false,
    content: `<p class="heading">LARGER DESCRIPTION, WILL UPDATE</p>`
  },
  {
    name: "Emery",
    curLocation: false,
    content: `<p>Competes with Bariss annually for the largest fishing haul every Autumn, the winning town earning the Golden Net to display for the next year. Average sized town.</p>`
  },
  {
    name: "Ferolyn",
    curLocation: false,
    content: `<p>Small desert island, home to the largest gold mine & mining town in the world. Shares its name with the town, though the town is sometimes incorrectly referred to as “Ferolyn mine”</p>`
  },
  {
    name: "Haybetree",
    curLocation: false,
    content: `<p>The “tree” in Haybetree refers to the colossal oak tree in the centre of the walled town which somehow co-existing with the mortal creations around it. A fairly small town with an unusually high number of magically inclined folk.</p>`
  },
  {
    name: "Hennig",
    curLocation: false,
    content: `<p>Similar climate to Albion, but slightly more stable in winter along with Kepri, with whom it shares the joint profits of a recently unveiled marble quarry.</p>`
  },
  {
    name: "Hitchem",
    curLocation: true,
    content: `<p>More commonly known as The Pilgrim Port, Hitchen is the first stop for any Paladin, Priest, Cleric or other worshipper looking to visit the various temples in the Dusties. The locals are accordingly quite religious, but Hitchen still otherwise operates like any other town, save for having walls uniquely made of Sandstone.</p>`
  },
  {
    name: "Hotsapech",
    curLocation: false,
    content: `<p class="heading">LARGER DESCRIPTION, WILL UPDATE</p>`
  },
  {
    name: "Imnett",
    curLocation: false,
    content: `<p>Immett is actually a large tribe of Lizardfolk, who trade with but never trust those from the other islands. Their tribe is artificially kept at a population level at which the jungle won’t swallow it up by sending young, promising Lizardfolk to mainland to seek knowledge, power and skills to bring back to the tribe.</p>`
  },
  {
    name: "Inphis",
    curLocation: false,
    content: `<p class="heading">LARGER DESCRIPTION, WILL UPDATE</p>`
  },
  {
    name: "Ironbrill",
    curLocation: false,
    content: `<p>Built on the start of the slopes leading to the Glasspeaks, Ironbrill houses a large iron mine but also a sizeable contingent of salmon fishers.</p>`
  },
  {
    name: "Jensport",
    curLocation: false,
    content: `<p>Jensport serves as a backup walled dock for Hotsapech for during harsher Autumns and Springs. Normally not inhabited, only staffed by Hotaspech militia when needed.</p>`
  },
  {
    name: "Kepri",
    curLocation: false,
    content: `<p>Similar climate to Albion, but slightly more stable in winter along with Hennig, with whom it shares the joint profits of a recently unveiled marble quarry.</p>`
  },
  {
    name: "Lourose",
    curLocation: false,
    content: `<p>Sitting on the edge of The Verdant makes Lourose home to many druids of many circles. It is not actually a town, but the name of the collection of Standing Stones by the coast where said druids often gather. There is a jetty here used by fishermen from Kepri and Hennig who wish to fish freshwater.</p>`
  },
  {
    name: "Marisberg",
    curLocation: false,
    content: `<p>A coastal city of two halves. During the day, the various businessmen and tradesmen operate surface-side. During the night, the city retires beneath the earth into the Subterranea – a policy of the local militia so that they might keep the entire city within the protective walls without sacrificing economically useful space in favour of living quarters.</p>
    <p>The residents are a mixed bunch economically - the city sees vast trade in the summer months surpassed only by Enphis, but the benefit of this is only really seen by the middle & upper classes – the poor are just as destitute, if not more so, than the poor of other towns. During the winter months when trade dwindles, it is not uncommon for the poorest to truly struggle for food.</p>`
  },
  {
    name: "Middock",
    curLocation: false,
    content: `<p>The most recent town to join the Kingdom, it is the only real settlement within The Dusties except for Red Hill. Fairly small, but sees many visitors from Haybetree and Brandig looking to get to the nearest node.</p>`
  },
  {
    name: "Mondalton",
    curLocation: false,
    content: `<p>A fairly popular walled dock, used by some merchant who would risk the land route to Marisberg instead of paying the higher dock fees at Marisberg. Home only to a large inn and the dock.</p>`
  },
  {
    name: "Montenay",
    curLocation: false,
    content: `<p class="heading">LARGER DESCRIPTION, WILL UPDATE</p>`
  },
  {
    name: "Nash",
    curLocation: false,
    content: `<p>Home to the only permanent settlement of Tabaxi. Though there is no static population save for Buried-in-Sand (Berry to friends), the small village is known to all Tabaxi as the place to go if you need safety from something. Supposedly Buried-in-Sand founded Nash over a hundred years ago, but given her youthful appearance this is unlikely.</p>`
  },
  {
    name: "Newton",
    curLocation: false,
    content: `<p>The name used by other races to refer to the colossal underground city of the Drow. Though they have a surface-side dock, it is only visited by morally questionable types looking to sell slaves to the Drow.</p>`
  },
  {
    name: "Noss",
    curLocation: false,
    content: `<p>Only home of Nossgrass, a herb used in the finest cooking across the land. The island is small, and does not willingly accept visitors so as to jealously guard the secrets of farming Nossgrass</p>`
  },
  {
    name: "Parnassium",
    curLocation: false,
    content: `<p>No info yet</p>`
  },
  {
    name: "Red Hill",
    curLocation: false,
    content: `<p class="heading">LARGER DESCRIPTION, WILL UPDATE</p>`
  },
  {
    name: "Rochi",
    curLocation: false,
    content: `<p>Another of the large trade towns on the Elmaund coast. Similar architecture to Inphis. Cool, temperate climate.</p>`
  },
  {
    name: "Rodenny",
    curLocation: false,
    content: `<p>Name of the settlement atop the entrance to what is believed to be a long-dead, structurally damaged Dwarven kingdom. Rodenny is a popular spot for treasure hunters, and adventurers have crossed the world to delve through the ruins.</p>`
  },
  {
    name: "Scappon",
    curLocation: false,
    content: `<p>Scappon is the only island in the world to be entirely walled in. The inside of the walls is barren and protected from the World-gods, and is used to store emergency resources for the Empire as well as hundreds of empty homes, created to house any potentially evacuated city should there be any disasters within the empire.</p>`
  },
  {
    name: "Socanta",
    curLocation: false,
    content: `<p>Like Ironbrill, Socanta is a small town surrounded by many rice terraces, being the world’s primary source of rice. It has magnificent views of the Glasspeaks, and marks the start of the more difficult section of the journey from Inphis to Montenay.</p>`
  },
  {
    name: "Southgate",
    curLocation: false,
    content: `<p>A cultural phenomenon, Southgate is the name of the gigantic Siegeball stadium that the Marisberg Manglers, Hotsapech Hoplites, Colvilla Crashers and Inphisian Instigators all gather at every summer. The Hoplites remain defending champions after their second consecutive win in the summer just passed. Named after the late Garvus Southgate, considered the greatest Siegeball manager after he led the Instigators to victory after over 50 years of failing to win.</p>`
  },
  {
    name: "Tiffis",
    curLocation: false,
    content: `<p>Essentially a hive of filth and corruption. There are not many long-term visitors to Tithis, which is controlled by a gang of pirates led by the mysterious and proud “Admiral”. The Marine’s guild has lately taken efforts to curb the influence of The Admiral and his pirates, but the continued raids and growth of their respective fleets could soon make the Great Bay a much more dangerous place.</p>`
  },
  {
    name: "Tollina",
    curLocation: false,
    content: `<p>Another of the large trade towns on the Elmaund coast. Similar architecture to Inphis. Cool, temperate climate.</p>`
  },
  {
    name: "Vendri",
    curLocation: false,
    content: `<p>Another of the large trade towns on the Elmaund coast. Similar architecture to Inphis. Cool, temperate climate.</p>`
  },
  {
    name: "Wentz",
    curLocation: false,
    content: `<p>Just north of the Shadewoods and south of The Verdant, Wentz is considered by many to be perpetually 1 misstep away from disaster. Despite this, it continues to thrive as one of the many fishing towns on this coastline.</p>`
  },
  {
    name: "White March",
    curLocation: false,
    content: `<p>Notably, white march is not actually white and is instead a town of dark stone and wood with rocky tundra around it. However, when it was formed, White March was in the middle of a giant salt pan, which has since been all used up. It does, however, remain an established trading town.</p>`
  },
  {
    name: "Yarros",
    curLocation: false,
    content: `<p>Yaros (Often misspelled Yarros) is a sleepy little town that produces some of the finest wine in the land. The vineyards surround the town walls, stretching significantly inland.</p>`
  }
]
