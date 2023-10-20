
import { Card } from "../../components/Card/Card"
import { MovieDBResults } from "../../types/MovieDB"
import { useSearchResult } from "../UserAuth/UserAuth"

export const SearchContent: React.FC = () => {
  const searchResult = useSearchResult()

  return (
    <div className="container max-w-4xl center mx-auto flex flex-row flex-wrap gap-10">
      {
        searchResult ?
        searchResult?.results.map((item: MovieDBResults) => {return <Card key={item.id} searchResultItem={item}/> })
        : <h1>Carregando...</h1> 
        
      }
    </div>
  )
}