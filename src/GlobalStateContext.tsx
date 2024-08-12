import React, { createContext, useState, useContext, ReactNode } from 'react';

interface GlobalState {
  isSelect: boolean;
}

type GlobalStateContextType = {
  state: GlobalState;
  setState: React.Dispatch<React.SetStateAction<GlobalState>>;
};

const defaultState: GlobalState = {
  isSelect: false,
};

const GlobalStateContext = createContext<GlobalStateContextType>({
  state: defaultState,
  setState: () => {},
});

export const useGlobalState = () => useContext(GlobalStateContext);

type Props = {
  children: ReactNode;
};

export const GlobalStateProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState(defaultState);

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};