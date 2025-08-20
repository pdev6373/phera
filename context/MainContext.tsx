'use client';
import {
  Dispatch,
  useState,
  ReactNode,
  createContext,
  SetStateAction,
} from 'react';

const initialSetFunction = () => {};

type MainProviderType = {
  children: ReactNode;
};

type MainContextType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const MainInitialValues: MainContextType = {
  search: '',
  setSearch: initialSetFunction,
};

export const MainContext = createContext<MainContextType>(MainInitialValues);

export default function MainProvider({ children }: MainProviderType) {
  const [search, setSearch] = useState('');

  return (
    <MainContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
