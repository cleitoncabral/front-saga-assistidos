
import { useContext, useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import { MovieDB, MovieDBResults } from "../../types/MovieDB"
import { useSearchResult } from "../UserAuth/UserAuth"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ContentWatched } from "../../types/ContentWatched"

export const SearchContent: React.FC = () => {
  const searchResult = useSearchResult()
  const userData = useContext(AuthContext)
  const [contentSearched, setContentSearched] = useState<MovieDB | null>(null)

  useEffect(() => {
    searchResult?.results.map((item: MovieDBResults) => {
      userData.contentWatched?.map((content: ContentWatched) => {
        item.id == content.contentId ? item.reviewContent = content : false      
      })
    })
    setContentSearched(searchResult)
  }, [searchResult])
  
  return (
    <main className="container max-w-4xl center mx-auto flex flex-row flex-wrap gap-10">
      {
        contentSearched ?
        contentSearched?.results.map((item: MovieDBResults) => {return <Card key={item.id} searchResultItem={item}/> })
        : <h1>Carregando...</h1> 
      }
    </main>
  )
}