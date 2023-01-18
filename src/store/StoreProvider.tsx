import { WatchContext } from "@contexts";
import React, { PropsWithChildren, ReactNode, useReducer } from "react";
import { InitialState } from "./InitialState";
import { RootReducer } from "./RootReducer";

export const StoreProvider: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  const [state, dispatch] = useReducer(RootReducer, InitialState);

  return (
    <WatchContext.Provider value={{
      state: {
        ...state
      },
      dispatch
    }}>
      {children}
    </WatchContext.Provider>
  );
};