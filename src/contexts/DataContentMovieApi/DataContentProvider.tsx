import { DataContentContext } from "./DataContentContext"
import { useDatabaseMovieApi } from "../../hooks/useDatabaseMovieApi"

export const DataContentProvider = ({children}: {children: JSX.Element}) => {
  const getDataBase = useDatabaseMovieApi()

  const getDatabase = async (id: string) => {
    const dataApi = await getDataBase.getData(id)
    console.log(dataApi)

    return true
  }

  return (
    <DataContentContext.Provider value={{getDatabase}}>
      {children}
    </DataContentContext.Provider>
  )
}