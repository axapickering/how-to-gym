'use client';
import * as React from 'react';

export const ComplexityContext = React.createContext({})

export default function ComplexityProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <ComplexityContext.Provider value="simple">{children}</ComplexityContext.Provider>
}