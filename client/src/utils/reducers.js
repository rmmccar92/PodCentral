import { useReducer } from "react";
import { ADD_PODCAST, ADD_EPISODE } from "./actions";

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PODCAST:
      const newPodcast = { ...action.payload };
      return {
        ...state,
        podcasts: [...state.podcasts, newPodcast],
      };

    case ADD_EPISODE:
      const newEpisode = { ...action.payload };
      return {
        ...state,
        episodes: [...state.episodes, newEpisode],
      };
    default:
      return state;
  }
};

export function usePodCentralReducer(initialState) {
  return useReducer(reducer, initialState);
}
