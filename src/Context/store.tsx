'use client'

import React, { createContext, useContext, useState } from 'react';

interface TranslationContextProps {
  source: string;
  target: string;
  setSource: (source: string) => void;
  setTarget: (target: string) => void;
}

const TranslationContext = createContext<TranslationContextProps>({
  source: "",
  target: "",
  setSource: () => {},
  setTarget: () => {},
});

export const TranslationProvider = ({ children }: any) => {
  const [source, setSource] = useState<string>("");
  const [target, setTarget] = useState<string>("");

  return (
    <TranslationContext.Provider
      value={{
        source,
        target,
        setSource,
        setTarget,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);