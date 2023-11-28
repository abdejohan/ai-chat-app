import React, { ReactNode, useMemo, useState } from 'react';

type ContextType = {
  messages: string[];
  setMessages: (arr: string[]) => void;
};

const StoreContext = React.createContext<ContextType>({
  messages: [],
  setMessages: () => {},
});

export const StoreContextProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const state = useMemo(() => ({ messages, setMessages }), [messages, setMessages]);

  return <StoreContext.Provider value={state}>{children}</StoreContext.Provider>;
};

export default StoreContext;
