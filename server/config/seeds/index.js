const db = require("../connection");
const { User, Podcast, Episode } = require("../../models");
const userData = require("./userSeeds.json");
const podcastData = require("./podcastSeeds.json");
const episodeData = require("./episodeSeeds.json");

db.once("open", async () => {
  await Podcast.deleteMany();
  await Episode.deleteMany();
  await User.deleteMany();

  const podcasts = await Podcast.insertMany(podcastData);

  console.log("podcasts seeded");

  const users = await User.create(userData);

  console.log("users seeded");

  const episodes = await Episode.insertMany(episodeData);
  console.log("episodes seeded");
  // randomly add a podcast to each user
  for (user of users) {
    const tempPodcast = podcasts[Math.floor(Math.random() * podcasts.length)];
    user.addedPodcast = tempPodcast._id;
    await user.save();
  }
  // randomly add  episodes to each podcast
  for (newEpisode of episodes) {
    const tempPodcast = podcasts[Math.floor(Math.random() * podcasts.length)];
    tempPodcast.episodes.push(newEpisode._id);
    await tempPodcast.save();
  }

  process.exit();
});
