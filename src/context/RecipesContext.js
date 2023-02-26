import { createContext, useState } from "react";

export const RecipesContext = createContext();

export const RecipesController = (props) => {
    
  const [keyApi, setKeyApi] = useState("07ffac8c6c8b4f0cad22273dc84023c8");

  return (
    <RecipesContext.Provider
      value={{
        value1: [keyApi, setKeyApi],
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  );
};
