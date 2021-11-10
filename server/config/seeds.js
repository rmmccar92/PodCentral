const db = require("./connection");
const { User, Podcast, Episode } = require("../models");

db.once("open", async () => {
  await Podcast.deleteMany();

  const products = await Podcast.insertMany([
    {
      title: "Criminal",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "podcast-image-criminal.png",
      likes: 3,
    },
    {
      title: "Dark House",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "podcast-image-dark-house.jpeg",
      likes: 37,
    },
    {
      title: "Fat Mascara",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      image: "podcast-image-fat-mascara.jpg",
      likes: 0,
    },
  ]);

  console.log("podcasts seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  await Episode.deleteMany();

  await Episode.insertMany([
    {
      title: "Episode 1",
      description: "Episode 1 description",
      audio: "episode-1.mp3",
      duration: 60,
      season: 1,
      episode: 1,
    },
    {
      title: "Episode 2",
      description: "Episode 2 description",
      audio: "episode-2.mp3",
      duration: 60,
      season: 1,
      episode: 2,
    },
    {
      title: "Spooky",
      description: "Spooky description",
      audio: "spooky.mp3",
      duration: 60,
      season: 1,
      episode: 12,
    },
    {
      title: "Episode Episode",
      description: "Episode Episode description",
      audio: "episode-episode.mp3",
      duration: 60,
      season: 1,
      episode: 4,
    },
    {
      title: "Horse",
      description: "Horse description",
      audio: "horse.mp3",
      duration: 60,
      season: 5,
      episode: 11,
    },
  ]);

  console.log("episodes seeded");

  process.exit();
});
