export const getPodcastIds = () => {
  const likedPodcastIds = localStorage.getItem("liked_podcasts")
    ? JSON.parse(localStorage.getItem("liked_podcasts"))
    : [];

  return likedPodcastIds;
};

export const savePodcastIds = (podcastIdArr) => {
  if (podcastIdArr.length) {
    localStorage.setItem("liked_podcasts", JSON.stringify(podcastIdArr));
  } else {
    localStorage.removeItem("liked_podcasts");
  }
};
