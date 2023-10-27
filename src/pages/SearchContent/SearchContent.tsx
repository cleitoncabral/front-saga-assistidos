
import { useContext, useEffect } from "react"
import { Card } from "../../components/Card/Card"
import { MovieDBResults } from "../../types/MovieDB"
import { useSearchResult } from "../UserAuth/UserAuth"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ContentWatched } from "../../types/ContentWatched"

export const SearchContent: React.FC = () => {
  const searchResult = useSearchResult()
  const userData = useContext(AuthContext)

  useEffect(() => {
    searchResult?.results.map((item: MovieDBResults) => {
      userData.user?.contentWatched.map((content: ContentWatched) => {
        // console.log(item.id)
        // console.log(content.contentId)
        item.id == content.contentId ? item.reviewContent = content : console.log('error')
      })
    })
  }, [searchResult])
  
  // console.log(searchResult)
  // console.log(userData)
  return (
    <main className="container max-w-4xl center mx-auto flex flex-row flex-wrap gap-10">
      {
        searchResult ?
        searchResult?.results.map((item: MovieDBResults) => {return <Card key={item.id} searchResultItem={item}/> })
        : <h1>Carregando...</h1> 
      }
    </main>
  )
}