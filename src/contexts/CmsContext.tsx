import { CMSSection } from '@/pages/landing';
import { createContext, useContext, ReactNode } from 'react'

type CMSContextType = {
  sections: CMSSection[];
  getSectionById: (id: string) => CMSSection | undefined;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

interface CMSProviderProps {
  children: ReactNode;
  data: CMSSection[];
}

export function CMSProvider({ children, data }: CMSProviderProps) {

  const getSectionById = (id: string) => data.find(section => section.id === id)
  
  const value = {
    sections: data,
    getSectionById,
  }
  
  return (
    <CMSContext.Provider value={value}>
      {children}
    </CMSContext.Provider>
  )
}

export function useCMS() {
  const context = useContext(CMSContext)
  if (!context) {
    throw new Error('useCMS must be used within CMSProvider')
  }
  return context
}