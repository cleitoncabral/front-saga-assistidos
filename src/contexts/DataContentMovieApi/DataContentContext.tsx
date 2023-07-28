import {createContext} from 'react'

export type ContentWatched = {
  getDatabase: (id: string) => Promise<boolean>
}

export const DataContentContext = createContext<ContentWatched>(null!)