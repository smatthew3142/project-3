const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/animalsdb");

const charitySeed = [
  {
    title: "African Wildlife Foundation",
    commonName:["Black Rhino","Cross River Gorilla","Western Lowland Gorilla","African Wild Dog","Bonobo","Chimpanzee","African Elephant","Forest Elephant","Hippopotamus","Savanna Elephant","White Rhino","African Lion","Lion","Leopard","Cheetah","Rhino"]
  },

  {
    title: "Animal Welfare Institute",
    commonName: ["Elephant","African Elephant","Savanna Elephant","Forest Elephant","Sloth","Malayan Tiger","South China Tiger","Sumatran Tiger","Amur Tiger","Bengal Tiger","Indochinese Tiger","Arctic Wolf","Gray Wolf","Mexican Wolf","Red Wolf"]
    
  },

  {
    title: "Snow Leopard Trust",
    commonName: ["Snow Leopard"]
  },

  {
    title: "EcoHealth Alliance",
    commonName: ["Poison Dart Frog","California red-legged frog","Chiricahua leopard frog","Sierra Nevada Yellow-legged Frog","Mountain yellow-legged frog","dusky gopher frog","Oregon spotted frog","Ozark big-eared bat","Virginia big-eared bat","Pacific sheath-tailed Bat","Florida bonneted bat","Hawaiian hoary bat","Mexican long-nosed bat","Lesser long-nosed bat","Northern Long-Eared Bat","Gray bat","Indiana bat","Little Mariana fruit Bat","Mariana fruit Bat"]
  },

  {
    title:"The Marine Mammal Center",
    commonName:["Seals","Guadalupe fur seal","bearded Seal","Hawaiian monk seal","Ringed Seal","Spotted Seal","Ringed seal","Ringed Seal","Southern sea otter","Northern Sea Otter","Common Bottlenose Dolphin"]
  },

  {
    title: "Ruffed Grouse Society",
    commonName: ["Greater Sage-Grouse","Gunnison sage-grouse","Ruffed Grouse"]
  },

  {
    title: "The Jane Goodall Institute",
    commonName:["Chimpanzee"]
  },

  {
    title:"Pollinator Partnership",
    commonName:["Ozark big-eared bat","Virginia big-eared bat","Pacific sheath-tailed Bat","Florida bonneted bat","Hawaiian hoary bat","Mexican long-nosed bat","Lesser long-nosed bat","Northern Long-Eared Bat","Gray bat","Indiana bat","Little Mariana fruit Bat","Mariana fruit Bat","Monarch Butterfly","Honeybee"]

  },

  {
    title:"WildAid",
    commonName:["African Lion","Lion","Sumatran Elephant","Asian Elephant","Borneo Pygmy Elephant","Sri Lankan Elephant","African Elephant","Forest Elephant","Savanna Elephant","Elephant","Sumatran Elephant","Black Rhino","Javan Rhino","Sumatran Rhino","White Rhino","Rhino","Greater One-Horned Rhino","Malayan Tiger","South China Tiger","Sumatran Tiger","Amur Tiger","Bengal Tiger","Indochinese Tiger","Tiger","Pangolin","Shark","Whale Shark","Scalloped Hammerhead Shark","Great White Shark","Vaquita","Reef Manta Ray","Giant Manta Ray"]
  },

  {
    title:"Turtle Island Restoration Network",
    commonName: ["Hawksbill Turtle","Green Turtle","Loggerhead Turtle","Leatherback Turtle","Sea Turtle","Olive Ridley Turtle","Kemp's ridley sea turtle","Shark","Whale Shark","Scalloped Hammerhead Shark","Great White Shark"]
  },

  {
    title:"Bat Conservation International",
    commonName: ["Ozark big-eared bat","Virginia big-eared bat","Pacific sheath-tailed Bat","Florida bonneted bat","Hawaiian hoary bat","Mexican long-nosed bat","Lesser long-nosed bat","Northern Long-Eared Bat","Gray bat","Indiana bat","Little Mariana fruit Bat","Mariana fruit Bat"]
  },

  {
    title: "American Bird Conservancy",
    commonName: ["Cape Sable seaside sparrow","Florida grasshopper sparrow","San Clemente sage sparrow","White-necked crow","Hawaiian Crow","Puerto Rican sharp-shinned hawk","Hawaiian Hawk","Puerto Rican broad-winged hawk","Northern Aplomado Falcon","Mexican spotted owl","Northern spotted owl","Kauai akialoa (honeycreeper)","Palila","Po`ouli","Molokai creeper","Hawaii creeper","crested honeycreeper","Oahu creeper","`O`u","Nihoa finch","Laysan finch","Attwater's greater prairie-chicken","California condor","California condor","Mississippi sandhill crane","Whooping crane","Guam kingfisher","Nihoa millerbird","Yellow-shouldered blackbird","Florida scrub-jay"]
  },

  {
    title: "Wildlife Conservation Society",
    commonName:["Flamingo","Gibbon","Moose","Black Bear","Caribou","Scarlet Macaw:","Jaguar","Cheetah","African Lion","Lion","Sumatran Elephant","Asian Elephant","Borneo Pygmy Elephant","Sri Lankan Elephant","African Elephant","Forest Elephant","Savanna Elephant","Elephant","Plains Bison","Wood Bison","Bonobo","Chimpanzee","Ganges River Dolphin","Hector's Dolphin","Indus River Dolphin","Irrawaddy Dolphin","Amazon River Dolphin","Common Bottlenose Dolphin","California condor","Sea Turtle","Giant River Turtle","Bornean Orangutan","Orangutan","Sumatran Orangutan","Great White Shark","Scalloped Hammerhead Shark","Shark","Snow Leopard","Malayan Tiger","South China Tiger","Sumatran Tiger","Amur Tiger","Bengal Tiger","Indochinese Tiger","Tiger","Snow Leopard"]
  },

  {
    title:"PAWS",
    commonName:["Canada Lynx","Puma","Jaguar","Gray wolf","Mexican wolf","Red wolf","Swift Fox","Santa Catalina Island Fox","San Joaquin kit fox","Brown Bear","Grizzly bear","Columbian white-tailed deer","Key deer","Plains Bison","Wood Bison","Columbia Basin Pygmy Rabbit","Lower Keys marsh rabbit","Riparian brush rabbit","Tenino pocket gopher","Olympia pocket gopher","Yelm pocket gopher","Roy Prairie pocket gopher","Utah prairie dog",]
  },

  {
    title:"Wildlife Alliance",
    commonName:["Malayan Tiger","South China Tiger","Sumatran Tiger","Amur Tiger","Bengal Tiger","Indochinese Tiger","Amur Leopard","Javan Rhino","Sumatran Rhino","Greater One-Horned Rhino","Sumatran Elephant","Asian Elephant","Borneo Pygmy Elephant","Sri Lankan Elephant","Sumatran Elephant","Bornean Orangutan","Orangutan","Sumatran Orangutan"]
  },

  {
    title: "World Animal Protection",
    commonName: ["Sumatran Elephant","Asian Elephant","Borneo Pygmy Elephant","Sri Lankan Elephant","African Elephant","Forest Elephant","Savanna Elephant","Elephant","Polar Bear","Brown Bear","Grizzly bear","Sea Turtle","Common Bottlenose Dolphin"]

  }
  
];

db.Charity
  .remove({})
  .then(() => db.Charity.collection.insertMany(charitySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

