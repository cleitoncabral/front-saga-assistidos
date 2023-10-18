
import { Card } from "../../components/Card/Card"
import { MovieDBResults } from "../../types/MovieDB"
import { useSearchResult } from "../UserAuth/UserAuth"

export const SearchContent: React.FC = () => {
  const searchResult = useSearchResult()

  const content = searchResult?.results.map((item: MovieDBResults) => {return <Card key={item.id} searchResultItem={item}/> })

  return (
    <div>
      {
        searchResult ?
        <section>
          {content}
        </section>
        : <h1>Carregando...</h1> 
        
      }
    </div>
  )
}