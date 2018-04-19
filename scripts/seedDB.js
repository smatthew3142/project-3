const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/animalsdb");

const charitySeed = [
  {
    title: "African Wildlife Foundation",
    commonName:["Black Rhino","Cross River Gorilla","Western Lowland Gorilla","African Wild Dog","Bonobo","Chimpanzee","African Elephant","Forest Elephant","Hippopotamus","Savanna Elephant","White Rhino","African Lion","Lion","Leopard","Cheetah","Rhino"],
    imageLink: "https://www.awf.org/sites/all/themes/awf/img/newlogo_brown_web.png",
    link: "https://www.awf.org/"
  },
  {
    title: "Animal Welfare Institute",
    commonName: ["Elephant","African Elephant","Savanna Elephant","Forest Elephant","Sloth","Malayan Tiger","South China Tiger","Sumatran Tiger","Amur Tiger","Bengal Tiger","Indochinese Tiger","Arctic Wolf","Gray Wolf","Mexican Wolf","Red Wolf"],
    imageLink:"https://awionline.org/themes/awi/logo.svg",
    link: "https://awionline.org/" 
    
  },
  {
    title: "Snow Leopard Trust",
    commonName: ["Snow Leopard"],
    imageLink: "https://hc8fm03jtw-flywheel.netdna-ssl.com/wp-content/uploads/2016/06/cropped-Web-Logo2016-270x270.png",
    link: "https://www.snowleopard.org/"
  },
  {
    title: "EcoHealth Alliance",
    commonName: ["Poison Dart Frog","California red-legged frog","Chiricahua leopard frog","Sierra Nevada Yellow-legged Frog","Mountain yellow-legged frog","dusky gopher frog","Oregon spotted frog","Ozark big-eared bat","Virginia big-eared bat","Pacific sheath-tailed Bat","Florida bonneted bat","Hawaiian hoary bat","Mexican long-nosed bat","Lesser long-nosed bat","Northern Long-Eared Bat","Gray bat","Indiana bat","Little Mariana fruit Bat","Mariana fruit Bat"],
    imageLink: "https://www.ecohealthalliance.org/",
    link: "https://www.ecohealthalliance.org/"
  },

  {
    title:"The Marine Mammal Center",
    commonName:["Seals","Guadalupe fur seal","bearded Seal","Hawaiian monk seal","Ringed Seal","Spotted Seal","Ringed seal","Ringed Seal","Southern sea otter","Northern Sea Otter","Common Bottlenose Dolphin"],
    imageLink: "http://www.marinemammalcenter.org/assets/images/logo.png",
    link: "http://www.marinemammalcenter.org/"
  },
  {
    title: "Ruffed Grouse Society",
    commonName: ["Greater Sage-Grouse","Gunnison sage-grouse","Ruffed Grouse"],
    imageLink: "http://www.ruffedgrousesociety.org/2014rgsbase/images/Header_logo.png",
    link: "http://www.ruffedgrousesociety.org/"
  },
  {
    title: "The Jane Goodall Institute",
    commonName:["Chimpanzee"],
    imageLink: "http://www.janegoodall.org/",
    link: "http://www.janegoodall.org/"
  },
  {
    title:"Pollinator Partnership",
    commonName:["Ozark big-eared bat","Virginia big-eared bat","Pacific sheath-tailed Bat","Florida bonneted bat","Hawaiian hoary bat","Mexican long-nosed bat","Lesser long-nosed bat","Northern Long-Eared Bat","Gray bat","Indiana bat","Little Mariana fruit Bat","Mariana fruit Bat","Monarch Butterfly","Honeybee"],
    imageLink: "http://pollinator.org/assets/generalImages/MPGC-Logo-4c_170625_143426.jpg",
    link: "http://pollinator.org/"
  },
  {
    title:"WildAid",
    commonName:["African Lion","Lion","Sumatran Elephant","Asian Elephant","Borneo Pygmy Elephant","Sri Lankan Elephant","African Elephant","Forest Elephant","Savanna Elephant","Elephant","Sumatran Elephant","Black Rhino","Javan Rhino","Sumatran Rhino","White Rhino","Rhino","Greater One-Horned Rhino","Malayan Tiger","South China Tiger","Sumatran Tiger","Amur Tiger","Bengal Tiger","Indochinese Tiger","Tiger","Pangolin","Shark","Whale Shark","Scalloped Hammerhead Shark","Great White Shark","Vaquita","Reef Manta Ray","Giant Manta Ray"],
    imageLink: "https://wildaid.org/wp-content/themes/wildaidtheme/svgs/wildaid-logo-white.svg",
    link: "https://wildaid.org/"
  },
  {
    title:"Turtle Island Restoration Network",
    commonName: ["Hawksbill Turtle","Green Turtle","Loggerhead Turtle","Leatherback Turtle","Sea Turtle","Olive Ridley Turtle","Kemp's ridley sea turtle","Shark","Whale Shark","Scalloped Hammerhead Shark","Great White Shark"],
    imageLink:"https://seaturtles.org/wp-content/themes/tirn/images/logo.png",
    link: "https://seaturtles.org/"
  },
  {
    title:"Bat Conservation International",
    commonName: ["Ozark big-eared bat","Virginia big-eared bat","Pacific sheath-tailed Bat","Florida bonneted bat","Hawaiian hoary bat","Mexican long-nosed bat","Lesser long-nosed bat","Northern Long-Eared Bat","Gray bat","Indiana bat","Little Mariana fruit Bat","Mariana fruit Bat"],
    imageLink:"http://www.batcon.org/images/logo-big.png",
    link: "http://www.batcon.org/"
  },
  {
    title: "American Bird Conservancy",
    commonName: ["Cape Sable seaside sparrow","Florida grasshopper sparrow","San Clemente sage sparrow","White-necked crow","Hawaiian Crow","Puerto Rican sharp-shinned hawk","Hawaiian Hawk","Puerto Rican broad-winged hawk","Northern Aplomado Falcon","Mexican spotted owl","Northern spotted owl","Kauai akialoa (honeycreeper)","Palila","Po`ouli","Molokai creeper","Hawaii creeper","crested honeycreeper","Oahu creeper","`O`u","Nihoa finch","Laysan finch","Attwater's greater prairie-chicken","California condor","California condor","Mississippi sandhill crane","Whooping crane","Guam kingfisher","Nihoa millerbird","Yellow-shouldered blackbird","Florida scrub-jay"],
    imageLink: "https://abcbirds.org/wp-content/themes/American-Bird-Conservancy/assets/img/logo.png",
    link: "https://abcbirds.org/"
  },
  {
    title: "Wildlife Conservation Society",
    commonName:["Flamingo","Gibbon","Moose","Black Bear","Caribou","Scarlet Macaw:","Jaguar","Cheetah","African Lion","Lion","Sumatran Elephant","Asian Elephant","Borneo Pygmy Elephant","Sri Lankan Elephant","African Elephant","Forest Elephant","Savanna Elephant","Elephant","Plains Bison","Wood Bison","Bonobo","Chimpanzee","Ganges River Dolphin","Hector's Dolphin","Indus River Dolphin","Irrawaddy Dolphin","Amazon River Dolphin","Common Bottlenose Dolphin","California condor","Sea Turtle","Giant River Turtle","Bornean Orangutan","Orangutan","Sumatran Orangutan","Great White Shark","Scalloped Hammerhead Shark","Shark","Snow Leopard","Malayan Tiger","South China Tiger","Sumatran Tiger","Amur Tiger","Bengal Tiger","Indochinese Tiger","Tiger","Snow Leopard"],
    imageLink:"https://www.wcs.org/assets/wcsorg/logos/green-blue-bright-1d2d4911480bc53cd651f527ab1e79d2.svg",
    link: "https://www.wcs.org/"
  },
  {
    title:"PAWS",
    commonName:["Canada Lynx","Puma","Jaguar","Gray wolf","Mexican wolf","Red wolf","Swift Fox","Santa Catalina Island Fox","San Joaquin kit fox","Brown Bear","Grizzly bear","Columbian white-tailed deer","Key deer","Plains Bison","Wood Bison","Columbia Basin Pygmy Rabbit","Lower Keys marsh rabbit","Riparian brush rabbit","Tenino pocket gopher","Olympia pocket gopher","Yelm pocket gopher","Roy Prairie pocket gopher","Utah prairie dog"],
    link: "https://www.paws.org/"
  },
  {
    title:"Wildlife Alliance",
    commonName:["Malayan Tiger","South China Tiger","Sumatran Tiger","Amur Tiger","Bengal Tiger","Indochinese Tiger","Amur Leopard","Javan Rhino","Sumatran Rhino","Greater One-Horned Rhino","Sumatran Elephant","Asian Elephant","Borneo Pygmy Elephant","Sri Lankan Elephant","Sumatran Elephant","Bornean Orangutan","Orangutan","Sumatran Orangutan"],
    imageLink:"https://www.wildlifealliance.org/wp-content/uploads/2018/03/Wildlife-Alliance-Mobile.png",
    link: "https://www.wildlifealliance.org/"
  },
  {
    title: "World Animal Protection",
    commonName: ["Sumatran Elephant","Asian Elephant","Borneo Pygmy Elephant","Sri Lankan Elephant","African Elephant","Forest Elephant","Savanna Elephant","Elephant","Polar Bear","Brown Bear","Grizzly bear","Sea Turtle","Common Bottlenose Dolphin"],
    imageLink:"https://d31j74p4lpxrfp.cloudfront.net/sites/all/themes/wspa_zen_master/images/svg/wspa-logo.svg",
    link: "https://www.worldanimalprotection.us.org/"
  }
  
];

db.Charity
  .remove({})
  .then(() => db.Charity.collection.insertMany(charitySeed))
  .then(data => {
    console.log("Data to the Charity Collection Have Been Inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

