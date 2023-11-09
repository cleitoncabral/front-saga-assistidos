import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { Card } from '../../components/Card/Card'
import { dataBaseMovieApi } from '../../hooks/useDatabaseMovieApi'
import { MovieDB, MovieDBResults } from '../../types/MovieDB'

export const Home = () => {
  const userAuth = useContext(AuthContext)
  const getSearchData = dataBaseMovieApi()
  const [contentSaved, setContentSaved] = useState<Array<MovieDBResults>>()

  useEffect(() => {
    const resultArray: Array<MovieDBResults> = []
    const getDataFromApi = async () => {
      userAuth.contentWatched?.map(async (item) => {
        const result = await getSearchData.getDataMovieApiById(item.contentId)
        result.reviewContent = item
        resultArray.push(result)
        setContentSaved(resultArray)
      })
      
      console.log(contentSaved)
    }
    getDataFromApi()
  }, [userAuth])

  return (
    <section>
      <h1>boas vindas, {userAuth.user?.name}</h1>


      {contentSaved ? contentSaved.map((item: MovieDBResults) => { return <Card key={item.id} searchResultItem={item} />}) : <h2>Carregando...</h2>}
    </section>
  )
}