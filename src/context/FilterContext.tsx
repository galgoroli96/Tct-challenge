import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { FilterContextType } from "../common/helpers/types";

type FilterProviderProps = {
  children: ReactNode;
};

const FilterContext = createContext({} as FilterContextType);
// eslint-disable-next-line react-refresh/only-export-components
export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useLocalStorage("filter", "");

  function updateFilter(value: string) {
    setFilter(value);
  }

  return (
    <FilterContext.Provider
      value={{
        filter,
        updateFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
