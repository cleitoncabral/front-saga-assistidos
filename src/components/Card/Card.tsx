import { MovieDBResults } from "../../types/MovieDB"

export const Card = ({searchResultItem}: {searchResultItem: MovieDBResults}) => {
  console.log(searchResultItem)
  return (
    <div>
      <h1>{searchResultItem.title}</h1>
    </div>
  )
}
// criar interface/tipos para receber os dados da APi movies