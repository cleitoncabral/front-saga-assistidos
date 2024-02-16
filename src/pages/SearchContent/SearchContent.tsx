
import { useContext, useEffect, useState } from "react"
import { Card } from "../../components/Card/Card"
import { FiArrowLeft } from "react-icons/fi"
import { MovieDB, MovieDBResults } from "../../types/MovieDB"
import { useSearchResult } from "../UserAuth/UserAuth"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ContentWatched } from "../../types/ContentWatched"
import { useNavigate } from "react-router-dom"

export const SearchContent: React.FC = () => {
  const searchResult = useSearchResult()
  const userData = useContext(AuthContext)
  const [contentSearched, setContentSearched] = useState<MovieDB | null>(null)
  let navigate = useNavigate ();

  useEffect(() => {
    searchResult?.results.map((item: MovieDBResults) => {
      userData.contentWatched?.map((content: ContentWatched) => {
        Number(item.id) == content.contentId ? item.reviewContent = content : false      
      })
    })
    setContentSearched(searchResult)
  }, [searchResult])

  function handleBackPage () {
    navigate(-1)
    searchResult?.cleanInput
  }
  
  return (
    <main className="container max-w-4xl center mx-auto flex flex-row flex-wrap gap-10">
      <nav className="flex justify-between mb-12">
        <button onClick={handleBackPage}><FiArrowLeft size="2.2em" className='w-full hover:bg-transparent bg-greenDefault hover:stroke-greenDefault stroke-grayCard border-2 border-greenDefault rounded-md'/> </button>
      </nav>
      {
        contentSearched ?
        contentSearched?.results.map((item: MovieDBResults) => {return <Card key={item.id} searchResultItem={item}/> })
        : <h1>Carregando...</h1> 
      }
    </main>
  )
}