import React, { createContext, useContext } from "react";
// import { usePodCentralReducer } from "./reducers";

const PodCentralContext = createContext();
// const { Provider } = PodCentralContext;

const PodCentralProvider = (props) => {
  // const [state, dispatch] = usePodCentralReducer({});

  return <PodCentralContext.Provider value={{}} {...props} />;
};

const usePodCentralContext = () => {
  return useContext(PodCentralContext);
};

export { PodCentralProvider, usePodCentralContext };
