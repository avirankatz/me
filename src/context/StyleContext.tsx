import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type StyleName = 'neo' | 'bauhaus' | 'vaporwave' | 'skeuo';

interface StyleContextType {
  style: StyleName;
  setStyle: (s: StyleName) => void;
  styles: { id: StyleName; label: string }[];
}

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export const StyleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [style, setStyle] = useState<StyleName>(() => {
    const saved = typeof window !== 'undefined' ? (localStorage.getItem('style') as StyleName | null) : null;
    return saved ?? 'neo';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-style', style);
    localStorage.setItem('style', style);
  }, [style]);

  const styles = useMemo<{ id: StyleName; label: string }[]>(() => ([
    { id: 'neo', label: 'Neo' },
    { id: 'bauhaus', label: 'Bauhaus' },
    { id: 'vaporwave', label: 'Vaporwave' },
    { id: 'skeuo', label: 'Skeuo' },
  ]), []);

  return (
    <StyleContext.Provider value={{ style, setStyle, styles }}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => {
  const ctx = useContext(StyleContext);
  if (!ctx) throw new Error('useStyle must be used within StyleProvider');
  return ctx;
};
