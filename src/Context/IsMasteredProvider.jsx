import { createContext, useContext, useState } from "react";

export const IsMasteredContext = createContext();

export default function IsMasteredProvider({ children }) {
  const [isMastered, setIsMastered] = useState(false);

  return (
    <IsMasteredContext.Provider value={{ isMastered, setIsMastered }}>
      {children}
    </IsMasteredContext.Provider>
  );
}

export const useIsMastered = () => {
  const context = useContext(IsMasteredContext);
  if (!context) {
    throw new Error("useIsMastered must be used within IsMasteredProvider");
  }
  return context;
};
